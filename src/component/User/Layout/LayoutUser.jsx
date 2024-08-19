import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
const LayoutUser = ({children}) => {
    return(
        <div>
            <Header/>
            <div className="pt-[76px]">{children}</div>
            <Footer/>
        </div>
    )
}
export default LayoutUser