import * as ColumnAPIUtil from '../util/column_api_util';

export const RECEIVE_NEW_COLUMN = "RECEIVE_NEW_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";

export const receiveColumn = ({ project, columns, tasks }) => {
  return {
    type: RECEIVE_NEW_COLUMN,
    columns,
    project,
    tasks,
  };
};

export const removeColumn = ({ project, column }) => {
  return {
    type: REMOVE_COLUMN,
    project,
    column,
  };
};

export const createColumn = (column) => dispatch => {
  return ColumnAPIUtil.createColumn(column).then(
    payload => dispatch(receiveColumn(payload))
  );
};

export const updateColumn = (column) => dispatch => {
  return ColumnAPIUtil.updateColumn(column).then(
    payload => dispatch(receiveColumn(payload))
  );
};

export const deleteColumn = (id) => dispatch => {
  return ColumnAPIUtil.deleteColumn(id).then(
    payload => dispatch(removeColumn(payload))
  );
};
