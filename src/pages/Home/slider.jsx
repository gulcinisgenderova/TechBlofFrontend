import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function HomeSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="sliderImage">
        <Slider {...settings}>
          <div className="slider1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3oC867ubFyliJdISs48opBRLSpcE9-xo_Q&s"
              alt=""
            />

          </div>
          <div className="slider2">
            <img
              src="https://liberties.imgix.net/images/d6668976-5dec-47ce-887b-c16e71f7ab6c/AI_regulations-bertie.png?ixlib=rails-4.1.0&fm=jpg&auto=format&lossless=true&w=1200&h=630&s=6d40e178ac2515d4d40ca5f82be0f62f"
              alt=""
            />

          </div>
          <div className="slider2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeI40X7gIdAErz37pOYICpYe-ZwfoVK1rnQ&s"
              alt=""
            />

          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomeSlider;