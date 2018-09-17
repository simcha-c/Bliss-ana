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
    task_idx = params[:orderInfo][:index].to_i
    future_ord = params[:orderInfo][:future_ord]

    @task = Task.find(params[:orderInfo][:task_id])
    @prev_col = Column.find(@task.column_id)
    @next_col = Column.find(params[:orderInfo][:future_col].to_i)
    arr = [@task]
    # related_task_ids = [@task[:id].to_i, @task[:prev_id].to_i, @task[:next_id].to_i, future_ord[task_idx +1].to_i, future_ord[task_idx -1].to_i]
    unless @task.prev_id.nil?
      @prev_task = Task.find(@task.prev_id)
      arr << @prev_task
    end
    unless @task.next_id.nil?
      @next_task = Task.find(@task.next_id)
      arr << @next_task
    end
    if (task_idx - 1) >= 0
      @future_prev = Task.find(future_ord[task_idx - 1].to_i)
      arr << @future_prev
    end
    unless future_ord[task_idx + 1].nil?
      @future_next = Task.find(future_ord[task_idx + 1].to_i)
      arr << @future_next
    end

    update_related_tasks

    begin
      Task.transaction do
        arr.each do |task|
          task.save!
        end
      end
      render :order
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
    .permit(:name, :creator_id, :column_id, :description, :due_date,
      :completed_date, :completer_id, :assignee_id, :prev_id, :next_id,
      :orderInfo)
  end

  def update_related_tasks
    @prev_task.next_id = @task.next_id if @prev_task
    @next_task.prev_id = @task.prev_id if @next_task

    @future_prev.next_id = @task.id if @future_prev
    @future_next.prev_id = @task.id if @future_next
    @future_next ? @task.next_id = @future_next.id : @task.next_id = nil
    @future_prev ? @task.prev_id = @future_prev.id : @task.prev_id = nil
    @task.column_id = params[:orderInfo][:future_col].to_i
  end

end
