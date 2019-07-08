members = @team.members.includes(:team_memberships).where(team_memberships: {team_id: @team.id})

json.team do
  json.partial! 'api/teams/team', team: @team
end

json.team_memberships do
  @team.memberships.each do |member|
    json.set! member.id do
      json.partial! 'api/team_memberships/team_membership', membership: member
    end
  end
end

json.members do
  members.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
      # membership = member.team_memberships.where(team: @team)
      # json.extract! member, :id, :first, :last, :email, :team_membership_ids
      # if member.photo.attached?
      #   json.photoUrl url_for(member.photo)
      # end
    end
  end
end

json.projects do
  @team.projects.includes(:columns).each do |project|
    json.set! project.id do
      json.extract! project, :id, :name, :team_id, :column_ids
      json.column_ids project.column_ids.sort!
    end
  end
end
