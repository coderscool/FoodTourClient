import { GrSearch } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
const SearchDish = () => {
    return(
        <div className="flex justify-between w-[1200px] ml-[150px]">
                <div className="border-[3px] bg-[rgb(239, 235, 235)] flex w-[250px] h-[42px] bg-white">
                    <div>
                        <GrSearch className="m-2" size={23}/>
                    </div>
                    <input className="text-1xl" type="input" placeholder="Mon an ban muon"/>
                </div>
                <div className="border border-gray-400 flex w-[200px] h-[42px] bg-white">
                    <div>
                        <BiCategory className="m-2" size={23}/>
                    </div>
                    <select className="text-1xl " name="Loai mon an">
                        <option className="custom-option">Do an nhanh</option>
                        <option>Lau</option>
                        <option>Nuong</option>
                    </select>
                </div>
            <div className="border border-gray-400 flex w-[200px] h-[42px] bg-white">
                <div>
                    <CiLocationOn className="m-2" size={23}/>
                </div>
                <select className="text-1xl " name="Dia diem">
                        <option>Ha Noi</option>
                        <option>Ho Chi Minh</option>
                        <option>Da Nang</option>
                </select>
            </div>
            <div className="border border-gray-400 flex w-[200px] h-[42px] bg-white">
                <div>
                    <BsFlag className="m-2" size={23}/>
                </div>
                <select className="text-1xl " name="Quoc gia">
                        <option>Ha Noi</option>
                        <option>Ho Chi Minh</option>
                        <option>Da Nang</option>
                </select>
            </div>
            <div className="border border-gray-400 flex w-[200px] h-[42px] bg-white">
                <AiOutlineDollar className="m-2" size={23}/>
                <div className="mt-2">
                    <input className="w-[40px] text-1xl" type="number" placeholder="Tu"/>   
                </div>
                <span className="mt-2 mr-3">-</span>
                <div className="mt-2">
                    <input className="w-[40px] text-1xl" type="number" placeholder="Den"/>   
                </div>
                <span className="mt-2">nghin</span>
            </div>
            <div>
                <button className="border border-gray-400 flex w-[100px] h-[42px] pl-4 items-center bg-orange-500">Tim kiem</button>
            </div>
        </div>
    )
}
export default SearchDish