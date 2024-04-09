import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineTag } from "react-icons/ai";
import { BiSolidCamera } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import rice from "./../../../assets/rice.webp"
const EditDish = () => {
    const [inputValue, setInputValue] = useState('Name Dish');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log("input"); 
    };
    return(
        <div>
            <div className='border border-gray-400 my-0 mx-20'>
                <input className='text-4xl font-arial font-bold w-[1200px]' type="text" value={inputValue}  onChange={handleChange}/>
                <div className='flex my-1'>
                    <div className='pr-2 pt-1'><AiOutlineTag size={17}/></div>
                    <input className='text-1xl font-arial w-[1200px]' type='text' value="Mo ta"/>
                </div>
                <div className='flex'>
                    <div className='pr-2 pt-1'><CiLocationOn size={17}/></div>
                    <input className='text-1xl font-arial w-[1200px]' type='text' value="Dia diem"/>
                </div>
                <div className='flex'>
                    <div className='border border-gray-400 w-[360px]'>
                        <div>
                            <BiSolidCamera className='absolute z-2 ml-[330px] bg-gray-400' size={30}/>
                            <img className='w-[360px] h-[200px]' src={rice}/>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex mt-2 ml-2'>
                                <AiFillStar className='text-yellow-400' size={25}/>
                                <p className='text-[20px] pl-1'>4.5</p>
                            </div>
                            <div className='flex mt-2 mr-2'>
                                <BiDollar className='text-blue-400' size={25}/>
                                <input className='w-[80px] text-[20px]' type="number" value={50000} />
                                <p className='text-[20px]'>VND</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-400 ml-20 flex w-[900px] justify-between'>
                        <div>
                            <div className='border border-gray-400 w-[270px] h-[80px] mb-2 pt-1 pl-3 text-white bg-red-500'>
                                <p className='text-2xl'>45000000</p>
                                <p>Số tiền thu được</p>
                            </div>
                            <div className='border border-gray-400 w-[270px] h-[80px] pt-1 pl-3 text-white bg-green-500'>
                                <p className='text-2xl'>450</p>
                                <p>Số đơn đặt hàng</p>
                            </div>
                        </div>
                        <div>
                            <div className='border border-gray-400 w-[270px] h-[80px] mb-2 pt-1 pl-3 text-white bg-orange-500'>
                                <p className='text-2xl'>310</p>
                                <p>Số đơn đặt hàng thành công</p>
                            </div>
                            <div className='border border-gray-400 w-[270px] h-[80px] pt-1 pl-3 text-white bg-blue-500'>
                                <p className='text-2xl'>520</p>
                                <p>Số lượng đã bán ra</p>
                            </div>
                        </div>
                        <div className='border border-gray-400 w-[270px] h-[80px] pt-1 pl-3 text-white bg-yellow-500'>
                            <p className='text-2xl'>22.4</p>
                            <p>Doanh số bán ra trung bình</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end mr-9 mt-2'>
                    <button className='bg-green-400 w-[120px] h-[40px] ml-2 text-white'>Lưu thay đổi</button>
                </div>
            </div>
        </div>
    )
}
export default EditDish