import "./Product.scss";
import { useContext } from "react";
import StateContext from "../../context/Context";
import { Link } from "react-router-dom";

function Product(props) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useContext(StateContext);

  const addToBasket = () => {
    //comment Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        ...props,
      },
    });
  };

  return (
    <>
      <Link to="/" className="product bg-white  text-black">
        <div className="product__content">
          {/*comment Title  */}
          <p className="product__title fs-3 fw-bold text-center">
            {props.title}
          </p>
          {/*comment Price  */}
          <p className="product__price">
            <small>&#8377;</small>
            <strong className="ms-1">{props.price}</strong>
          </p>
          {/*comment Rating  */}
          <div className="product__rating d-flex">
            {Array(props.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          {/*comment Image  */}
        </div>
        <img className="product__img" src={props.img} alt={props.title} />
        <button
          className="bg-warning  my-3 header__signin-btn"
          onClick={addToBasket}
          on="true"
          style={{ width: "fit-content" }}
        >
          Add To Cart
        </button>
      </Link>
    </>
  );
}

export default Product;
