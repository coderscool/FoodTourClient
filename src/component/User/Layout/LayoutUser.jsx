import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LayoutUser = ({children}) => {
    return(
        <div>
            <Header/>
            <div className="pt-[72px]">{children}</div>
            <Footer/>
            <ToastContainer/>
        </div>
    )
}
export default LayoutUser