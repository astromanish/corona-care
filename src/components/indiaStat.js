import React from "react";
import './css/indiaStat.css';
import StateData from './indiaStat/stateData';
import TotalStats from "./indiaStat/totalStats";
import Charts from "./charts/lineCharts/charts";

const IndiaStat = () => {
    return (
        <>
            <TotalStats />
            <StateData />
            <Charts />
        </>
    );
}
export default IndiaStat;