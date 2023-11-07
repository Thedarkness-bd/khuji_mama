import React, { useState } from "react";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-between items-end float-right p-3">
        <ul className="flex justify-center items-center gap-6 ">
          <li className="hover:underline">
            <a href="#">Gmail</a>
          </li>
          <li className="hover:underline">
            <a href="#">Images</a>
          </li>
          <li>
            <a href="#">
              <BlurOnRoundedIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

//https://www.googleapis.com/customsearch/v1?key=AIzaSyCbFaHslxzUb4ekJ3utRQiRleyDnyJuLOw&cx=60bc67de25e5143b4&q=bangladesh
