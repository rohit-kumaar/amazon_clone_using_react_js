const INITIAL_VALUE = 0;

export const getBasketTotal = (basket) =>
  basket?.reduce((prv, acc) => acc.price + prv, INITIAL_VALUE);

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
      // comment Logic to remove item from basket

      // comment we cloned the basket
      let newBasket = [...state.basket];

      // comment we check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // comment  item exists in basket remove it...
        newBasket.splice(index, 1);
      } else {
        console.log(`Can't remove product (id: ${action.id} as it is now)`);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default Reducer;
