import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { FaBell } from "react-icons/fa";

export default function BasicMenu() {
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive(!isActive)
  };
  return (
    <>
      <button
        className={`w-[40px] mr-2 rounded-[50%] focus:outline-none ${
          isActive ? 'bg-orange-100 text-orange-500 hover:bg-orange-100' : 'bg-gray-200 hover:bg-gray-300'}`}
        id="basic-button"
        onClick={handleClick}
      >
        <Badge badgeContent={4} size={15} color='primary'>
            <FaBell size={23}/>
        </Badge>
      </button>
    </>
  );
}