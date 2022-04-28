import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.scss";

function Slider() {
  return (
    <>
      <div className="slider ">
        <div>
          <OwlCarousel
            items={1}
            dots={false}
            className="owl-theme"
            loop
            nav
            margin={8}
          >
            <div>
              <img
                className="img"
                src="https://m.media-amazon.com/images/I/91NKjKsNxhL._SX3000_.jpg"
                alt="amazon"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://m.media-amazon.com/images/I/61TZWWADOaL._SX3000_.jpg"
                alt="amazon"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://m.media-amazon.com/images/I/814G81QOVIL._SX3000_.jpg"
                alt="amazon"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://m.media-amazon.com/images/I/61tZn5amuQL._SX3000_.jpg"
                alt="amazon"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://m.media-amazon.com/images/I/816bEwGy3nL._SX3000_.jpg"
                alt="amazon"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://m.media-amazon.com/images/I/61XJMtByggL._SX3000_.jpg"
                alt="amazon"
              />
            </div>
            <div>
              <img
                className="img"
                src="https://m.media-amazon.com/images/I/61gmF5nxjLL._SX3000_.jpg"
                alt="amazon"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default Slider;
