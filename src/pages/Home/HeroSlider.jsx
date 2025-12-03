import React from 'react';
import Button from '../shared/Button';
import sajek from '../../assets/assets/Sajek.png'
import srimongol from '../../assets/assets/Sreemongol.png'
import sundorbon from '../../assets/assets/sundorbon.png'
import { Link } from 'react-router';


const HeroSlider = () => {
  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-12 pt-4 md:pt-12 flex flex-col md:flex-row items-center gap-6'>
      <div className='text-white space-y-6 md:flex-1 text-center md:text-justify'>
        <h3 className='text-3xl md:text-6xl font-semibold'>COX'S BAZAR</h3>
        <p className='md:w-10/12'> Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach... </p>
        <Link to='/booking'> <Button label='Booking' /></Link>
      </div>
      <div className='flex gap-2 md:gap-4'>

        <div className='border-2 border-yellow-400 rounded-2xl'>
          <img className='rounded-2xl w-48 h-40 md:h-76 object-cover ' src={sundorbon} alt="" />
        </div>
        <div className='border-2 border-yellow-400 rounded-2xl'>
          <img className='rounded-2xl w-48 h-40 md:h-76 object-cover ' src={sajek} alt="" />
        </div>
        <div className='border-2 border-yellow-400 rounded-2xl'>
          <img className='rounded-2xl w-48 h-40 md:h-76 object-cover ' src={srimongol} alt="" />
        </div>
      </div>


    </div>


  );
};

export default HeroSlider;