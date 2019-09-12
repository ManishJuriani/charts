import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChartPage = (props)=>(
    <div className="container chart" style={{ height: 1000 }}>
        <h1 className="chart__title">LineChart</h1>

        <Line  
            data={props.data}
            options={props.options}
        />
    </div>
)

export default LineChartPage;