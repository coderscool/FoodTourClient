import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Api/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../Reducers/userSlice";
export default function Protected({children}) {
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const local = localStorage.getItem("token");
      if (!local) {
        setIsValid(false);
        return;
      }
      try {
        const response = await axiosInstance.get("/identity/infor");
        console.log(response);
        dispatch(userFetch(response.data));
        setIsValid(true);
      } catch (error) {
        setIsValid(false);
        localStorage.removeItem("token")
      }
    };
    fetchUser();
  }, []);
  if (isValid === null) {
    return <div>Loading...</div>;
  }
  if(isValid == false){
    navigate("/login")
  }
  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
}
