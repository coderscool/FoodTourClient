import logo from "./../../../assets/logo.png";
import suning from "./../../../assets/suning.jpg";
import { BsMessenger } from "react-icons/bs";
import BasicMenu from "./component/Notification/Notification";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import HeaderInfor from "./component/HeaderInfor";
const Header = () => {
  const [home, setHome] = useState(false);
  const [place, setPlace] = useState(false);
  const [blog, setBlog] = useState(false);
  const [access, setAccess] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)
  useEffect(() => {
    const fetchParam = async () => {
      try {
        if (location.pathname == "/home") {
          setHome(true);
          setPlace(false);
          setBlog(false);
        }
        if (location.pathname == "/place") {
          setHome(false);
          setPlace(true);
          setBlog(false);
        }
        if (location.pathname == "/sale/order") {
          setHome(false);
          setPlace(false);
          setBlog(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchParam();
  }, []);

  useEffect(() => {
    const CheckToken = async () => {
      const token = localStorage.getItem("token")
      if(token != null){
        setAccess(true)
      }
    }
    CheckToken()
  }, [])
  const handleCart = () => {
    navigate("/place")
  }
  const handleLogin = () => {
    navigate("/login")
  }
  return (
    <>
    <div className=" w-[100%] top-0 left-0 bg-white fixed z-10 border-b-2 border-gray-200">
      <div className="flex m-0 max-w-[1480px] h-[70px] items-center justify-between">
        <div className="flex ml-14">
          <div className="flex">
            <img className="h-14" alt="" src={logo} />
          </div>
          <ul className="flex mt-4">
            <li>
              <a className={`py-[10px] px-8 text-[18px] hover:underline font-bold hover:text-orange-500 ${
                home ? 'text-orange-500 underline' : ''
              }`} href="/home">
                Trang Chủ
              </a>
            </li>
            <li>
              <a className={`py-[10px] px-8 text-[18px] hover:underline font-bold hover:text-orange-500 ${
                place ? 'text-orange-500 underline' : ''
              }`} href="/place">
                Địa Điểm Ăn Uống
              </a>
            </li>
            <li>
              <a className={`py-[10px] px-5 text-[18px] hover:underline font-bold hover:text-orange-500 ${
                blog ? 'text-orange-500 underline' : ''
              }`} href="/sale/order">
                Đặt Lịch
              </a>
            </li>
          </ul>
        </div>
        {access == true ? <HeaderInfor/> : <p className="font-medium hover:text-orange-500 hover:underline cursor-pointer" onClick={handleLogin}>Đăng nhập</p>}
      </div>
    </div>
    </>
  );
};
export default Header;
