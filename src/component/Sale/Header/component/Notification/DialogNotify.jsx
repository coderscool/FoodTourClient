const DialogNotify = () => {
  return (
    <div className="w-[300px] top-16 right-0 z-20 fixed h-[350px] bg-[#fff] mr-10 border-2 border-gray-300 rounded-[5px] flex-col justify-center">
      <div className="m-2">
        <div className="border-b-2 border-gray-300 pb-2">
          <p className="font-sans font-medium ">Vu Hoang Phuong</p>
          <p className="font-sans ">Dat 3 phan com cay xa xiu</p>
        </div>
        <div className="border-b-2 border-gray-300 pb-2 pt-1">
          <p className="font-sans font-medium ">Trinh Thi Ngoc Nga</p>
          <p className="font-sans ">Dat 3 phan bo wagu</p>
        </div>
      </div>
    </div>
  );
};
export default DialogNotify;
