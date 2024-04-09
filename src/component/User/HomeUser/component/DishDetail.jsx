import rice from "./../../../../assets/rice.webp"
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const DishDetail = () => {
    return(
        <>
        <div className="w-[350px] ml 5px">
            <img className="w-[350px] h-[200px] " src={rice}/>
            <div>
                <p className="m-0 text-[25px] font-bold font-arial pl-1">Cơm Tấm</p>
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
                <div className="flex pl-1">
                    <div><AiOutlineTag size={25} color="green"/></div>
                    <div className="m-0 font-arial" >Đặc sản Việt Nam</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default DishDetail