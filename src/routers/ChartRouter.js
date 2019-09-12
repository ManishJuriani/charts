import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from '../components/HomePage'
import LineChartPage from '../components/LineChartPage'
import BarChartPage from '../components/BarChartPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const ChartRouter = (props)=>(
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/line-chart" render={()=><LineChartPage data={props.data} options={props.options}/>}/>
                <Route path="/bar-chart" render={()=><BarChartPage data={props.data} options={props.options}/>}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default ChartRouter;