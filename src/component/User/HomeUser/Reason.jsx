import { TiTick } from "react-icons/ti";
const Reason = () => {
    const reasons = [
        {title:"Nhanh nhất", letter: "GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường."},
        {title:"Dễ dàng nhất", letter: "Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn."},
        {title: "Đáp ứng mọi nhu cầu", letter: "Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn."},
        {title: "Thanh toán dễ dàng", letter: "Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa"}
    ]
    return(
        <>
            <div className="ml-12 mt-4 pb-8">
                <p className="text-2xl text-orange-500 font-bold font-arial text-orange-500] mb-4">Tại sao nên sử dụng FoodTour?</p>
                {
                    reasons.map((reason) => (
                        <div key={reason} className="flex w-[1300px] mb-2">
                            <TiTick className="mt-1" color="orange"/>
                            <li className="list-none text-[16px] font-arial">
                            <span className="mr-1 font-bold">{reason.title}</span>
                            <span className="mr-1">-</span>
                            <span>{reason.letter}</span>
                            </li>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Reason