members = @team.members.includes(:team_memberships).where(team_memberships: {team_id: @team.id})

json.team do
  json.extract! @team, :id, :name, :project_ids, :member_ids
end

json.members do
  members.each do |member|
    json.set! member.id do
      membership = member.team_memberships.first
      json.extract! member, :id, :first, :last, :email
      json.extract! membership, :role, :department, :about_me
    end
  end
end

json.projects do
  @team.projects.includes(:columns).each do |project|
    json.set! project.id do
      json.extract! project, :id, :name, :team_id, :column_ids
    end
  end
end
