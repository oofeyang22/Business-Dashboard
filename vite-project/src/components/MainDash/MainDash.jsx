import React from "react";
import Cards from "../Cards/Cards";
import Boxes from "../Boxes/Boxes";
import Table from '../Table/Table'
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Cards />
      <Boxes/>
      <Table />
    </div>
  );
};

export default MainDash;