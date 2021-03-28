import React from 'react';
import Reloj from './Reloj';
import '../css/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <h1>Temporizador HIIT</h1>
                <span></span>
            </div>
            <Reloj/>
        </div>
    )
}

export default Header
