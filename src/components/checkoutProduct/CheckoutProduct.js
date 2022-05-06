import React from "react";
import "./CheckoutProduct.scss";
import { useContext } from "react";
import StateContext from "../../context/Context";

function CheckoutProduct(props) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useContext(StateContext);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_TO_BASKET",
      id: props.id,
    });
  };

  return (
    <>
      <div className="checkout-product p-5 bg-white">
        {/* comment image  */}
        <div className="checkout-product__img">
          <img src={props.img} alt={props.title} />
        </div>
        {/* comment details  */}
        <div className="checkout-product__details">
          <h3>{props.title}</h3>
          <p>
            <small>&#8377;</small>
            <strong className="ms-1">{props.price}</strong>
          </p>
          <div className="d-flex align-items-center ">
            {Array(props.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          {/* comment remove btn  */}
          <button
            className="bg-warning   my-3 button"
            onClick={removeFromBasket}
            on="true"
            style={{ padding: "4px 8px", width: "fit-content" }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
