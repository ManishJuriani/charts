import React from 'react';
import Header from './Header';
import ChartRouter from '../routers/ChartRouter'
import {Line,Bar} from 'react-chartjs-2';

export default class ChartApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:30,
            data: {},
            datasets: [],
            xValues:[],
            options: {}
        }
        this.handleFlaskTemperatureApi = this.handleFlaskTemperatureApi.bind(this)
        this.handleFlaskSpeedApi = this.handleFlaskSpeedApi.bind(this)
        this.handleFlaskFuelApi = this.handleFlaskFuelApi.bind(this)
    }

    handleFlaskTemperatureApi(){
        const count = this.state.count;
        const darkGoldenrod = "#B8860B";
        const borderColor = darkGoldenrod;
        fetch('http://localhost:5000/temperature/'+count)
        .then(res => res.json())
        .then((receivedData) => {
            let yValues = []
            let label = "Temperature"
            for(let i=0;i<count;i++){
                if(receivedData[i].y)
                    yValues.push(receivedData[i].y)
                else{
                    // console.log(yValues[yValues.length-1])
                    yValues.push(yValues[yValues.length-1])
                }
            }
            this.addGraphData(yValues,borderColor,label)
        }).catch(console.log)
    }

    handleFlaskSpeedApi(){
        const count = this.state.count;
        const navajoWhite = "#FFDEAD";
        const borderColor = navajoWhite;
        fetch('http://localhost:5000/speed/'+count)
        .then(res => res.json())
        .then((receivedData) => {
            let yValues = []
            let label = "Speed"
            for(let i=0;i<count;i++){
                if(receivedData[i].y)
                    yValues.push(receivedData[i].y)
                else{
                    // console.log(yValues[yValues.length-1])
                    yValues.push(yValues[yValues.length-1])
                }
            }
            this.addGraphData(yValues,borderColor,label)
        }).catch(console.log)
    }

    handleFlaskFuelApi(){
        const count = this.state.count;
        const borderColor = "cyan"
        fetch('http://localhost:5000/fuel/'+count)
        .then(res => res.json())
        .then((receivedData) => {
            let yValues = []
            let label = "Fuel"
            for(let i=0;i<count;i++){
                if(receivedData[i].y)
                    yValues.push(receivedData[i].y)
                else{
                    // console.log(yValues[yValues.length-1])
                    yValues.push(yValues[yValues.length-1])
                }
            }
            this.addGraphData(yValues,borderColor,label)
        }).catch(console.log)
    }

    addGraphData(yValues,borderColor,label){
        let rawData = {
            label:label,
            fill:false,
            borderColor:borderColor,
            backgroundColor : borderColor,
            data:yValues
        }
        let datasets = this.state.datasets
        datasets.push(rawData)
        
        let data = {
            labels:this.setHorizontalValues(),
            datasets:datasets
        }

        let options = { 
                        legend: {
                            labels: {
                                fontColor: "white",
                                fontSize: 18
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: "white"
                                    ,
                                    fontSize: 18,
                                    // stepSize: 1,
                                    // beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: "white"
                                    ,
                                    fontSize: 14,
                                    // stepSize: 1,
                                    // beginAtZero: true
                                }
                            }]
                        }
                    }

        this.setState(()=>({
            data:data,
            datasets:datasets,
            options:options
        }))
    }

    setHorizontalValues(){
        let xValues = this.state.xValues;
        if(xValues.length>=1){
            return xValues
        }else{
            for(let i=1;i<=this.state.count;i++){
                xValues.push(i)
            }
            this.setState(()=>{xValues:xValues})
            return xValues
        }
    }

    componentWillMount(){
        // Call to all api 
        this.handleFlaskTemperatureApi();
        this.handleFlaskSpeedApi();
        this.handleFlaskFuelApi();
    }
        
    render(){
        return (
            <div>
                <ChartRouter></ChartRouter>
                <div className="container chart" style={{ height: 800 }}>
                    <Line ref="chart" data={this.state.data}
                        options={this.state.options}
                    />
                    
                    <Bar
                        data={this.state.data} 
                        // width={100}
                        // height={50}
                        // options={{ maintainAspectRatio: false }}
                        options= {this.state.options}
                    />
                </div>				
            </div>
        );
    }
}