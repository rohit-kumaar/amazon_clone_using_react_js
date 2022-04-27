export const initialState = {
  basket: [
    {
      id: 1,
      title: "Mobile",
      price: 10000,
      rating: 5,
      img: "https://source.unsplash.com/420x220/?mobile",
    },
  ],
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
