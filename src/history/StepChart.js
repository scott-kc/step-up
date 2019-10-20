import React from 'react';
import {HorizontalGridLines, VerticalBarSeries, XAxis, XYPlot, YAxis} from "react-vis";
import {stepEntryUsing} from "../user/StepEntry";

const mockStepEntries = [
    stepEntryUsing(dateMinusDays(6), 4828),
    stepEntryUsing(dateMinusDays(5), 2237),
    stepEntryUsing(dateMinusDays(4), 5712),
    stepEntryUsing(dateMinusDays(3), 6493),
    stepEntryUsing(dateMinusDays(2), 6376),
    stepEntryUsing(dateMinusDays(1), 7210),
    stepEntryUsing(dateMinusDays(0), 6019)
];

function dateMinusDays(days) {
    let date = new Date();
    let day = date.getDate();
    date.setDate(day - days);
    return date;
}

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

function StepChart(props) {
    let steps = props.steps ? props.steps : mockStepEntries;
    return (
        <div>
            Steps
            <XYPlot height={200} width={320} xType="ordinal"
                    margin={{left: 60}}>
                <XAxis/>
                <YAxis/>
                <HorizontalGridLines/>
                <VerticalBarSeries data={extractUserData(steps)}/>
            </XYPlot>
        </div>
    );
}

function extractUserData(steps) {
    return Array.isArray(steps) ?
        steps.filter(isValidEntry).map(toDatum) : [];
}

const isValidEntry = e => e && e.date && e.stepCount;

const toDatum = (entry) => {
    let data
        = {x: days[entry.date.getDay()], y: entry.stepCount};
    console.log(data);
    return data;
};

export default StepChart;