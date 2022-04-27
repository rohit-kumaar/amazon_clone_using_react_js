import "./Cart.scss";
import { useContext } from "react";
import StateContext from "../../context/Context";

function Cart() {
  const [{ basket }] = useContext(StateContext);

  return (
    <>
      <div className="cart">
        {/* Ternary Operator  */}
        {basket?.length === 0 ? (
          <div className="cart__empty">
            <h2>Your did't add any wishlist</h2>
          </div>
        ) : (
          <div className="container">
            <div className="cart__added">
              <h2>Your Cart</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
