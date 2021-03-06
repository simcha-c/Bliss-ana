
export const createTask = (task) => {
  return (
    $.ajax({
      method: "POST",
      url: `/api/tasks/`,
      data: { task }
    })
  );
};

export const updateTask = (task) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/tasks/${task.id}`,
      data: { task }
    })
  );
};

export const deleteTask = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/tasks/${id}`
    })
  );
};

export const updateTaskOrder = (orderInfo) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/tasks/${orderInfo.task_id}/update_order`,
      data: {orderInfo}
    })
  );
};
