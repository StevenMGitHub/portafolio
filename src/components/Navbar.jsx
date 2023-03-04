import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
        <section>
            <nav className='w-full h-20 flex justify-between items-center px-8 text-white'>
                <h1 className='text-3xl font-bold text-white'>PORTAFOLIO.</h1>
                    <ul className='hidden md:flex items-center gap-2'>
                        <li className='w-32 p-1 text-center rounded-2xl font-semibold border'><a href='#about'>About</a></li>
                        <li className='w-32 p-1 text-center rounded-2xl font-semibold border'><a href='#projects'>Projects</a></li>
                        <li className='w-32 p-1 text-center rounded-2xl font-semibold border'><a href='#works'>Works</a></li>
                        <li className='w-32 p-1 text-center rounded-2xl font-semibold border'><a href='#contact'>Contact</a></li>
                        <li className='w-32 p-1 text-center rounded-2xl font-semibold border'><a href='#blog'>Blog</a></li>
                    </ul>

                    <div>
                      <div className='hidden md:flex justify-between my-6'> {/* en dispositivos grandes ocupara solo el 75% */}
                          <FaFacebookSquare size={30} />
                          <FaInstagram size={30} />
                          <FaTwitterSquare size={30} />
                          <FaGithubSquare size={30} />
                      </div>
                    </div>
            </nav>
        </section>
    </>
  )
}

export default Navbar