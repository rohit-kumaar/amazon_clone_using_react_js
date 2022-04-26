import "./Home.scss";
import Products from "../products/Products";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">Home</div>
      </div>
      {/* Products Section  */}
      <Products />
    </>
  );
}

export default Home;
