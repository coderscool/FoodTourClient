import store from "./../../../../assets/store.jpg";
import suning from "./../../../../assets/suning.jpg" 
import Pagination from '@mui/material/Pagination';
import DishDetail from "../component/DishDetail";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../Api/axiosConfig";
import { useParams } from "react-router-dom";
import InforRestaurant from "../component/InforRestaurant";
const StorePage = () => {
  const param = useParams()
  console.log(param)
  useEffect(() => {
    const fetchInforRestaurant = async () => {
      try {
        const response = await axiosInstance.get(`/identity/test?id=${param.id}`);
        console.log("data", response.data);
        setRestaurant(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchInforRestaurant();
  }, []);
  useEffect(() => {
    const fetchDishRestaurant = async () => {
      try {
        const response = await axiosInstance.get(`/dish/restaurant?id=${param.id}&page=0&size=3`);
        console.log("data", response.data);
        setDish(response.data.list)
      } catch (error) {
        console.log(error)
      }
    };
    fetchDishRestaurant();
  }, []);
  const [restaurant, setRestaurant] = useState({})
  const [dishes, setDish] = useState([])
  return (
    <div className="flex justify-center bg-[#eee]">
      <div className="w-[1100px]">
        <InforRestaurant restaurant={restaurant}/>
        <div>
          <div className="text-[24px] font-bold text-orange-500 my-2">Thực đơn món ăn</div>
          <div className="flex justify-between">
            {dishes.map((dish) => (
              <div key={dish}>
                <DishDetail dish={dish}/>
              </div>
            ))}
          </div>
        <Pagination className="flex justify-center mb-4 mt-2" count={10} variant="outlined" color="primary" />
        </div>
        <div className="flex">
          <img className="border border-black w-10 h-10 rounded-[50%]" src={suning}/>
          <div className="w-[900px]">
            <div className="text-[14px] font-sans border-b-2 border-gray-300 ml-4">
              Viet binh luan...
            </div>
            <div className="flex text-[14px] justify-end my-2">
              <button className="w-16 h-8 bg-gray-500 rounded-[16px] mr-2">
                Huy
              </button>
              <button className="w-20 h-8 bg-orange-500 rounded-[16px]">
                Binh luan
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <img className="border border-black w-10 h-10 rounded-[50%]" src={suning}/>
          <div className="w-[900px]">
            <div className="text-[14px] font-sans font-medium ml-4">
              Vu Hoang Phuong
            </div>
            <div className="text-[14px] font-sans ml-4">Cam on vi da den</div>
          </div>
        </div>
        <div className="flex mt-2">
          <img className="border border-black w-10 h-10 rounded-[50%]" src={suning}/>
          <div className="w-[900px]">
            <div className="text-[14px] font-sans font-medium ml-4">
              Vu Hoang Phuong
            </div>
            <div className="text-[14px] font-sans ml-4">Cam on vi da den</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StorePage;
