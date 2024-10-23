import logo from "./../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderInfor from "./component/HeaderInfor";
import DialogUser from "./component/DialogUser";
import { useSelector } from "react-redux";
import { selectUser } from "../../Reducers/userSlice";
import DialogNotify from "./component/Notification/DialogNotify";
const Header = ({onAddDish}) => {
  const [home, setHome] = useState(false);
  const [place, setPlace] = useState(false);
  const [access, setAccess] = useState(false)
  const [dialogUser, setDialogUser] = useState(false)
  const [dialogNotify, setDialogNotify] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchParam = async () => {
      try {
        if (location.pathname == "/sale/home") {
          setHome(true);
          setPlace(false);
        }
        if (location.pathname == "/sale/order") {
          setHome(false);
          setPlace(true);
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

  const user = useSelector(selectUser)

  const onHandleShowDialogUser = () => {
    setDialogNotify(false)
    setDialogUser(!dialogUser)
  }

  const onHandleShowDialogNotify = () => {
    setDialogUser(false);
    setDialogNotify(!dialogNotify);
  }

  const onHandleAddDish = () => {
    onAddDish()
  }

  const onHandleLogout = () => {
    localStorage.removeItem("token")
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
              }`} href="/sale/home">
                Quản Lý Quán Ăn
              </a>
            </li>
            <li>
              <a className={`py-[10px] px-8 text-[18px] hover:underline font-bold hover:text-orange-500 ${
                place ? 'text-orange-500 underline' : ''
              }`} href="/sale/order">
                Đơn Đặt Món
              </a>
            </li>
          </ul>
        </div>
        <HeaderInfor 
          onHandleShowDialogUser={onHandleShowDialogUser} 
          dialogNotify={dialogNotify}
          onHandleShowDialogNotify={onHandleShowDialogNotify}
        /> 
      </div>
    </div>
    {dialogNotify == true ? <DialogNotify/> : null}
    {dialogUser == true ? <DialogUser onHandleAddDish={onHandleAddDish} user={user} onHandleLogout={onHandleLogout}/> : null}
    </>
  );
};
export default Header;
