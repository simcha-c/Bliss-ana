class Api::TasksController < ApplicationController

  def create
    task = Task.new(task_params)
    column = Column.find(task_params[:column_id])
    @project = column.project
    @columns = @project.columns.includes(:tasks)
    task.creator_id = current_user.id

    if task.save
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

  # def update_order
  #   @task = Task.find(params[:id])
  #   @column = Column.find(@task.column_id)
  #   @all_tasks = @column.tasks
  #   column_ends
  #
  #   if task_params.prev_id == nil
  #     first = @head
  #     @head = @task
  #     @task.next_id = first.id
  #     first.prev_id = @task.id
  #   end
  #
  #   column_ord
  #   if @task.update(task_params)
  #     first.save
  #     render :show
  #   else
  #     render json: @task.errors.full_messages, status: 401
  #   end
  # end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    @column = Column.find(@task.column_id)

    render :show
  end

  def show
    @task = Task.find(params[:id])
    @column = Column.find(@task.column_id)
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:name, :creator_id, :column_id, :description, :due_date, :completed_date)
  end

  # def column_ends
  #   @head = @all_tasks.where(prev_id: nil)[0]
  #   @tail = @all_tasks.where(next_id: nil)[0]
  # end
  #
  # def column_ord
  #   @ord = [@head.id]
  #   until @all_tasks.where(id: @ord[-1])[0].next_id == nil
  #     last = @all_tasks.where(id: @ord[-1])[0]
  #     @ord << last.next_id
  #   end
  #   @ord
  #
  # end

end
