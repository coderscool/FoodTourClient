import { useState } from "react"
import Bill from "../Bill/Bill"
import CatalogCreateDish from "../Dialog/DialogCreateDish";

const RestaurantDetail = () => {
    const [items, setItem] = useState([{id: 1},{id: 1},{id: 1},{id: 1}]);
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };
    return(
        <>
            <div className="border border-gray-400 my-0 mx-20">
                <div className="border border-gray-400 h-[120px]">
                    <p>Name</p>
                    <p>des</p>
                    <p>lo</p>
                </div>
                <div className="flex border border-gray-400 h-[250px] justify-between">
                    <div className="border border-gray-400 h-[250px] w-[450px]">anh</div>
                    <div className="border border-gray-400 h-[250px] w-[650px] mr-20">do thi</div>
                </div>
                <div>
                    <div>
                        <p>Danh sach mon an nha hang</p>
                        <p>icon create</p>
                    </div>
                    <div>map item</div>
                </div>
                <div>
                    <div>
                        <p>Tong don</p>
                        <p>Thanh cong</p>
                        <p>That bai</p>
                    </div>
                    <div className="grid grid-cols-2">
                    {
                        items.map(item => (
                            <Bill key={item.id}/>
                        ))
                    }
                    </div>
                    <button onClick={openDialog}>Mở Dialog</button>
                    <CatalogCreateDish isOpen={isOpen} onClose={closeDialog}>
                        <h2>Đây là một dialog</h2>
                        <p>Nội dung dialog</p>
                    </CatalogCreateDish>
                </div>
            </div>
        </>
    )
}
export default RestaurantDetail