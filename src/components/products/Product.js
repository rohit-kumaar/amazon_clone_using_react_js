import "./Product.scss";

function product(props) {
  return (
    <>
      <div className="product bg-white">
        <div className="product__content">
          {/* Title  */}
          <p className="product__title fs-3 fw-bold">{props.title}</p>
          {/* Price  */}
          <p className="product__price">
            <small>&#8377;</small>
            <strong className="ms-1">{props.price}</strong>
          </p>
          {/* Rating  */}
          <div className="product__rating d-flex">
            {Array(props.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          {/* Image  */}
        </div>
        <img className="product__img" src={props.img} alt="Apple" />
        <button className="bg-warning fw-bold rounded-pill">Add To Cart</button>
      </div>
    </>
  );
}

export default product;
