import "./Home.scss";
import Product from "../products/Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">Home</div>
      </div>
      {/* Products Section  */}

      <Product
        id="123"
        title="Apple"
        price={"89,999"}
        rating={5}
        img="https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ.jpg"
      />
    </>
  );
}

export default Home;
