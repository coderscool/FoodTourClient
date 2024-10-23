import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import { useState } from "react"
import DishForm from "../HomeSale/DishForm"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LayoutSale = ({children}) => {
    const [open, setOpen] = useState(false)
    const onAddDish = () => {
        setOpen(true)
    }
    const onHandleCreateDish = async (data) => {
        console.log(data)
        await axios.post('https://localhost:7220/dish', data)
        setOpen(false)
        toast.success("Thêm món ăn thành công")
    }
    const onHandleClose = () => {
        setOpen(false)
    }
    return(
        <div>
            <Header onAddDish={onAddDish}/>
            <div className="pt-[76px]">{children}</div>
            <Footer/>
            <DishForm open={open} onHandleCreateDish={onHandleCreateDish} onHandleClose={onHandleClose}/>
            <ToastContainer/>
        </div>
    )
}
export default LayoutSale