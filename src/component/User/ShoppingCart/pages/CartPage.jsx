import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axiosInstance from "../../../../Api/axiosConfig";
import { useNavigate } from "react-router-dom";
import CartItemDetail from "../CartItemDetail";
const CartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const local = localStorage.getItem("token");
      if (!local) {
        navigate("/login");
      }
      try {
        const user = await axiosInstance.get("/identity/infor");
        const response = await axiosInstance.get(
          `/cart?customerid=${user.data.id}`
        );
        setCarts(response.data.list);
        console.log(response.data.list);
      } catch (error) {
        localStorage.removeItem("token");
      }
    };
    fetchUser();
  }, []);
  const [carts, setCarts] = useState([]);
  const [orders, setOrder] = useState([])
  const [moneys, setMoney] = useState(null)
  const onHandleCheck = (dish) => {
    const order = [...orders, dish]
    setOrder(order)
    console.log(order)
    setMoney(moneys + dish.price * dish.amount)
  }
  const onHandleRemoveCheck = (dish) => {
    setOrder(orders.filter(ord => ord.id !== dish.id))
  }
  return (
    <div className="bg-[#efefef] h-screen">
      <div className="flex">
        <div className="ml-20">
          <p className="text-2xl font-arial font-medium">Giỏ hàng</p>
          <div>
            <div className="flex border border-black w-[1000px] py-1 px-3 my-2 bg-white rounded-[5px]">
              <label className="flex items-center">
                <input
                  className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                  type="checkbox"
                />
                <p className="font-arial text-[14px]">Tất cả sản phẩm</p>
              </label>
              <p className="text-gray-500 font-arial text-[14px] ml-[400px]">
                Đơn giá
              </p>
              <p className="text-gray-500 font-arial text-[14px] ml-10">
                Số lượng
              </p>
              <p className="text-gray-500 font-arial text-[14px] ml-[70px] w-[204px]">
                Thành tiền
              </p>
              <div className="mt-[2px]">
                <RiDeleteBin6Line color="gray" size={18} />
              </div>
            </div>
          </div>
          {carts &&
            carts.map((dish) => (
              <div key={dish.id}>
                <CartItemDetail dish={dish} onHandleCheck={onHandleCheck} onHandleRemoveCheck={onHandleRemoveCheck}/>
              </div>
            ))}
        </div>
        <div>
          <div className="border border-black w-[320px] ml-4 p-3  mt-10 bg-white rounded-[5px]">
            <p className="font-arial text-gray-500 text-[17px]">Giao tới</p>
            <div className="flex font-medium font-arial text-[14px]">
              <p className="mr-4">Hoàng Phương Vũ</p>
              <p>0397251347</p>
            </div>
            <div className="flex mt-1">
              <p className="bg-orange-100 text-[12px] px-1 pt-[2px] text-orange-500">
                Nhà
              </p>
              <p className="text-gray-500 text-[14px]">
                Số 9, Phú Sơn, Bỉm Sơn, Thanh Hóa
              </p>
            </div>
            <div className="flex mt-1">
              <p className="font-medium font-arial text-[14px]">
                Thời gian chờ phản hồi:{" "}
              </p>
              <p className="font-medium font-arial text-[14px] ml-1">
                {" "}
                5 phút{" "}
              </p>
            </div>
          </div>
          <div className="border border-black w-[320px] ml-4 p-3  mt-10 bg-white rounded-[5px]">
            <div className="flex justify-between text-[15px] text-gray-500">
              <p>Tạm tính</p>
              <p>200000Vnđ</p>
            </div>
            <div className="flex justify-between text-[15px] text-gray-500 border-b-2 pb-2">
              <p>Giảm giá</p>
              <p>0Vnđ</p>
            </div>
            <div className="flex justify-between text-[15px] font-medium">
              <p>Tổng tiền</p>
              <p className="text-[25px] text-orange-500">200000Vnđ</p>
            </div>
            <button className="bg-orange-500 text-white w-[290px] h-[30px]">Đặt Món</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
