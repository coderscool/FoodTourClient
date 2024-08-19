import store from "./../../../../assets/store.jpg"
import { CiLocationOn } from "react-icons/ci";
const Store = () => {
    return(
        <>
        <div className="w-[350px] mr-2 mb-2">
            <img className="w-[350px] h-[200px] " src={store}/>
            <div>
                <p className="m-0 text-[25px] font-bold font-arial pl-1">Sà bi chưởng</p>
                <div className="flex pl-1">
                    <div><CiLocationOn size={25} color="green"/></div>
                    <div className="m-0 font-arial" >Số 7, Đường Trần Phú, Thanh Xuân, Hà Nội</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Store