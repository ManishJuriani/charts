import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = (props)=>(
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">Data plot - took data points from flask api</h2><br/>
            <div className="header__navbar">
                <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>&nbsp;&nbsp;
                <NavLink to="/line-chart" activeClassName="is-active">Line Chart</NavLink>&nbsp;&nbsp;
                <NavLink to="/bar-chart" activeClassName="is-active">Bar Chart</NavLink>            
            </div>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Charts'
}

export default Header;