class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)
    @user = current_user
    if @team.save
      TeamMembership.new(user_id: @user.id, team_id: @team.id)
      render :show
    else
      render json: @team.errors.full_messages, status: 401
    end
  end

  def update
    @team = Team.find(params[:id])

    if @team.update(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 401
    end
  end

  def show
    @team = Team.find(params[:id])
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end

end
