import "./Home.scss";
import Product from "../products/Product";
import data from "../../data/ProductData";
import Slider from "../slider/Slider";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          {/* comment Slicer Component  */}
          <Slider />
        </div>
      </section>
      {/* comment Products Section  */}

      <section className="container position">
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
      </section>
    </>
  );
}

export default Home;
