import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
//import { LOCAL_STORAGE_TOKEN_NAME } from "../Extension/constant";
export default function Auth() {
    const local = null
    const navigate = useNavigate()
    useEffect(() => {
        if(local !== null) {
            navigate('/home')
        } 
    }, [local])
    return(
        <div className="flex items-center justify-center h-[100vh] bg-image-auth bg-cover">
            <div className="border-[2px] rounded-[5px]">
                <div className="m-[10px]">
                    <div className="flex text-[40px] text-orange-500 justify-center">FoodTour</div>
                    <div className="flex text-[20px] text-orange-400 justify-center">
                        <p>Mang đến trải nghiệm ẩm thực khắp mọi nơi trên thế giới chỉ với 1 cú click chuột</p>
                    </div>
                    <div className="flex justify-center">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}