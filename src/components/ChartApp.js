import React from 'react';
import Header from './Header';
import {Line} from 'react-chartjs-2';

export default class ChartApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:30,
            data: {},
            datasets: [],
            xValues:[]
        }
        this.handleFlaskTemperatureApi = this.handleFlaskTemperatureApi.bind(this)
        this.handleFlaskSpeedApi = this.handleFlaskSpeedApi.bind(this)
        this.handleFlaskFuelApi = this.handleFlaskFuelApi.bind(this)
    }

    handleFlaskTemperatureApi(){
        const count = this.state.count;
        const borderColor = "purple"
        fetch('http://localhost:5000/temperature/'+count)
        .then(res => res.json())
        .then((receivedData) => {
            let yValues = []
            let label = "Temperature"
            console.log(yValues);
            for(let i=0;i<count;i++){
                if(receivedData[i].y)
                    yValues.push(receivedData[i].y)
                else{
                    // console.log(i)
                    // console.log(receivedData[i])
                    // console.log(yValues[yValues.length-1])
                    yValues.push(yValues[yValues.length-1])
                }
            }
            this.addGraphData(yValues,borderColor,label)
        }).catch(console.log)
    }

    handleFlaskSpeedApi(){
        const count = this.state.count;
        const borderColor = "black"
        fetch('http://localhost:5000/speed/'+count)
        .then(res => res.json())
        .then((receivedData) => {
            let yValues = []
            let label = "Speed"
            console.log(yValues);
            for(let i=0;i<count;i++){
                if(receivedData[i].y)
                    yValues.push(receivedData[i].y)
                else{
                    // console.log(i)
                    // console.log(receivedData[i])
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
            console.log(yValues);
            for(let i=0;i<count;i++){
                if(receivedData[i].y)
                    yValues.push(receivedData[i].y)
                else{
                    // console.log(i)
                    // console.log(receivedData[i])
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
            data:yValues
        }
        let datasets = this.state.datasets
        datasets.push(rawData)
        
        let data = {
            labels:this.setHorizontalValues(),
            datasets:datasets
        }
        this.setState(()=>({
            data:data,
            datasets:datasets
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

        const labels=[]

        // Call to all api 
        this.handleFlaskTemperatureApi();
        this.handleFlaskSpeedApi();
        this.handleFlaskFuelApi();

        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res => res.json())
        // .then((receivedData)=>{
        //     let size = receivedData.length
        //     let longitudeValues = []
        //     let latitudeValues = []
        //     let borderColor = "purple"
        //     let label = "Longitudes"
        //     for(let i=0;i<size;i++){
        //         longitudeValues.push(Math.floor(receivedData[i].address.geo.lng));
        //         latitudeValues.push(Math.floor(receivedData[i].address.geo.lat));            
        //     }
        //     this.addGraphData(longitudeValues,borderColor,label)
        //     this.addGraphData(latitudeValues,"cyan","Latitudes")
        // }).catch(console.log)

        // const data = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     labels: [1, "febr", 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [
        //       {
        //         label: 'My First dataset',
        //         fill: false,
        //         lineTension: 0.1,
        //         backgroundColor: 'rgba(75,192,192,0.4)',
        //         borderColor: 'rgba(75,192,192,1)',
        //         borderCapStyle: 'butt',
        //         borderDash: [],
        //         borderDashOffset: 0.0,
        //         borderJoinStyle: 'miter',
        //         pointBorderColor: 'rgba(75,192,192,1)',
        //         pointBackgroundColor: '#fff',
        //         pointBorderWidth: 1,
        //         pointHoverRadius: 5,
        //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        //         pointHoverBorderColor: 'rgba(220,220,220,1)',
        //         pointHoverBorderWidth: 2,
        //         pointRadius: 1,
        //         pointHitRadius: 10,
        //         data: [65, 59, 80, 81, 56, 55, 40]
        //       },
        //       {
        //         label: 'Age',
        //         fill: false,
        //         borderColor:"yellow",
        //         data: [50, 9, 8, 181, 67, 75]
        //       }
        //     ]
        //   };
        // this.setState(()=>({data:data}))
    }
        
    render(){
        return (
            <div>
                <Header></Header>
                <div className="App" style={{ height: 800 }}>
                    <Line ref="chart" data={this.state.data} />
                    {/* <Line ref="chart" data={data} /> */}
                </div>				
            </div>
        );
    }
}