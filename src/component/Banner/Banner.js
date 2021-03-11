import React from 'react';
import banner from '../../Images/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <img src={banner}></img>
            <div className="text">
                <h1>Team Tracker</h1>
            </div>
        </div>
    );
};

export default Banner;