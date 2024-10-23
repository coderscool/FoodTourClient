import suning from "./../../../../assets/suning.jpg";
import { BsMessenger } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { FaBell } from "react-icons/fa";
const HeaderInfor = ({ onHandleShowDialogUser, dialogNotify, onHandleShowDialogNotify }) => {
  const handleShowDialogUser = () => {
    onHandleShowDialogUser();
  };
  const handleShowDialogNotify = () => {
    onHandleShowDialogNotify();
  }
  return (
    <>
      <ul className="flex">
        <nav className="min-w-20 h-8 mr-2 rounded-[16px] border-[3px] border-orange-500 mt-1 flex">
          <FaPlus className="mt-1 ml-2 text-orange-500 size={25}" size={20} />
          <p className="ml-2 font-medium mr-2 text-[18px]">2000000 Vnd</p>
        </nav>
        <button
          className={`w-[40px] mr-2 rounded-[50%] focus:outline-none ${
            dialogNotify
              ? "bg-orange-100 text-orange-500 hover:bg-orange-100"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          id="basic-button"
          onClick={handleShowDialogNotify}
        >
          <Badge badgeContent={4} size={15} color="primary">
            <FaBell size={23} />
          </Badge>
        </button>
        <nav className="w-10 h-10 mr-1 rounded-[50%] bg-orange-100">
          <BsMessenger className="mt-2 ml-2 text-orange-500" size={25} />
        </nav>
        <img
          onClick={handleShowDialogUser}
          className="w-10 h-10 ml-2 rounded-[50%] cursor-pointer hover:bg-gray-200"
          alt=""
          src={suning}
        />
      </ul>
    </>
  );
};
export default HeaderInfor;
