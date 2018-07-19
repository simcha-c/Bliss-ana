
export const createColumn = (column) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/columns/`,
      data: { column }
    })
  );
};

export const updateColumn = (column) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/columns/${column.id}`,
      data: { column }
    })
  );
};

export const deleteColumn = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/columns/${id}`
    })
  );
};
