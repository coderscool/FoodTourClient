import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SearchDish = (props) => {
  const [cities, setCity] = useState([
    "Tất cả các thể loại",
    "Món bánh",
    "Món bún",
    "Món canh",
    "Món chay",
    "Món cơm",
    "Món hấp"
  ]);
  const [nations, setNation] = useState(["Tất cả các quốc gia",
    "Việt Nam",
    "Hàn Quốc",
    "Trung Quốc",
    "Nhật Bản",
    "Thái Lan"])
  const navigate = useNavigate()
  const [namePlace, setNamePlace] = useState("Tất cả các quốc gia")
  const [nameCity, setNameCity] = useState("Tất cả các thể loại")
  const [place, setPlace] = useState(false);
  const [dialogCity, setDialogCity] = useState(false)
  const [parameter, setParameter] = useState({
    key: "all",
    category: "",
    nation: nameCity
  })
  const handlePlace = () => {
    setPlace(!place);
  };
  const handleCity = () => {
    setDialogCity(!dialogCity);
  };
  const handleChoicePlace = (nation) => {
    setNamePlace(nation)
    setParameter({...parameter, category: nation})
    setPlace(false)
  }
  const handleChoiceCity = (city) => {
    setNameCity(city)
    setDialogCity(false)
  }

  const handleSearch = () => {
    navigate(`/search/${parameter.key}/${parameter.category}`)
  }
  return (
    <div className="flex justify-between w-[1200px] bg-white h-[60px] rounded-[30px]">
      <div className="border-r-2 bg-[rgb(239, 235, 235)] flex w-[445px] h-[44px] bg-white mt-2 ml-8 border-r-gray-400">
        <input
          className="text-[16px] font-medium w-[410px] border-none outline-none"
          type="input"
          placeholder="Mon an ban muon"
          onChange={(e) => setParameter({...parameter, key: e.target.value})}
        />
        <span className="text-[18px] mt-2">x</span>
      </div>
      <div>
        <div
          className="hover:bg-gray-200 cursor-pointer flex w-[240px] h-[44px] rounded-[22px] items-center mt-2"
          onClick={handlePlace}
        >
          <div>
            <CiLocationOn className="m-2" size={23} />
          </div>
          <div className="flex justify-between">
            <div className="w-[160px] text-[16px] font-medium">{namePlace}</div>
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
        <div className="w-[260px] h-auto bg-white mt-3 absolute z-10 border border-gray-200 rounded-[10px] flex-col text-[16px] font-medium">
          {place == true
            ? nations.map((nation) => (
                <p
                  className="hover:bg-gray-100 cursor-pointer p-3"
                  onClick={() => handleChoicePlace(nation)}
                  key={nation}
                >
                  {nation}
                </p>
              ))
            : null}
        </div>
      </div>
      <span className="flex items-center text-gray-200 text-[24px] font-thin">
        |
      </span>
      <div>
        <div
          className="hover:bg-gray-200 cursor-pointer flex w-[260px] h-[44px] rounded-[22px] items-center mt-2"
          onClick={handleCity}
        >
          <div>
            <CiLocationOn className="m-2" size={23} />
          </div>
          <div className="flex justify-between">
            <div className="w-[180px] text-[16px] font-medium">{nameCity}</div>
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
        <div className="w-[260px] h-auto bg-white mt-3 absolute z-10 border border-gray-200 rounded-[10px] flex-col text-[16px] font-medium">
          {dialogCity == true
            ? cities.map((city) => (
                <p
                  className="hover:bg-gray-100 cursor-pointer p-3"
                  onClick={() => handleChoiceCity(city)}
                  key={city}
                >
                  {city}
                </p>
              ))
            : null}
        </div>
      </div>
      
        <button className="border border-gray-400 flex w-[120px] rounded-[22px] mr-4 h-[44px] justify-center items-center hover:bg-orange-400 bg-orange-500 mt-2"
          onClick={handleSearch}>
          <p className=" font-medium">Tìm kiếm</p>
        </button>
    </div>
  );
};
export default SearchDish;
