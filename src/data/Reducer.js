export const initialState = {
  basket: [],
  user: null,
};

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //code
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_TO_BASKET":
      // code
      return { state };

    default:
      return state;
  }
}

export default Reducer;
