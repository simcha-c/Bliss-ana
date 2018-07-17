class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)
    @user = current_user
    if @team.save
      TeamMembership.create(user_id: @user.id, team_id: @team.id)
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

  def destroy
    @team = Team.find(params[:id])
    @user = current_user
    @team.destroy
    render "/api/users/show"
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end

end
