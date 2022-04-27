import React from "react";
import "./CheckoutProduct.scss";

function CheckoutProduct(props) {
  return (
    <>
      <div className="checkout-product">
        <div className="checkout-product__img">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="checkout-product__details">
          <h3>{props.title}</h3>
          <p>
            <small>&#8377;</small>
            <strong>{props.price}</strong>
          </p>
          <div>
            {Array(props.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
