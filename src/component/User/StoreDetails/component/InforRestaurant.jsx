import { IoHome } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
const InforRestaurant = ({restaurant}) => {
    return (
        <>
    <div className="flex border border-gray-200 bg-white rounded-[5px] mt-1">
          <div>
            <img className="w-[450px] h-[250px] rounded-[5px]" src={restaurant.image} />
          </div>
          <div className="ml-5 mt-2">
            <div className="font-bold text-2xl font-arial">{restaurant.name}</div>
            <div className="border-2 border-orange-500 w-12 h-6 rounded-[12px] mt-1">
              <div className="font-arial text-[12px] ml-[6px] text-orange-400">
                Ăn vặt
              </div>
            </div>
            <div className="flex mt-1">
              <p className="h-[40px] w-[40px] bg-orange-500 rounded-[50%] pt-1 mt-1 text-center text-white text-[20px]">
                7.5
              </p>
              <div className="ml-7">
                <p className="text-[20px] text-orange-500">7.8</p>
                <p className="text-[12px]">Chất lượng</p>
              </div>
              <div className="ml-6">
                <p className="text-[20px] text-orange-500">7.8</p>
                <p className="text-[12px]">Giá cả</p>
              </div>
              <div className="ml-11">
                <p className="text-[20px] text-orange-500">7.8</p>
                <p className="text-[12px]">Vị trí</p>
              </div>
              <div className="ml-11">
                <p className="text-[20px] text-orange-500">7.8</p>
                <p className="text-[12px]">Không gian</p>
              </div>
              <div className="ml-5">
                <p className="text-[20px] text-orange-500">7.8</p>
                <p className="text-[12px]">Phục vụ</p>
              </div>
            </div>
            <div className="flex mt-2">
              <IoHome size={14} className="mt-1" />
              <p className="font-arial text-[14px] ml-1">
                {restaurant.address}
              </p>
            </div>
            <div className="flex mt-1">
                <IoMdTime size={14} className="mt-1"/>
                <p className="font-arial text-[14px] ml-1 text-orange-500 font-medium">Giờ mở cửa:</p>
                <p className="font-arial text-[14px] ml-1">10:00 - 22:00</p>
            </div>
            <div className="flex mt-1">
              <FaPhone size={14} className="mt-1" />
              <p className="font-arial text-[14px] ml-1">
                {restaurant.phone}
              </p>
            </div>
          </div>
        </div>
    </>
    )
}

export default InforRestaurant