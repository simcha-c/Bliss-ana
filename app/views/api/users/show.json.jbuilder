json.currentUser do
  json.partial! 'api/users/user', user: @user
end

json.teams do
  @user.teams.includes(:projects).includes(:members).each do |team|
    json.set! team.id do
      json.extract! team, :id, :name, :project_ids, :member_ids
    end
  end
end

json.team_memberships do 
  @user.team_memberships.each do |team_membership| 
    json.set! team_membership.id do
      json.partial! 'api/team_memberships/team_membership', membership: team_membership
    end
  end
end
