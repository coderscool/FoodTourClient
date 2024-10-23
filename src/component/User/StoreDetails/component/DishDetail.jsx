import rice from "./../../../../assets/rice.webp"
import { MdAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
const DishDetail = ({dish}) => {
    console.log(dish)
    return(
        <>
        <div className="w-[350px] ml-5px bg-white border-[2px] border-gray-200 transition-transform duration-300 hover:scale-105">
            <img className="w-[350px] h-[200px] " src={dish.image}/>
            <div>
                <p className="m-0 text-[25px] font-bold font-arial pl-1 hover:text-orange-500 hover:underline">{dish.name}</p>
            </div>
        </div>
        </>
    )
}
export default DishDetail