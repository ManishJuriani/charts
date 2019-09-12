import React from 'react';
import {Bar} from 'react-chartjs-2'

const BarChartPage = (props)=>(
    <div className="container chart" style={{ height: 1000 }}>
        <h1 className="chart__title">BarChart</h1>
        <Bar
            data={props.data} 
            // width={100}
            // height={50}
            // options={{ maintainAspectRatio: false }}
            options= {props.options}
        />
    </div>
)

export default BarChartPage;