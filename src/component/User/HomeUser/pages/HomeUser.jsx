import HeaderHome from "../HeaderHome"
import Reason from "../Reason"
import StoreAdvertis from "../StoreAdvertis"
import Trending from "../Trending"

const HomeUser = () => {
    return(
        <>
            <div className="mt-[76px]">
                <HeaderHome/>
                <Trending/>
                <StoreAdvertis/>
                <Reason/>
            </div>
        </>
    )
}
export default HomeUser