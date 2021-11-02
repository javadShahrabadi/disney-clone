import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel>
      <Slider {...setting}>
        <Wrap>
          <img src='/images/slider-badging.jpg' alt='slider-pic' />
        </Wrap>
        <Wrap>
          <img src='/images/slider-badag.jpg' alt='slider-pic' />
        </Wrap>
      </Slider>
    </Carousel>
  );
}

export default ImgSlider;
const Carousel = styled.div`
  margin-top: 20px;
  padding-right: 30px;
  padding-left: 25px;
  ul li button::before {
    font-size: 10px;
    color: white;
  }
  li.slick-active button::before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border: 4px solid transparent;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
