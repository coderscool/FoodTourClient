import axiosInstance from "../../../../Api/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import DishInfor from "../DishInfor";
import axios from "axios";
import { toast } from "react-toastify";
import { notifyCart } from "../../../Reducers/headerSlice";
import { useDispatch } from "react-redux";
import DishSuggest from "../DishSuggest";

const DishPage = () => {
    const paramId = useParams();
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchListDishTrend = async () => {
          try {  
            const response = await axiosInstance.get(`/dish/id?id=${paramId.id}`);
            console.log(response);
            setDish(response.data.dish)
            setRestaurant(response.data.restaurant)
          } catch (error) {
            console.log(error)
          }
        };
        fetchListDishTrend();
      }, []);
      const [dish, setDish] = useState([])
      const [restaurant, setRestaurant] = useState([])
      const [open, setOpen] = useState(true)
      const onHandleAddCart = async (dish) => {
        if(!token){
          navigate("/login")
        }
        try {
          const response = await axiosInstance.get("/identity/infor");
          const data = {
            id: "",
            restaurantId: dish.restaurantId,
            customerId: response.data.id,
            dishId: dish.id,
            amount: 1
          }
          await axiosInstance.post("/cart", data)
          console.log(data)
          dispatch(notifyCart())
          toast.success("Thêm thành công món ăn vào giỏ hàng")
        } catch (error) {
          navigate("/login")
        }
      }

    return(
        <div className="bg-[#efefef] pb-2">
            <DishInfor dish={dish} restaurant={restaurant} onHandleAddCart={onHandleAddCart}/>
            <DishSuggest/>
        </div>
    )
}
export default DishPage