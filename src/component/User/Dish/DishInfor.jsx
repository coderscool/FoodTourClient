import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
export default function DishInfor({dish, restaurant, onHandleAddCart}){
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }
    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    const handleAddCart = () => {
        onHandleAddCart(dish)
    }
    return(
        <div className="flex">
            <div className="rounded-[5px] bg-white ml-20 mt-3">
                <img className="w-[350px] h-[200px] m-4" src={dish.image}/>
            </div>
            <div className="rounded-[5px] bg-white w-[520px] ml-3 mt-3 p-4">
                <div className="text-2xl font-bold font-arial">{dish.name}</div>
                <div className="flex">
                    <div className="flex">
                        <p className="text-[15px] font-sans">5.0</p>
                        <div className="flex mt-1">
                            <AiFillStar color="orange" size={15}/>
                            <AiFillStar color="orange" size={15}/>
                            <AiFillStar color="orange" size={15}/>
                            <AiFillStar color="orange" size={15}/>
                            <AiFillStar color="orange" size={15}/>
                        </div>
                    </div>
                    <div className="flex ml-5">
                        <p className="text-[15px] font-arial">Đã bán:</p>
                        <p className="text-[15px] font-arial ml-1">123</p>
                    </div>
                </div>
                <div className="flex mb-1">
                    <p className="text-[25px] font-arial font-medium">{dish.price}</p>
                    <p className="font-arial font-medium">đ</p>
                </div>
                <div className="flex">
                    <div><CiLocationOn size={25} color="green"/></div>
                    <div className="m-0 font-arial" >{restaurant.address}</div>
                </div>
            </div>
            <div className="rounded-[5px] bg-white w-[350px] ml-3 mt-3 p-4">
                <div className="text-[16px] font-medium font-arial mb-2">Số Lượng</div>
                <div className="flex">
                    <div className="border border-black h-8 w-8 mr-1 pt-[7px] pl-[3px] rounded-[5px] hover:bg-gray-200"
                        onClick={handleDecrease}>
                        <AiOutlineMinus className="ml-1"/>
                    </div>
                    <input value={quantity} className="mr-1 h-8 w-10 border border-black text-center rounded-[5px]"/>
                    <div className="border border-black h-8 w-8 pt-[7px] pl-[3px] rounded-[5px] hover:bg-gray-200"
                        onClick={handleIncrease}>
                        <BiPlus className="ml-1"/>
                    </div>
                </div>
                <div>
                    <p className="font-medium text-[16px] mt-2">Tạm tính</p>
                    <div className="flex">
                        <p className="text-[25px] font-arial font-medium">{quantity*dish.price}</p>
                        <p className="font-arial font-medium">đ</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button className="bg-orange-500 py-1 text-white mb-1 rounded-[5px]">Mua ngay</button>
                    <button className="border border-orange-500 text-orange-500 py-1 rounded-[5px]" onClick={handleAddCart}>Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    )
}