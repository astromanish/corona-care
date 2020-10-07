import React from "react";
import './css/worldStat.css';
import CountryData from './worldStat/countryData';
import TotalStats from "./worldStat/totalStats";
//import Charts from "./charts/lineCharts/charts";

const IndiaStat = () => {
    return (
        <>
            <TotalStats />
            <CountryData />
            {/* <Charts /> */}
        </>
    );
}
export default IndiaStat;