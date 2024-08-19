export default function OrderPage(){
    return(
        <div className="bg-gray-100 h-screen">
            <div className="mx-20">
                <p className="text-[20px] font-medium text-orange-500">Danh Sách Đơn Đặt Món</p>
                <div className="w-[600px] px-5 h-[150px] bg-white rounded-[5px] border-gray-200 border-[2px]">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[18px] font-medium">Cơm sườn nướng</p>
                            <p className="text-[12px] font-mono">Id:66686ce8b01ad1df1fe114ce</p>
                        </div>
                        <div className="text-[15px] font-medium">Số lượng: 2</div>
                        <div className="text-[15px] font-medium">Giá: 55000VNĐ</div>
                    </div>
                    <div>
                        <div className="text-[15px] font-medium">Người đặt: Vũ Hoàng Phương</div>
                        <div className="text-[15px] font-medium">Sđt: 0397251347</div>
                        <div className="text-[15px] font-medium">Địa chỉ: Ngõ 121, Nguyên Xá, Nam Từ Liêm, Hà Nội</div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-green-500 font-medium px-2 py-1 hover:bg-green-400 text-white rounded-[4px] mr-1">
                            Chấp nhận
                        </button>
                        <button className="bg-red-500 font-medium px-2 py-1 hover:bg-red-400 text-white rounded-[4px]">
                            Từ chối
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}