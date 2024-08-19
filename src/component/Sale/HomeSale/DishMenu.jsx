import { useState } from "react";
import DishDetail from "./component/DishDetail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { selectListDish } from "../../Reducers/dishSlice";

const DishMenu = () => {
  const dishs = useSelector(selectListDish)
  console.log("dish",dishs.length)
  const setting = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    centerMode: false,
    lazyLoad: true,
    slidesToScroll: 1,
  };
  return (
    <>
      <h2>Danh sach mon an</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          {
            (dishs.length > setting.slidesToShow) ? (
              <Slider {...setting}>
                {dishs && dishs.map((dish) => (
                  <div key={dish.id}>
                    <DishDetail dish={dish}/>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="flex flex-row">
                {dishs && dishs.map((dish) => (
                <div key={dish.id}>
                  <DishDetail dish={dish}/>
                </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};
export default DishMenu;
