class Api::ProjectsController < ApplicationController

  def create
    @project = Project.new(project_params)
    @project.team_id = params[:team_id]

    if @project.save
      render template: "/api/teams/#{@project.team_id}"
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update
      render template: "/api/teams/#{@project.team_id}"
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render template: "/api/teams/#{@project.team_id}"
  end

  def project_params
    params.require(:projects).permit(:name)
  end

end
