import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { MdDelete } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import rice from "./../../../../assets/rice.webp";
const DishDetail = ({dish}) => {
  console.log(dish)
  return (
    <>
      <Card sx={{ width: 350 }} style={{marginRight: 10}}>
        <CardMedia sx={{ height: 200 }} image={dish.image} title="green iguana" />
        <div className="flex justify-between">
          <div className="text-[25px] font-medium">{dish.name}</div>
          <div className="flex mt-2 mr-2">
            <div>
              <MdDelete size={25} color="red" />
            </div>
            <div>
              <IoIosInformationCircle size={25} color="blue" />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default DishDetail;
