import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import Store from "./component/Store";
import Checkbox from "./component/Checkbox";
const StorePlace = () => {
    const [items, setItem] = useState([{id: 1},{id: 1},{id: 1},{id: 1},{id: 1},{id: 1},{id: 1},{id: 1}]);
    const [nation, setNation] = useState([{id:1, name: "Việt"},{id:1, name: "Nhật"},{id:1, name: "Hàn"},
    {id:1, name: "Trung"},{id:1, name: "Thái"},{id:1, name: "Mĩ"},{id:1, name: "Pháp"}])
    const [category, setCategory] = useState([{id:1, name: "Mặn"},{id:1, name: "Ngọt"},{id:1, name: "Lẩu"},
    {id:1, name: "Nướng"},{id:1, name: "Đồ uống"},{id:1, name: "Đồ ăn nhanh"},{id:1, name: "Đặc sản"}])
    return(
        <>
            <div className="flex justify-center">
                <div className="border border-black w-[730px] px-3">
                    <div className="flex justify-between my-2">
                        <div className="text-orange-500 font-arial font-bold text-[30px]">Dia diem an uong</div>
                        <div className="flex border border-orange-300">
                            <GrSearch className="m-3" size={23}/>
                            <input type="text" placeholder="Nhap dia diem ban muon"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        {
                            items.map((item) => (
                                <Store key={item.id}/>
                            ))
                        }
                    </div>
                    <button className="bg-orange-500 text-white w-[100%] h-8 mt-2">Xem Thêm</button>
                </div>
                <div className="border border-black w-[300px] bg-gray-300 ml-3 h-[400px] px-2">
                    <p className="font-bold text-2xl fonr-arial">Bộ lọc</p>
                    <div className="font-bold fonr-arial">Quốc gia</div>
                    <div className="grid grid-cols-2">
                    {
                        nation.map((n) => (
                            <Checkbox key={n.id} name={n.name}/>
                        ))
                    }
                    </div>
                    <div className="font-bold fonr-arial">Thể loại</div>
                    <div className="grid grid-cols-2">
                    {
                        category.map((n) => (
                            <Checkbox key={n.id} name={n.name}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
export default StorePlace