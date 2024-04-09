import logo from "./../../../assets/logo.png"
import suning from "./../../../assets/suning.jpg"
import { FaBell } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
const Header = () => {
    return(
        <div className=" w-[100%] top-0 left-0 bg-white fixed z-10">
            <div className="flex m-0 max-w-[1480px] h-[70px] items-center justify-between">
                <div className="flex ml-14">
                    <div className = "flex">
                        <img className="h-14" alt='' src={logo}/>
                    </div>
                    <ul className="flex mt-4">
                        <li><a className="py-[10px] px-5 text-[16px]" href="/">Trang Chu</a></li>
                        <li><a className="py-[10px] px-5 text-[16px]" href="/order">Dia Diem An Uong</a></li>
                        <li><a className="py-[10px] px-5 text-[16px]" href="/place">Dat Lich</a></li>
                    </ul>
                </div>
                <ul className="flex">
                    <nav className="w-10 h-10  mr-2 rounded-[50%] bg-orange-100">
                        <FaBell className="mt-2 ml-2 text-orange-500" size={25}/>
                    </nav>
                    <nav className="w-10 h-10 mr-1 rounded-[50%] bg-orange-100">
                        <BsMessenger className="mt-2 ml-2 text-orange-500" size={25}/>
                    </nav>
                    <img className="w-10 h-10 ml-2 rounded-[50%]" alt='' src={suning}/>
                    <span className="mt-2 ml-[2px] text-[18px] font-bold">Trinh Thi Ngoc Nga</span>
                </ul>
            </div>
        </div>
    )
}
export default Header