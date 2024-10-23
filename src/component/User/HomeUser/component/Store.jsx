import store from "./../../../../assets/store.jpg"
import { CiLocationOn } from "react-icons/ci";
const Store = ({store}) => {
    return(
        <>
        <div className="w-[350px] ml 5px bg-white">
            <img className="w-[350px] h-[200px] " src={store.image}/>
            <div>
                <p className="m-0 text-[25px] font-bold font-arial pl-1 truncate w-[350px]">{store.name}</p>
                <div className="flex pl-1">
                    <div><CiLocationOn size={25} color="green"/></div>
                    <div className="m-0 font-arial truncate w-[350px]" >{store.address}</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Store