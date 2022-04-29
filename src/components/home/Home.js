import "./Home.scss";
import Product from "../products/Product";
import data from "../../data/ProductData";
import Slider from "../slider/Slider";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          {/* comment Slicer Component  */}
          <Slider />
        </div>
      </div>
      {/* comment Products Section  */}

      <div className="container position">
        <div className="products ">
          {data.productData.map((item, index) => {
            return (
              <Product
                key={index}
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
