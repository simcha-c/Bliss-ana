class Api::TasksController < ApplicationController

  # after_commit :render_show, on: [:create, :update_order]
  # after_rollback :render_errors, on: [:create, :update_order]

  def create
    task_params[:next_id] = task_params[:next_id] == 'false' ? nil : task_params[:next_id]
    task_params[:prev_id] = task_params[:prev_id] == 'false' ? nil : task_params[:prev_id]
    task = Task.new(task_params)
    column = Column.find(task_params[:column_id])
    @project = column.project
    @columns = @project.columns.includes(:tasks)
    task.creator_id = current_user.id
    head = column.head

    if task.save
      if head != nil
        head.prev_id = task.id
        head.save
      end

      render "/api/projects/show"
    else
      render json: task.errors.full_messages, status: 401
    end
  end

  def update
    @task = Task.find(params[:id])
    @column = Column.find(@task.column_id)

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 401
    end
  end

  def update_order
    @task = Task.find(params[:id])
    @prev_task = @task.prev
    @next_task = @task.next
    @future_prev = Tasks.find(task_params[:prev_id])
    @next_prev = Tasks.find(task_params[:next_id])

    update_related_tasks

    begin
      Task.transaction do
        @task.save!
        @prev_task.save!
        @next_task.save!
        @future_prev.save!
        @next_prev.save!
      end
      render :show
    rescue ActiveRecord::RecordInvalid
      render json: @task.errors.full_messages, status: 401
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.prev_id
      @prev_task = Task.find(@task.prev_id)
    end

    if @task.next_id
      @next_task = Task.find(@task.next_id)
    end

    if @prev_task
      @prev_task.next_id = @task.next_id
    end
    if @next_task
      @next_task.prev_id = @task.prev_id
    end

    begin
      Task.transaction do
        @task.destroy
        @prev_task.save if @prev_task
        @next_task.save if @next_task
      end
      @column = Column.find(@task.column_id)
      render :show
    rescue ActiveRecord::RecordInvalid
      render json: @task.errors.full_messages, status: 401
    end
  end

  def show
    @task = Task.find(params[:id])
    @column = Column.find(@task.column_id)
    render :show
  end

  private

  def task_params
    params.require(:task)
    .permit(:name, :creator_id, :column_id, :description, :due_date, :completed_date, :completer_id, :assignee_id, :prev_id, :next_id)
  end

  def update_related_tasks
    @prev_task.next_id = @next_task.id
    @next_task.prev_id = @prev_task.id
    @future_prev.next_id = @task.id
    @next_prev.prev_id = @task.id
    @task.next_id = task_params[:next_id]
    @task.next_id = task_params[:prev_id]
  end

end
