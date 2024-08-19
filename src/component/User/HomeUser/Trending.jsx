import { IoMdTrendingUp } from "react-icons/io";
import Slider from "react-slick"
import DishDetail from "./component/DishDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../Api/axiosConfig";
import { useNavigate } from "react-router-dom";
const Trending = () => {
    const [dishs, setDishs] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchListDishTrend = async () => {
          try {
            const response = await axiosInstance.get("list");
            console.log(response);
            setDishs(response.data.list)
          } catch (error) {
            console.log(error)
          }
        };
        fetchListDishTrend();
      }, []);
    const setting = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        lazyLoad: true,
        slidesToScroll: 1,
    }
    return(
        <div>
            <div className="flex ml-12 mt-4">
                <p className="text-2xl font-bold font-arial text-orange-500">Món ăn phổ biến nhất</p>
                <IoMdTrendingUp className="ml-2 text-red-500" size={30}/>
            </div>
            <div className="w-[1440px] ml-[50px] mt-4">
                <Slider {...setting}>
                    {dishs && dishs.map(dish => (
                        <div key={dish.id}>
                            <DishDetail dish={dish}/>
                        </div>
                    ))}
                </Slider>
            </div>  
        </div>
    )
}
export default Trending