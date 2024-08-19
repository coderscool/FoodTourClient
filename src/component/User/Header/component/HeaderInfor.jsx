import suning from "./../../../../assets/suning.jpg";
import { BsMessenger } from "react-icons/bs";
import BasicMenu from "./Notification/Notification";
import { IoCart } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
const HeaderInfor = () => {
  return (
    <>
      <ul className="flex">
        <nav className="min-w-20 h-8 mr-2 rounded-[10%] border-[3px] border-orange-500 mt-1 flex">
          <FaPlus className="mt-1 ml-2 text-orange-500 size={25}" size={20} />
          <p className="ml-2 font-medium mr-2 text-[18px]">2000000 Vnd</p>
        </nav>
        <nav
          className="w-10 h-10 mr-2 rounded-[50%] bg-orange-100"
        >
          <IoCart className="mt-2 ml-2 text-orange-500" size={25} />
        </nav>
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
