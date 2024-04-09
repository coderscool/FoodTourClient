import { IoMdTrendingUp } from "react-icons/io";
import Slider from "react-slick"
import DishDetail from "./component/DishDetail";
const Trending = () => {
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
    return(
        <div>
            <div className="flex ml-12 mt-4">
                <p className="text-2xl font-bold font-arial text-orange-500">Món ăn phổ biến nhất</p>
                <IoMdTrendingUp className="ml-2 text-red-500" size={30}/>
            </div>
            <div className="w-[1440px] ml-[50px] mt-4">
                <Slider {...setting}>
                    {dishs.map(dish => (
                        <div key={dish.id}>
                            <DishDetail/>
                        </div>
                    ))}
                </Slider>
            </div>  
        </div>
    )
}
export default Trending