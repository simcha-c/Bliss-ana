class Api::TeamMembershipsController < ApplicationController

  def create
    @membership = TeamMembership.new(team_membership_params)
    @membership.team_id = params[:team_id]
    if @membership.save
      render template: "/api/teams/#{@membership.team_id}"
    else
      render json: @membership.errors.full_messages, status: 401
    end
  end

  def update
    @membership = TeamMembership.find(params[:id])
    if @membership.update(team_membership_params)
      render template: "/api/teams/#{@membership.team_id}"
    else
      render json: @membership.errors.full_messages, status: 401
    end
  end

  def destroy
    @membership = TeamMembership.find(params[:id])
    @membership.destroy
    render template: "/api/teams/#{@membership.team_id}"
  end

  private

  def team_membership_params
    params.require(:team_memberships).permit(:user_id, :role, :department, :about_me)
  end

end
