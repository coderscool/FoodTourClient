import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterUser() {
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    const [name, setName] = useState("")
    const [home, setHome] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setImage] = useState("")
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
    
    const handleRegister = async () => {
        const data = {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            userName: userName,
            passWord: passWord,
            person: {
                name: name,
                address: home,
                phone: phone
            },
            image: image,
            role: "User",
            search: {
                caategory: [],
                nation: []
            }
        }
        console.log(data)
        await axios.post('https://localhost:7220/identity', data)
    }
    return (
        <div>
            <div className="">
            <div className="">
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="UserName"
            type="search"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="PassWord"
            type="search"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Name"
            type="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Home"
            type="search"
            value={home}
            onChange={(e) => setHome(e.target.value)}
            variant="standard"
            />
            </div>
            <div className="">
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Phone"
            type="search"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="standard"
            />
            <div className="">
                <input type="file" onChange={(e) => handleFileChange(e)}/>
            </div>
      
            </div>
        </div>
        <Button className="" onClick={handleRegister}>Dang ki</Button>
            <div className="">
                <p className="">Already have an account?</p>
                <Link to='/login'>
                    <button className="">Login</button>
                </Link>
            </div>
        </div>
    )
}