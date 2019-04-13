import React from 'react';
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { LineChart, BarChart } from 'react-easy-chart';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <td>
            {/* <Sparklines height={80} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines> */}
            {/* <LineChart
            axes
    data={[
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ]
    ]}
  /> */}
            {console.log(props.data)}
            {/* <LineChart
    xType={'text'}
    axes
    width={1050}
    height={250}
    interpolate={'cardinal'}
    data={[
      props.data
    ]}
  /> */}
            <BarChart
                axes
                colorBars
                height={150}
                width={350}
                data={props.data}
            />
            {/* <div>Average: {average(props.data)} {props.unit}</div> */}
        </td>
    )
}