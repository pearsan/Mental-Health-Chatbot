import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import bird from "./Bird.svg";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <img src={bird} alt="bird" className="absolute left-0 top-60" />
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
