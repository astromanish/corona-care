import React from "react";
import './css/status.css';
import StateData from './stats/stateData';
import TotalStats from "./stats/totalStats";
import Charts from "./charts/lineCharts/charts";

const Status = () => {
  return (
    <>
      <TotalStats />
      <StateData />
      <Charts />
    </>
  );
}
export default Status;