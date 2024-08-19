import store from "./../../../../assets/store.jpg"
const StorePage = () => {
    return(
        <div className="justify-center mx-[120px]">
            <div className="flex border border-black w-[1200px]">
                <div>
                    <img className="h-[250px]" src={store}/>
                </div>
                <div className="ml-5">
                    <div className="font-bold text-2xl font-arial">Chả cá Hà Thành</div>
                    <div className="font-arial text-[12px] text-[#333]">Ăn vặt</div>
                    <div className="flex mt-2">
                        <p className="h-[40px] w-[40px] bg-orange-500 rounded-[50%] pt-1 mt-1 text-center text-white text-[20px]">7.5</p>
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
                    <div>32 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội</div>
                    <div>Giờ mở cửa: 10:00 - 22:00</div>
                    <div>0356412374</div>
                </div>
            </div>
            <div>
                <div>Thực đơn món ăn</div>
                <div>Slice</div>
            </div>
            <div>
                <div>Đánh giá</div>
            </div>
            <div>Bình luận</div>
        </div>
    )
}
export default StorePage