import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_NEW_TASK = "RECEIVE_NEW_TASK";
export const RECEIVE_UPDATED_TASK = "RECEIVE_UPDATED_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveTask = ({ project, columns, tasks }) => {
  return {
    type: RECEIVE_NEW_TASK,
    project,
    columns,
    tasks,
  };
};

export const receiveUpdatedTask = ({ column, task }) => {
  return {
    type: RECEIVE_UPDATED_TASK,
    column,
    task,
  };
};

export const removeTask = ({ column, task }) => {
  return {
    type: REMOVE_TASK,
    column,
    task,
  };
};

export const createTask = (task) => dispatch => {
  return TaskAPIUtil.createTask(task).then(
    payload => dispatch(receiveTask(payload))
  );
};

export const updateTask = (task) => dispatch => {
  return TaskAPIUtil.updateTask(task).then(
    payload => dispatch(receiveUpdatedTask(payload))
  );
};

export const deleteTask = (id) => dispatch => {
  return TaskAPIUtil.deleteTask(id).then(
    payload => dispatch(removeTask(payload))
  );
};
