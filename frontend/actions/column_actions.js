import * as ColumnAPIUtil from '../util/column_api_util';

export const RECEIVE_NEW_COLUMN = "RECEIVE_NEW_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";

export const receiveColumn = (column) => {
  return {
    type: RECEIVE_NEW_COLUMN,
    column
  };
};

export const removeColumn = (id) => {
  return {
    type: REMOVE_COLUMN,
    id,
  };
};

export const createColumn = (column) => dispatch => {
  return ColumnAPIUtil.createColumn(column).then(
    column => dispatch(receiveColumn(column)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateColumn = (column) => dispatch => {
  return ColumnAPIUtil.updateColumn(column).then(
    column => dispatch(receiveColumn(column)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteColumn = (id) => dispatch => {
  return ColumnAPIUtil.deleteColumn(id).then(
    id => dispatch(removeColumn(id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
