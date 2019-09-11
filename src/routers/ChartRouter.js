import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from '../components/HomePage'
import LineChartPage from '../components/LineChartPage'
import BarChartPage from '../components/BarChartPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const ChartRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/line-chart" component={LineChartPage}/>
                <Route path="/bar-chart" component={BarChartPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default ChartRouter;