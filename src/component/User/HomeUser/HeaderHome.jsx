import Banner from "./component/Banner"
import SearchDish from "./component/SearchDish"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import imageorange from "./../../../assets/imageorange.jpg"

const HeaderHome = (props) => {
    return(
        <>
            <div className="bg-orange-100 h-[430px]">
                <div className="pt-6 text-3xl flex justify-center pb-6">
                    <p className="text-orange-500 font-bold font-arial">Thưởng thức món ngon trên toàn thế giới dù ở bất kì nơi đâu</p>
                </div>
                <div className="flex justify-center">
                    <SearchDish/>
                </div>
                <Banner/>
            </div>
        </>
    )
}
export default HeaderHome