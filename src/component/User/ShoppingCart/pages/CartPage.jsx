import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axiosInstance from "../../../../Api/axiosConfig";
import { useNavigate } from "react-router-dom";
import CartItemDetail from "../CartItemDetail";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Reducers/userSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from "@mui/material/Dialog";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
const CartPage = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/cart?customerid=${user.id}`);
        setCarts(response.data.list);
        console.log(response.data.list);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    fetchUser();
  }, []);
  const [carts, setCarts] = useState([]);
  const [orders, setOrder] = useState([]);
  const [moneys, setMoney] = useState(0);
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false)
  const onHandleCheck = (dish) => {
    const order = [...orders, dish];
    setOrder(order);
    setMoney(moneys + dish.price * dish.quantity);
  };
  const onHandleRemoveCheck = (dish) => {
    setOrder(orders.filter((ord) => ord.id !== dish.id));
    setMoney(moneys - dish.price * dish.quantity);
  };
  const handleOrder = () => {
    if (orders.length > 0) {
      setOpen(true);
    }else{
      toast.error("Chua co mon an nao duoc chon")
    }
  };
  const handleExit = () => {
    setOpen(false)
  }
  const handleClose = () => {
    setLoad(false)
    setOpen(false)
    toast.success("Dat mon thanh cong")
  }
  const handleConfirm = async () => {
    await setLoad(true)
    try {
      orders.forEach(async (order) => {
        const data = {
          id: order.id,
          restaurantId: order.restaurantId,
          customerId: user.id,
          dishId: order.dishId,
          restaurant: order.restaurant,
          customer: {
            name: user.name,
            phone: user.phone,
            address: user.address
          },
          name: order.name,
          price: order.price,
          quantity: order.quantity,
          time: 5
        }
        await axiosInstance.post("/order", data)
        const data1 = {
          id: order.id
        }
        await axiosInstance.post("/cart/delete", data1)
      })
      await setLoad(false)
      await setOpen(false)
      await toast.success("Dat mon thanh cong")
    } catch (error) {
      await setLoad(false)
      await setOpen(false)
      toast.error("Khong dat hang thanh cong")
    }
  }
  return (
    <>
      <div className="bg-[#efefef] pb-5">
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
                  <CartItemDetail
                    dish={dish}
                    onHandleCheck={onHandleCheck}
                    onHandleRemoveCheck={onHandleRemoveCheck}
                  />
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
            <div className="border border-black w-[320px] ml-4 p-3  mt-5 bg-white rounded-[5px]">
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
                <p className="text-[25px] text-orange-500">{`${moneys}Vnd`}</p>
              </div>
              <button
                className="bg-orange-500 text-white w-[290px] h-[30px] hover:bg-orange-400"
                onClick={handleOrder}
              >
                Đặt Món
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Dialog open={open} sx={{zIndex: 10}}>
          <div className="flex justify-center text-[24px] font-medium mt-2">
            Thông tin đơn món
          </div>
          <div className="m-2">
            {orders &&
              orders.map((order) => (
                <div
                  className="border-2 border-gray-200 rounded-[5px] mb-1 w-[580px] h-[40px] flex justify-between p-1 items-center font-medium"
                  key={order.id}
                >
                  <p className="w-[280px]">{order.name}</p>
                  <p className="w-[100px]">{`Số lượng: ${order.quantity}`}</p>
                  <p>{`Giá: ${order.price}`}</p>
                </div>
              ))}
          </div>
          <div className="font-sans font-medium ml-2">
            <p>Tên người nhận: Vũ Hoàng Phương</p>
            <p>Số điện thoại: 03972518789</p>
            <p>Địa điểm nhận: Số 9, Phú Sơn, Bỉm Sơn, Thanh Hóa</p>
            <p>Thời gian chờ phản hồi: 5 phút</p>
          </div>
          <p className="text-[18px] font-medium flex justify-end mr-2">{`Tổng tiền: ${moneys}Vnd`}</p>
          <div className="flex justify-end mr-2 mb-2 mt-1">
            <button className="w-[100px] hover:bg-orange-50 border-2 border-orange-500 h-[30px] rounded-[5px] mr-1 text-orange-500" onClick={handleExit}>Hủy</button>
            <button className="w-[100px] hover:bg-orange-400 bg-orange-500 h-[30px] rounded-[5px] text-white" onClick={handleConfirm}>Xác nhận</button>
          </div>
        </Dialog>
        <Backdrop
        sx={{ color: '#fff', zIndex: 100 }}
        open={load}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </div>
    </>
  );
};
export default CartPage;
