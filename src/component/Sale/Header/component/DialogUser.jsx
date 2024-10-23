import { IoIosSettings } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
const DialogUser = ({onHandleAddDish, user, onHandleLogout}) => {
  const handleAddDish = () => {
    onHandleAddDish()
  }
  const handleLogout = () => {
    onHandleLogout()
  }
  return (
    <div className="w-[300px] top-16 right-0 z-20 fixed h-[260px] bg-[#fff] mr-10 border-2 border-gray-300 rounded-[5px] flex-col justify-center">
      <div className="w-[280px] h-[90px] mx-2 border-[3px] border-gray-200 mt-[12px] rounded-[8px] bg-white py-2">
        <div className="font-medium border-b-2 border-gray-300 pb-2 text-[18px] justify-center flex mx-2">
          {user.name}
        </div>
        <button className="mt-1 w-[100%] font-sans text-orange-500 hover:bg-gray-100 h-[28px]">
          Xem tất cả trang cá nhân
        </button>
      </div>
      <div className="mt-2 mx-1">
        <div className="flex hover:bg-gray-200 cursor-pointer p-1">
          <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[50%] bg-gray-300">
            <IoIosAddCircle size={25}/>
          </div>
          <p className="font-sans text-[16px] font-medium ml-2 mt-1" onClick={handleAddDish}>Thêm món ăn mới</p>
        </div>
        <div className="flex mt-2 hover:bg-gray-200 cursor-pointer p-1">
          <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[50%] bg-gray-300">
            <IoIosSettings size={25}/>
          </div>
          <p className="font-sans text-[16px] font-medium ml-2 mt-1">Cài đặt & quyền riêng tư</p>
        </div>
        <div className="flex mt-2 hover:bg-gray-200 cursor-pointer p-1">
          <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[50%] bg-gray-300">
            <IoLogOut size={25}/>
          </div>
          <p className="font-sans text-[16px] font-medium ml-2 mt-1" onClick={handleLogout}>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
};
export default DialogUser;
