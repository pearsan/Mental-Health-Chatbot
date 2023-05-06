import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import bird from "./Bird.svg";
import cloud from "./Cloud.svg";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <img src={bird} alt="bird" className="absolute left-0 top-60" />
      <div className="overflow-y-hidden w-full h-48 bottom-0 fixed">
        <img src={cloud} alt="bird" className="circle absolute w-full " />
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
