import React from 'react';
import HeroSlider from './HeroSlider';
import bgImg from '../../assets/assets/bg-img.png'

const Header = () => {
    return (
        <div
            className="h-screen bg-center bg-cover bg-no-repeat relative"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <HeroSlider />
        </div>
    );
};


export default Header;