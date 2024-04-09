import Slider from "react-slick"
import banner1 from "./../../../../assets/banner1.jpg"
const Banner = () => {
    const dishs = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
    ]
    const setting = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        lazyLoad: true,
        slidesToScroll: 1,
    }
    return(
        <div className="w-[1200px] ml-[200px] mt-6">
            <Slider {...setting}>
                {dishs.map(dish => (
                    <div key={dish.id}>
                        <img className="w-[1140px] h-[250px]" src={banner1}/>
                    </div>
                ))}
            </Slider>
        </div>  
    )
}
export default Banner