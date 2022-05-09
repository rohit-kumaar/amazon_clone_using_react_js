import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.scss";

function Slider() {
  return (
    <>
      <div className="slider ">
        <OwlCarousel
          items={1}
          dots={false}
          className="owl-theme"
          loop
          nav
          margin={8}
          autoplay={true}
          autoplayTimeout={2000}
          autoplayHoverPause={true}
        >
          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/91NKjKsNxhL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>

          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/91yHGvgwGNL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>

          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/61TZWWADOaL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>

          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/814G81QOVIL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>

          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/61tZn5amuQL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>

          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/816bEwGy3nL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>

          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/61XJMtByggL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>

          <div className="img-wrapper">
            <img
              className="img"
              src="https://m.media-amazon.com/images/I/61gmF5nxjLL._SX3000_.jpg"
              alt="amazon"
            />
            <span></span>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export default Slider;
