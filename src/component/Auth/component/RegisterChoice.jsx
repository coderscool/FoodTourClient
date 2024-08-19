import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterChoice = () => {
  return (
    <>
      <div>
        <p>Bạn muốn đăng kí tài khoản mới với tư cách là:</p>
        <div className="mt-2">
          <Link to="/register/user">
            <button className="bg-orange-500 text-white h-[30px] px-2 rounded-[5px] mr-10 ml-6">
              Người dùng
            </button>
          </Link>
          <Link to="/register/sale">
            <button className="bg-orange-500 text-white h-[30px] px-2 rounded-[5px]">
              Người bán hàng
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default RegisterChoice;
