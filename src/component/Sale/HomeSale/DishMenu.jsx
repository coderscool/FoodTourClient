import { useState } from "react";
import DishDetail from "./component/DishDetail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pagination from '@mui/material/Pagination';
import { useSelector } from "react-redux";
import { selectListDish } from "../../Reducers/dishSlice";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: purple,
  },
});
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
      <p className="font-medium text-[20px] ml-10 mt-4">Danh sách món ăn</p>
      <div className="flex flex-col ml-10 bg-white mt-2 mb-2">
        <div className="">
          {
            (dishs.length > 0) ? (
              <div className="flex flex-row">
                {dishs && dishs.map((dish) => (
                <div key={dish.id}>
                  <DishDetail dish={dish}/>
                </div>
                ))}
              </div>
            ) : (
              <p className="font-medium text-[20px] flex justify-center mt-4 mb-4">Hiện tại quán chưa có món ăn nào</p>
            )
          }
        </div>
      </div>
      {dishs.length > 0 ? <ThemeProvider theme={theme}>
        <Pagination className="flex justify-center mb-2" count={10} variant="outlined" color="primary" />
      </ThemeProvider> : null}
    </>
  );
};
export default DishMenu;
