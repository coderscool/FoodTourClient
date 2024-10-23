import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "../../../../Api/axiosConfig"
import DishDetail from "../../HomeUser/component/DishDetail"

const SearchPage = () => {
    const param = useParams()
    console.log(param)
    const [dishs, setDish] = useState([])
    useEffect(() => {
        const fetchListDishTrend = async () => {
          try {  
            const data = {
                name: param.key,
                category: param.category,
                nation: ""
            }
            const response = await axiosInstance.post('/dish/search', data);
            console.log(response);
            setDish(response.data.list)
          } catch (error) {
            console.log(error)
          }
        };
        fetchListDishTrend();
      }, []);
    return(
        <>
            <div className="flex justify-center bg-[#eee]">
                <div className="border-4 border-gray-200 rounded-[5px] bg-white w-[1100px] px-3 mb-2 pb-2">
                    <div className="flex justify-between my-2">
                        <div className="text-orange-500 font-sans font-bold text-[30px]">Có 3 kết quả hợp lệ dựa trên từ khóa tìm kiếm</div>
                    </div>
                    <div className="grid grid-cols-3">
                        {dishs.map((dish) => (
                            <div className="mt-1" key={dish}>
                                <DishDetail dish={dish}/>
                            </div>
                        ))}
                    </div>
                    <button className="bg-orange-500 text-white w-[100%] h-8 mt-2">Xem Thêm</button>
                </div>
            </div>
        </>
    )
}
export default SearchPage