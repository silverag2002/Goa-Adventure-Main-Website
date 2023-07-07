import React from "react";
import Slider from "react-slick";
import ProductList from "./ProductList";
import { activityData } from "../../../public/assets/data/Data";
import ProductCard from "./ProductCard";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

interface ProductSliderProps {
  data?: any;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  const handleEdge = (edge: string) => {
    console.log(`Edge reached: ${edge}`);
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    onEdge: (edge: string) => handleEdge(edge),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="pt-8">
      {data?.map((item: any, index: any) => (
        <ProductCard item={item} key={index} />
      ))}
    </Slider>
  );
};

export default ProductSlider;
