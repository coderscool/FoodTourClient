import rice from "./../../../../assets/rice.webp"
import { MdAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const DishDetail = (props) => {
    const {dish} = props
    return(
        <>
        <div className="w-[350px] ml-5px bg-white border-[2px] border-gray-200 transition-transform duration-300 hover:scale-105">
            <img className="w-[350px] h-[200px] " src={dish.image}/>
            <div>
                <Link to={`/home/dish/${dish.id}`} className="m-0 text-[25px] font-bold font-arial pl-1 hover:text-orange-500 hover:underline">{dish.name}</Link>
                <span className="text-[13px] font-arial ml-1 p-[2px] bg-[rgb(104, 103, 103)]">Cơm</span>
                <div className="flex justify-between mt-2 mb-1">
                    <div className="flex pl-1">
                        <div><AiFillStar size={25} color="yellow"/></div>
                        <p className="m-0 text-[rgb(104, 103, 103)] text-[17px]">4.5</p>
                    </div>
                    <div className="flex pr-2">
                        <div><MdAttachMoney size={25} color="brown"/></div>
                        <p className="m-0 text-[rgb(104, 103, 103)] text-[17px]">450000VND</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default DishDetail