import "./Cart.scss";
import { useContext } from "react";
import StateContext from "../../context/Context";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../data/Reducer";

function Cart() {
  const [{ basket }] = useContext(StateContext);

  return (
    <>
      <div className="cart">
        {/*comment Ternary Operator  */}
        {basket?.length === 0 ? (
          <div className="cart__empty">
            <h2>Your didn't add any wishlist</h2>
          </div>
        ) : (
          <div className="container">
            <div className="cart__added">
              <h2 className="cart__header d-flex align-items-center justify-content-center">
                Your added Cart
              </h2>

              <div className="cart__carts">
                {basket.map((item, index) => (
                  // comment  if you use {} then you have to "return" a value
                  <CheckoutProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    img={item.img}
                  />
                ))}
              </div>

              {/* comment total price  */}
              <div className="cart-total-price">
                <h5 className="cart-total-price__header mb-3">
                  Cart subtotal:{" "}
                  <CurrencyFormat
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                </h5>

                <Link to="#">
                  <button className="button w-100 ">
                    Proceed to Buy ( {basket.length} item )
                  </button>
                </Link>

                <Link to="#">
                  <button className="button w-100 mt-3">Go to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
