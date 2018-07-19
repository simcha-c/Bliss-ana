class Api::ProjectsController < ApplicationController

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
    # @project.team_id = params[:team_id]

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end

  def project_params
    params.require(:project).permit(:name, :team_id)
  end

end