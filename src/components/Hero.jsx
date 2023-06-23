import {useRef, useState, useEffect} from 'react';
import Dev from '../assets/img_box.jpg';
import Pro1 from '../assets/profile1.png'; 
import Pro2 from '../assets/profile2.png'; 
import Typed from 'typed.js';
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa/index';


const Hero = () => {

  /* useRef para crear un objeto typedRef mutable que contendrá la instancia de Typed.js. */
  const typedRef = useRef(null);

  /* Usamos el gancho useEffect para crear la instancia Typed.js y destruirla al final */
  useEffect(() => {
    const options = {
      strings: ['Steven Munox', 'Software Developer', 'React Developer', 'Pet Lover!'],
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
        <div className='flex flex-col px-8'>            
            <div>
              <h1 className='text-2xl'>Hello_</h1>
            </div>
            <div className='flex justify-start items-center' id='about'>
                <h1 className='text-5xl font-semibold'>I'm <span className='text-white pl-1' id="typed" /></h1>
            </div>

            <div className='flex flex-col justify-center items-center mt-4 gap-2'>
              <img className='w-48 h-48 rounded-full object-cover' src={Pro2} alt="" />

              <div className='flex flex-col'>
                <h1 className='font-semibold'>ABOUT ME</h1>
                <p className='text-gray-300'>
                  👨‍💻 I discovered my passion for software & IT development in 2020, when I determined which path I wanted to follow, I started an adaptation and professional training in Computer Science Online at the Stanford Center for Professional Development at Stanford University, through this training I found different technologies and excellent tools to test these new methodologies and best practices, such as MongoDb, Express, React, NodeJS (MERN) and Git-GitHub, I continue to work proactively, I hope to continue to grow personally and professionally.
                </p>
              </div>

            </div>

            <div>
                <div className='hidden md:flex text-3xl justify-center gap-4 my-4'> {/* en dispositivos grandes ocupara solo el 75% */}
                    <a href="https://github.com/StevenMGitHub">
                      <FaGithubSquare size={30} />
                    </a>
                    <a href="https://linkedin.com/in/steven-munox-dev">
                      <FaLinkedin size={30}></FaLinkedin>
                    </a>
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                </div>
            </div>

            <div className='flex flex-col gap-4 mt-4'>
              <div>
                <h3>🚀 Skills transferred from my non-tech positions:</h3>
              </div>
              <div>
                <ul className='flex flex-col md:flex gap-2 px-4 text-gray-300'>
                    <l className='p-2 border rounded-lg'>✔️ Manager.</l>
                    <l className='p-2 border rounded-lg'>✔️ Communication skills.</l>
                    <l className='p-2 border rounded-lg'>✔️ Negotiation.</l>
                    <l className='p-2 border rounded-lg'>✔️ Creative Music Producer.</l>
                    <l className='p-2 border rounded-lg'>✔️ Marketing & Digital Advertising.</l>
                </ul>
              </div>              
            </div>
        </div>
    </section>
    
  )
}

export default Hero