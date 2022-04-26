import "./Home.scss";
import Product from "../products/Product";
import data from "../../data/ProductData";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">Home</div>
      </div>
      {/* Products Section  */}

      <div className="container">
        <div className="products ">
          {data.productData.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
