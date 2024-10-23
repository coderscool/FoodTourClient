import suning from "./../../../../assets/suning.jpg";
import { BsMessenger } from "react-icons/bs";
import BasicMenu from "./Notification/Notification";
import { IoCart } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Reducers/userSlice";
import { selectCart } from "../../../Reducers/headerSlice";
import { Badge } from "@mui/material";
const HeaderInfor = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const cart = useSelector(selectCart)
  console.log(cart)
  const handleCart = () => {
    navigate("/cart")
  }
  return (
    <>
      <ul className="flex">
        <nav className="min-w-20 h-8 mr-2 rounded-[16px] border-[3px] border-orange-500 mt-1 flex">
          <FaPlus className="mt-1 ml-2 text-orange-500 size={25}" size={20} />
          <p className="ml-2 font-medium mr-2 text-[18px]">{`${user.budget} Vnd`}</p>
        </nav>
        <button
        className="w-[40px] mr-2 rounded-[50%] focus:outline-none bg-orange-100 text-orange-500 hover:bg-orange-100"
        id="basic-button"
        onClick={handleCart}
      >
        <Badge badgeContent={cart} size={15} color='primary'>
            <IoCart size={23}/>
        </Badge>
      </button>
        <BasicMenu />
        <nav className="w-10 h-10 mr-1 rounded-[50%] bg-orange-100">
          <BsMessenger className="mt-2 ml-2 text-orange-500" size={25} />
        </nav>
        <img className="w-10 h-10 ml-2 rounded-[50%]" alt="" src={suning} />
      </ul>
    </>
  );
};
export default HeaderInfor;
