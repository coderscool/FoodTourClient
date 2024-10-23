import { useNavigate } from "react-router-dom";
import store from "./../../../../assets/store.jpg"
import { CiLocationOn } from "react-icons/ci";
const Store = ({item}) => {
    const navigate = useNavigate()
    console.log("here", item)
    const handleStore = () => {
        navigate(`/home/store/${item.id}`)
    }
    return(
        <>
        <div className="w-[350px] mr-2 mb-2 border-2 border-gray-200 rounded-[5px] bg-white">
            <img className="w-[350px] h-[200px] rounded-[5px]" src={item.image}/>
            <div>
                <p onClick={handleStore} className="m-0 text-[25px] font-bold cursor-pointer font-arial pl-1 truncate w-[350px] hover:text-orange-500 hover:underline">{item.name}</p>
                <div className="flex pl-1">
                    <div><CiLocationOn size={25} color="green"/></div>
                    <div className="m-0 font-arial truncate w-[350px]" >{item.address}</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Store