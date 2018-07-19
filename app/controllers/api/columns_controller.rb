class Api::ColumnsController < ApplicationController

  def create
    @column = Column.new(column_params)
    @project = Project.find(column_params[:project_id])

    if @column.save
      render "/api/projects/show"
    else
      render json: @column.errors.full_messages, status: 401
    end
  end

  def update
    @column = Column.find(params[:id])
    @project = Project.find(column_params[:project_id])

    if @column.update(column_params)
      render "/api/projects/show"
    else
      render json: @column.errors.full_messages, status: 401
    end
  end

  def destroy
    @column = Column.find(params[:id])
    @column.destroy
    @project = Project.find(@column.project_id)

    render "/api/projects/show"
  end

  private

  def column_params
    params.require(:column).permit(:title, :project_id)
  end

end
