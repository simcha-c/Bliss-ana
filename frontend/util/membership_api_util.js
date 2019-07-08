export const updateMembership = (team_memberships) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/team_memberships/${team_memberships.id}`,
    data: { team_memberships },
  });
};
