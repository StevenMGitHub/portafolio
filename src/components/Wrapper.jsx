import React from 'react';
import Card from '../components/Card.astro';

const style = {
    wrapper:`h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`
}

const Wrapper = () => {
  return (
    <div>
        <div className={style.wrapper}>
            <p>Hello World</p>
        </div>
    </div>
  )
}

export default Wrapper