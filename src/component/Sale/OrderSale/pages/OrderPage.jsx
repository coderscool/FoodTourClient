import { useEffect, useState } from "react";
import axiosInstance from "../../../../Api/axiosConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Reducers/userSlice";
import OrderDetail from "../OrderDetail";
export default function OrderPage() {
  const user = useSelector(selectUser);
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    const GetListOrder = async () => {
      try {
        const response = await axiosInstance.get(`/restaurant/list?id=${user.id}`);
        setOrder(response.data.list);
      } catch (error) {
        console.log(error);
      }
    };
    GetListOrder();
  }, []);
  const onHandleAccept = async (order) => {
    try {
      const data = {
        id: order.id,
        status: true
      }
      console.log(data)
      await axiosInstance.post("/restaurant", data)
    } catch (error) {
      console.log(error)
    }
    setOrder(orders.filter((ord) => ord.id !== order.id));
  }
  return (
    <div className="bg-gray-100 h-screen">
      <div className="mx-20">
        <p className="text-[20px] font-medium text-orange-500">
          Danh Sách Đơn Đặt Món
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {orders &&
            orders.map((order) => (
              <OrderDetail key={order.id} order={order} onHandleAccept={onHandleAccept}/>
            ))}
        </div>
      </div>
    </div>
  );
}
