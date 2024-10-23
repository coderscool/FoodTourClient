import Slider from "react-slick"
import Store from "./component/Store";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Api/axiosConfig";
const StoreAdvertis = () => {
    const dishs = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
    ]
    const setting = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        lazyLoad: true,
        slidesToScroll: 1,
    }
    useEffect(() => {
        const fetchListDishTrend = async () => {
          try {
            const data = {
                key: "",
                nation: "",
                location: "",
                page: 0,
                size: 4
            }
            const response = await axiosInstance.post("/identity/store", data);
            setStore(response.data.list)
            console.log(response);
          } catch (error) {
            console.log(error)
          }
        };
        fetchListDishTrend();
      }, []);
    
    const [stories, setStore] = useState([])
    return(
        <div>
            <div className="flex ml-12 mt-4">
                <p className="text-2xl font-bold font-arial text-orange-500">Quán ăn bạn có thể biết</p>
            </div>
            <div className="w-[1440px] ml-[50px] mt-4">
                <Slider {...setting}>
                    {stories.map(store => (
                        <div key={store.id}>
                            <Store store={store}/>
                        </div>
                    ))}
                </Slider>
            </div>  
        </div>
    )
}
export default StoreAdvertis