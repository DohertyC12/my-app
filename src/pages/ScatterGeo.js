import { ScatterPlot } from 'react-d3-library';
import React from 'react';

const data2 = {xValue : 2, yValue: 63};
// const data = {  {xValue : 1, yValue: 40},
// {xValue : 2, yValue: 63}, 
// {xValue : 3, yValue: 52}, 
// {xValue : 4, yValue: 59}, 
// {xValue : 5, yValue: 79},};

export const ScatterGeoFrag = () => (
    <React.Fragment>
        <ScatterPlot data={data2}/>
        <h1>Erin's ScatterGeo tester</h1>
    </React.Fragment>
);