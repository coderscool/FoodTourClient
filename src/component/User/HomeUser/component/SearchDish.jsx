import { GrSearch } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
const SearchDish = (props) => {
  return (
    <div className="flex justify-between w-[1200px] ml-[150px] bg-white h-[60px] rounded-[30px]">
      <div className="border-r-2 bg-[rgb(239, 235, 235)] flex w-[445px] h-[44px] bg-white mt-2 ml-8 border-r-gray-400">
        <input
          className="text-1xl w-[410px] border-none outline-none"
          type="input"
          placeholder="Mon an ban muon"
        />
        <span className="text-[18px] mt-2">x</span>
      </div>
      <div className="border border-gray-400 flex w-[240px] h-[44px] bg-white rounded-[22px]">
        <div>
          <CiLocationOn className="m-2" size={23} />
        </div>
        <span>Ha Noi</span>
        <span>^</span>
      </div>
      <div>
      <div className="border border-gray-400 flex w-[260px] h-[44px] bg-white rounded-[22px]">
        <div>
          <CiLocationOn className="m-2" size={23} />
        </div>
        <span>Ha Noi</span>
        <span>^</span>
      </div>
        <div className="w-[200px] h-[40px] bg-white mt-3 absolute z-10">Dialog</div>
      </div>
      <div>
        <button className="border border-gray-400 flex w-[120px] rounded-[22px] mr-4 h-[44px] pl-4 items-center bg-orange-500">
          Tim kiem
        </button>
      </div>
    </div>
  );
};
export default SearchDish;
