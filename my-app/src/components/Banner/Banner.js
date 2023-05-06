import React, { useState } from "react";
import icon from "./Icon.svg";
import { NavLink, createSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [myValue, setMyValue] = useState("");
  let navigate = useNavigate();
  function handleEnter(event) {
    if (event.key === "Enter") {
      navigate({
        pathname: "/Talk",
        search: createSearchParams({
          value: myValue,
        }).toString(),
      });
      console.log(myValue);
    }
  }
  const handleChange = ({ target: { value } }) => {
    setMyValue(value);
  };
  return (
    <div className="container flex justify-center h-96 items-center w-auto min-w-full	max-w-full	">
      <div className="w-1/3 h-10 absolute items-center justify-center top-1/2">
        <input
          type="Type your message"
          className="h-12 w-full shadow-md rounded-xl outline-0 pl-7 pr-10"
          placeholder="Type your message"
          onKeyDown={handleEnter}
          value={myValue}
          onChange={handleChange}
        />
        <div className="top-2 right-1 flex absolute ">
          <img src={icon} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
