import React from 'react';
import Card from '../components/Card.astro';
import Hero from './Hero';
import Navbar from './Navbar';
import TechnicalSkills from './TechnicalSkills';
import Traits from './Traits';

const style = {
    wrapper:`h-screen max-h-screen h-min-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white select-none flex flex-col justify-start`
}

const Wrapper = () => {
  return (
    <div>
        <div className={style.wrapper}>
            <Navbar></Navbar>
            <Hero></Hero>
            <Traits></Traits>
            <TechnicalSkills></TechnicalSkills>
        </div>
    </div>
  )
}

export default Wrapper