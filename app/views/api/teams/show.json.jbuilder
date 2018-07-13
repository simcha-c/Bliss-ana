
json.members do
  members = @team.members.includes(:team_memberships).where(team_memberships: {team_id: @team.id})

  members.each do |member|

    json.set! member.id do
      membership = member.team_memberships.first
      json.extract! member, :id, :first, :last, :email
      json.extract! membership, :role, :description, :about_me
    end
    
  end

end
