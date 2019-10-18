json.extract! user, :id, :email, :first, :last, :team_ids

team_memberships = {}
user.teams.includes(memberships: [:user]).each do |team|
  membership = team.memberships.where(user: user)
  team_memberships[team.id] = membership.first.id
end

json.team_membership_ids team_memberships

if (user.photo.attached?)
  json.photoUrl url_for(user.photo)
end
