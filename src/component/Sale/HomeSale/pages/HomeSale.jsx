import { LineChart } from "@mui/x-charts/LineChart";
import DishMenu from "../DishMenu";
import { useEffect } from "react";
import axiosInstance from "../../../../Api/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../Reducers/userSlice";
import { dishFetch } from "../../../Reducers/dishSlice";

const HomeSale = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`https://localhost:7220/dish/restaurant?Id=${user.id}&Page=0`);
        dispatch(dishFetch(response.data));
      } catch (error) {
        console.log(error)
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="">
      <div className="bg-[#fff]">
        <p className="font-medium text-[20px] ml-10 mt-1 mb-4">
          Số liệu kinh doanh tổng quan
        </p>
        <div className="flex justify-center">
          <div className="border border-black bg-blue-statistic bg-contain w-[320px] h-[170px] mr-4">
            .
          </div>
          <div className="border border-black bg-green-statistic bg-contain w-[320px] h-[170px] mr-4">
            .
          </div>
          <div className="border border-black bg-orange-statistic bg-contain w-[320px] h-[170px] mr-4">
            .
          </div>
          <div className="border border-black bg-red-statistic bg-contain w-[320px] h-[170px]">
            .
          </div>
        </div>
      </div>
      <p className="font-medium text-[20px] ml-10 mt-4">
        Bảng doanh số trong 1 tháng
      </p>
      <div className="flex justify-center">
        <LineChart
          xAxis={[
            {
              data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              ],
            },
          ]}
          series={[
            {
              data: [
                0, 100000
              ],
            },
          ]}
          height={300}
          width={1200}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </div>
      <div className="">
        <DishMenu />
      </div>
    </div>
  );
};
export default HomeSale;
