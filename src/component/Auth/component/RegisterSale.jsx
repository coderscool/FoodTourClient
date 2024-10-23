import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  InputLabel,
  List,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, orange } from "@mui/material/colors";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const nations = ["Âu", "Hàn", "Nhật", "Trung", "Thái", "Việt"];
const types = [
  "Mặn",
  "Ngọt",
  "Lẩu",
  "Nướng",
  "Ăn sáng",
  "Ăn vặt",
  "Soup",
  "Cơm",
];
const theme = createTheme({
  palette: {
    primary: orange,
    secondary: purple,
  },
});
export default function RegisterSale() {
  const [typeName, setTypeName] = useState([]);
  const [nationName, setNationName] = useState([]);
  const [userName, setUserName] = useState("");
  const [pssWord, setPassWord] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate()
  const handleNationChange = (event) => {
    const {
      target: { value },
    } = event;
    setNationName(typeof value === "string" ? value.split(",") : value);
  };
  const handleTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setTypeName(typeof value === "string" ? value.split(",") : value);
  };
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
  const handleRegister = async (event) => {
    event.preventDefault();
    const data = {
      userName: userName,
      passWord: pssWord,
      person: {
        name: name,
        address: address,
        phone: phone,
      },
      image: image,
      search: {
        nation: nationName,
        category: typeName,
      },
      role: "sale",
    };
    console.log(data);
    try {
      await axios.post("https://localhost:7220/identity", data);
      navigate("/login")
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <ThemeProvider theme={theme}>
      <div className="w-[700px] flex-col">
        <div className="flex m-4 justify-between">
          <div className="">
            <div className="w-[350px] h-[200px] bg-white"></div>
            <input
              type="file"
              className="mt-1"
              onChange={(e) => handleFileChange(e)}
            />
            <List>
              <FormControl sx={{ width: 350, marginBottom: 1 }}>
                <InputLabel id="demo-multiple-checkbox-label">Loại</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={typeName}
                  onChange={handleTypeChange}
                  input={<OutlinedInput label="Loại" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {types.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={typeName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ width: 350 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Quoc gia
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={nationName}
                  onChange={handleNationChange}
                  input={<OutlinedInput label="Quoc gia" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {nations.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={nationName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </List>
          </div>
          <div className="">
            <TextField
              style={{ width: 250, marginLeft: 60 }}
              id="standard-search"
              label="Tên đăng nhập"
              type="search"
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250, marginLeft: 60 }}
              id="standard-search"
              label="Mật khẩu"
              type="search"
              variant="standard"
              onChange={(e) => setPassWord(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250, marginLeft: 60 }}
              id="standard-search"
              label="Tên người dùng"
              type="search"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250, marginLeft: 60 }}
              id="standard-search"
              label="Số điện thoại"
              type="search"
              variant="standard"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              style={{ marginTop: 20, width: 250, marginLeft: 60 }}
              id="standard-search"
              label="Địa chỉ"
              type="search"
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex ml-[60px] mt-4">
              <p className="">Bạn đã có tài khoản?</p>
              <Link to="/login">
                <button className="ml-2 text-orange-500 hover:underline">Đăng nhập</button>
              </Link>
            </div>
            <button className="text-white bg-orange-500 hover:underline p-1 w-[100px] rounded-[5px] ml-[210px] mt-2" onClick={handleRegister}>
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
