import React, { Fragment } from "react";
import Chatbox from "../components/Chatbox/Chatbox";
import { Route, useSearchParams } from "react-router-dom";

const TalkPage = () => {
  const [searchparams] = useSearchParams();
  console.log(searchparams.get("value"));
  return (
    <Fragment>
      <Chatbox props={searchparams.get("value")}></Chatbox>
    </Fragment>
  );
};

export default TalkPage;
