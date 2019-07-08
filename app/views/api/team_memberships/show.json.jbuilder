json.team_membership do
  json.set! @membership.id do
    json.partial! 'api/team_memberships/team_membership', membership: @membership
  end
end