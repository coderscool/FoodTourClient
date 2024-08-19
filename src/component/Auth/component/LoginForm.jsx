import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../../Api/axiosConfig";
export default function LoginForm() {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        Username: '',
        Password: '',
    })
    const handleLogin = async () => {
        if(login.Username != null && login.Password != null){
            try {
                const response = await axiosInstance.post('/identity/login', login)
                await localStorage.setItem('token', response.data.token)
                navigate('/sale/home') 
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className="">
            <div className="flex-col w-[550px]">
                <div className="flex justify-between">
                    <TextField 
                    style={{marginTop: 20, width: 250}}
                    id="standard-search"
                    label="UserName"
                    type="search"
                    variant="standard"
                    name="Username"
                    onChange={(e) => setLogin({ ...login, Username: e.target.value })}
                    />
                
                    <TextField
                    style={{marginTop: 20, width: 250, borderBlockColor: 'aqua'}}
                    id="standard-search"
                    label="PassWord"
                    type="password"
                    variant="standard"
                    name="Password"
                    onChange={(e) => setLogin({ ...login, Password: e.target.value })}
                    />
                </div>
                <div className="flex-row">
                    <span className="">Bạn chưa có tài khoản?</span>
                    <Link className="ml-2 text-orange-500 hover:underline" to='/register'>Đăng kí</Link>
                    <button className="bg-orange-500 text-white w-[120px] h-8 rounded-[5px] mt-4 ml-[190px]" onClick={handleLogin}>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}