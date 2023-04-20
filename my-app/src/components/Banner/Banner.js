import React from "react";
import icon from "./Icon.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container flex justify-center h-96 items-center w-auto">
      <div className="w-1/3 h-10 relative items-center justify-center">
        <input
          type="Type your message"
          className="h-12 w-full shadow-md rounded-xl outline-0 pl-7 pr-10"
          placeholder="Type your message"
        />
        <div className="top-2 right-1 flex absolute ">
          <img src={icon} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
