import {useRef, useState, useEffect} from 'react';
import Dev from '../assets/img_box.jpg' 
import Typed from 'typed.js';


const Hero = () => {

  /* useRef para crear un objeto typedRef mutable que contendrá la instancia de Typed.js. */
  const typedRef = useRef(null);

  /* Usamos el gancho useEffect para crear la instancia Typed.js y destruirla al final */
  useEffect(() => {
    const options = {
      strings: ['Sofware Developer','Blockchain Developer' , 'Pet Lover!'],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
      delayBack: 1500,

    };
    typedRef.current = new Typed('#typed', options); /* la almacenamos en la propiedad typedRef.current.  */
    
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <section>
        <div className='flex flex-col p-8'>            
            <div>
              <h1 className='text-2xl'>Hello_</h1>
            </div>
            <div className='flex justify-start items-center'>
                <h1 className='text-5xl font-semibold'>I'm <span className='text-white pl-1' id="typed" /></h1>
            </div>

            <div>
              <img className='w-28 h-28 rounded-full' src={Dev} alt="" />

              <p>
                I discovered my passion for software development & Blockchain in 2020, when I determined which path I wanted to follow, 
                I started an adaptation and professional training in Computer Science Online from the Stanford Center for Professional 
                Development at Stanford University, through this training I found different technologies and excellent tools to test 
                these new methodologies and best practices, such as Blockchain Development, Solidity, Truffle, Hardhat, Smart Contracts, Cryptocurrencies, 
                NFTs and Git-GitHub, I continue to work proactively, I hope to continue growing personally and professionally.
              </p>
            </div>

            <div className='flex flex-col my-4 gap-4'>
              <div>
                <h3>Habilidades transferidas de mis puestos no tecnológicos:</h3>
              </div>
              <div>
                <ul className='flex gap-2'>
                    <l className='p-2 border rounded-lg'>Manager</l>
                    <l className='p-2 border rounded-lg'>Habilidades de comunicación</l>
                    <l className='p-2 border rounded-lg'>Negociación.</l>
                </ul>
              </div>              
            </div>
        </div>
    </section>
    
  )
}

export default Hero