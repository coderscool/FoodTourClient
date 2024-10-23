import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: purple,
  },
});
export default function RegisterUser() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      passWord: passWord,
      person: {
        name: name,
        address: address,
        phone: phone,
      },
      image: image,
      role: "user",
      search: {
        category: [],
        nation: [],
      },
    };
    try {
      await axios.post("https://localhost:7220/identity", data);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="w-[700px] flex-col">
        <div className="flex m-4 justify-between">
          <div className="">
            <TextField
              style={{ width: 250 }}
              id="standard-search"
              label="Tên đăng nhập"
              type="search"
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250 }}
              id="standard-search"
              label="Mật khẩu"
              type="password"
              variant="standard"
              onChange={(e) => setPassWord(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250 }}
              id="standard-search"
              label="Tên người dùng"
              type="search"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250 }}
              id="standard-search"
              label="Số điện thoại"
              type="search"
              variant="standard"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250 }}
              id="standard-search"
              label="Địa chỉ"
              type="search"
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="">
            <div className="w-[300px] h-[300px] bg-white"></div>
            <input
              type="file"
              className="mt-1"
              onChange={(e) => handleFileChange(e)}
            />
            <div className="flex mt-4">
              <p className="">Bạn đã có tài khoản?</p>
              <Link to="/login">
                <button className="ml-2 text-orange-500 hover:underline">
                  Đăng nhập
                </button>
              </Link>
            </div>
            <button
              className="text-white bg-orange-500 hover:underline p-1 w-[100px] rounded-[5px] ml-[200px] mt-2"
              onClick={handleRegister}
            >
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
