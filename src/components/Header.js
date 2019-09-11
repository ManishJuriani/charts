import React from 'react';

const Header = (props)=>(
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">Data plot - took data points from flask api</h2>
        </div>
    </div>
)

Header.defaultProps = {
    title: 'Charts'
}

export default Header;