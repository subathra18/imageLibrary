import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      layout
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
