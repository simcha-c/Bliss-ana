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
    task = Task.find(params[:id])
    column = Column.find(task.column_id)
    @project = column.project
    @columns = @project.columns.includes(:tasks)

    if task.update(task_params)
      render "/api/projects/show"
    else
      render json: task.errors.full_messages, status: 401
    end
  end

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

end
