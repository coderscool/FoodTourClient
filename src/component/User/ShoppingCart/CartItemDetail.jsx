import rice from "./../../../assets/rice.webp"
import { AiOutlineMinus } from "react-icons/ai"
import { BiPlus } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from 'prop-types';

const CartItemDetail = ({dish, onHandleCheck, onHandleRemoveCheck}) => {
    const handleCheckbox = (event) => {
      console.log(event.target.checked)
      if(event.target.checked == true){
        onHandleCheck(dish)
      }else{
        onHandleRemoveCheck(dish)
      }
    }
    return(
        <div className="flex border border-black w-[1000px] p-3 bg-white rounded-[5px] mb-2">
              <div className="flex">
                <label className="flex items-center">
                  <input
                    className="form-checkbox h-4 w-4 text-blue-600 mr-4"
                    type="checkbox"
                    onChange={handleCheckbox}
                  />
                  <img className="h-[70px] mt-2 mb-2" src={rice} />
                </label>
                <div className="ml-2">
                  <p className=" font-medium font-arial text-[22px] p-0 w-[350px]">
                    {dish.name}
                  </p>
                  <p className="w-[250px] break-wrap text-[14px]">
                    {dish.restaurant.name}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-medium font-arial text-[16px] mt-8 ml-6">
                  {dish.price}
                </p>
              </div>
              <div className="flex ml-10 mt-8">
                <div className="border border-black h-6 w-6 mr-1 pt-[3px] rounded-[5px]">
                  <AiOutlineMinus className="ml-1" />
                </div>
                <input
                  value="1"
                  className="mr-1 h-6 w-8 border border-black text-center rounded-[5px]"
                />
                <div className="border border-black h-6 w-6 pt-[3px] rounded-[5px]">
                  <BiPlus className="ml-1" />
                </div>
              </div>
              <div>
                <p className="font-medium font-arial text-[16px] mt-8 ml-10 w-[200px] text-red-500">
                  {dish.price * dish.quantity}
                </p>
              </div>
              <div className="mt-9">
                <RiDeleteBin6Line color="gray" size={18} />
              </div>
            </div>
    )
}
export default CartItemDetail

CartItemDetail.propTypes = {
    dish: PropTypes.object,
    onHandleCheck: PropTypes.func,
    onHandleRemoveCheck: PropTypes.func
}

