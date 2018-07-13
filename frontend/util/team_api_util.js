export const fetchTeam = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/teams/${id}`
  })
);

export const createTeam = (team) => (
  $.ajax({
    method: "POST",
    url: `/api/teams`,
    data: { team }
  })
);

export const updateTeam = (team) => (
  $.ajax({
    method: "PATCH",
    url: `/api/teams/${team.id}`,
    data: { team }  
  })
);
