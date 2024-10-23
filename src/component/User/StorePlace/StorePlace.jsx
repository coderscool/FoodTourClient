import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import Store from "./component/Store";
import { useEffect } from "react";
import axiosInstance from "../../../Api/axiosConfig";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
const StorePlace = () => {
  const [namePlace, setNamePlace] = useState("Tất cả các quốc gia");
  const [nameCity, setNameCity] = useState("Tất cả các thành phố");
  const [place, setPlace] = useState(false);
  const [dialogCity, setDialogCity] = useState(false);
  const [cities, setCity] = useState([
    "Tất cả các thành phố",
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Quảng Ninh",
    "Khánh Hòa",
  ]);
  const [nations, setNation] = useState([
    "Tất cả các quốc gia",
    "Việt Nam",
    "Hàn Quốc",
    "Nhật Bản",
    "Trung Quốc",
    "Thái Lan"
  ]);
  const [data, setData] = useState({
    key: "",
    nation: "",
    location: "",
    page: 0,
    size: 9,
  })
  useEffect(() => {
    const fetchListDishTrend = async () => {
      try {
        const response = await axiosInstance.post("/identity/store", data);
        setItem(response.data.list);
        console.log(response.data.list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListDishTrend();
  }, [nameCity, namePlace]);

  const [items, setItem] = useState([]);

  const handleNation = () => {
    setPlace(!place);
  };
  const handleCity = () => {
    setDialogCity(!dialogCity);
  };
  const handleChoiceNation = (nation) => {
    setNamePlace(nation)
    if(nation == "Tất cả các quốc gia"){
      setData({...data, nation: ""})
    }else{
      setData({...data, nation: nation})
    }
    setPlace(false)
  }
  const handleChoiceCity = (city) => {
    setNameCity(city)
    setDialogCity(false)
  }
  return (
    <>
      <div className="flex justify-center bg-[#eee]">
        <div className="border-4 border-gray-200 rounded-[5px] bg-white w-[1100px] px-3 mb-2 pb-2">
          <div className="flex justify-between my-2">
            <div className="text-orange-500 font-sans font-bold text-[30px]">
              Địa điểm ăn uống
            </div>
            <div>
                <div onClick={handleNation} className="hover:border-orange-300 cursor-pointer border border-orange-500 flex w-[240px] h-[44px] rounded-[22px] items-center mt-2">
                  <div>
                    <CiLocationOn className="m-2" size={23} />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-[160px] text-[16px] font-medium">
                      {namePlace}
                    </div>
                    {place == true ? (
                      <div className="mt-1">
                        <FaChevronUp />
                      </div>
                    ) : (
                      <div className="mt-1">
                        <FaChevronDown />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[240px] h-auto bg-white mt-1 absolute z-10 border border-gray-200 rounded-[10px] flex-col text-[16px] font-medium">
                  {place == true
                    ? nations.map((nation) => (
                        <p
                          className="hover:bg-gray-100 cursor-pointer p-3"
                          key={nation}
                          onClick={() => handleChoiceNation(nation)}
                        >
                          {nation}
                        </p>
                      ))
                    : null}
                </div>
              </div>
              <div>
                <div onClick={handleCity} className="hover:border-orange-300 cursor-pointer border border-orange-500 flex w-[260px] h-[44px] rounded-[22px] items-center mt-2">
                  <div>
                    <CiLocationOn className="m-2" size={23} />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-[180px] text-[16px] font-medium">
                      {nameCity}
                    </div>
                    {dialogCity == true ? (
                      <div className="mt-1">
                        <FaChevronUp />
                      </div>
                    ) : (
                      <div className="mt-1">
                        <FaChevronDown />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[260px] h-auto bg-white mt-1 absolute z-10 border border-gray-200 rounded-[10px] flex-col text-[16px] font-medium">
                  {dialogCity == true
                    ? cities.map((city) => (
                        <p
                          className="hover:bg-gray-100 cursor-pointer p-3"
                          key={city}
                          onClick={() => handleChoiceCity(city)}
                        >
                          {city}
                        </p>
                      ))
                    : null}
                </div>
              </div>
            <div className="flex border border-orange-500 pr-4 mr-2 h-[44px] rounded-[20px] mt-2">
              <GrSearch className="m-3" size={23} />
              <input
                className="outline-none w-[150px]"
                type="text"
                placeholder="Nhập tên quán ăn"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-3">
            {items.map((item) => (
              <Store key={item.id} item={item} />
            ))}
          </div>
          <button className="bg-orange-500 text-white w-[100%] h-8 mt-2">
            Xem Thêm
          </button>
        </div>
      </div>
    </>
  );
};
export default StorePlace;
