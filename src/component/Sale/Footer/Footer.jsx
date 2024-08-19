const Footer = () => {
    return(
        <div className="w-[100%] h-[300px] bg-orange-500 font-bold">
            <div className="">
                <div className="ml-[112px] text-white px-10 py-8 text-4xl">FOODTOUR</div>
                <div className="flex w-[1000px] text-[17px] font-bold h-auto border-t border-b static ml-[150px] border-white">
                    <div className="mr-[150px] px-[10px] py-6 font-arial text-white">
                        <p className="mb-3">Về FoodTour</p>
                        <p>Blog</p>
                    </div>
                    <div className="mr-[150px] px-[10px] py-6 text-white font-arial">
                        <p className="mb-3">Mở quán trên FoodTour</p>
                        <p>Đối tác</p>
                    </div>
                    <div className="mr-[150px] px-[10px] py-6 text-white font-arial">
                        <p className="mb-3">Trung tâm hỗ trợ</p>
                        <p>Các ứng dụng khác</p>
                    </div>
                </div>
                <div className="flex ml-[150px] px-5 py-0">
                    <div>Androi</div>
                    <div>Ios</div>
                </div>
            </div>
        </div>
    )
}
export default Footer