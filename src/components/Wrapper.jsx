import React from 'react';
import Card from '../components/Card.astro';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import TechnicalSkills from './TechnicalSkills';
import Traits from './Traits';

const style = {
    wrapper:`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white select-none flex flex-col justify-start`
}

const Wrapper = () => {
  return (
    <div>
        <div className={style.wrapper}>
            <Navbar></Navbar>
            <Hero></Hero>
            <Traits></Traits>
            <TechnicalSkills></TechnicalSkills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Wrapper