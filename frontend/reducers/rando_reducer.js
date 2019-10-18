const randoReducer = (state = {rando: false}, action) => {
  switch (action.type) {

    case "RANDO":
      return { rando: true };

    default:
      return state;
  }
};

export default randoReducer;
