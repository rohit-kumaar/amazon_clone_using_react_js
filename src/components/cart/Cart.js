import "./Cart.scss";
import { useContext } from "react";
import StateContext from "../../context/Context";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";

function Cart() {
  const [{ basket }] = useContext(StateContext);

  return (
    <>
      <div className="cart">
        {/*comment Ternary Operator  */}
        {basket?.length === 0 ? (
          <div className="cart__empty">
            <h2>Your did't add any wishlist</h2>
          </div>
        ) : (
          <div className="container">
            <div className="cart__added">
              <h2>Your added Cart</h2>

              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  img={item.img}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
