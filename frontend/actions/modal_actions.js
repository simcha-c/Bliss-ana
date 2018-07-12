export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, state) => {
  return {
    type: OPEN_MODAL,
    modal,
    state
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
