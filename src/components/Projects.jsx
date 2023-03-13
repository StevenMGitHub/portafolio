import React from 'react';
import {
    FaLinkedin,
    FaGithubSquare,
    FaLink
} from 'react-icons/fa/index';
import documentation from '../assets/documentation.png';
import API from '../assets/API.png';
import Innova from '../assets/Innova.png';
import trombones from '../assets/trombones.png';
import cuatro_riquezas from '../assets/el-poder-de-las-cuatro-riquezas.png';
import mongodb from '../assets/mongodb_api.png';


const Projects = () => {
  return (
    <>
        
        <div className='px-8 mt-4' id='projects'>
            <h1 className='font-semibold'>PROJECTS</h1>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>

                <div className='bg-purple-300 opacity-95 rounded-2xl active:scale-110'>
                    <h1 className='ml-4'>Innova Intelligence</h1>
                    <figure>
                        <a href="https://benevolent-brioche-b5f8fc.netlify.app">
                            <img src={Innova} alt="Innova Intelligence" />
                        </a>
                    </figure>
                    <div>
                        <a className='text-black flex justify-center' href="https://benevolent-brioche-b5f8fc.netlify.app/">
                            <FaLink size={24}></FaLink>
                        </a>
                    </div>

                </div>
                <div className='bg-purple-300 opacity-95 rounded-2xl active:scale-110'>
                    <h1 className='ml-4'>React Landing Page The Power of The Four Riches</h1>
                    <figure>
                        <a href="https://statuesque-chebakia-54fc85.netlify.app/">
                            <img src={cuatro_riquezas} alt="The Power of The Four Riches image" />
                        </a>
                    </figure>
                    <div>
                        <a className='text-black flex justify-center' href="https://statuesque-chebakia-54fc85.netlify.app/">
                            <FaLink size={24}></FaLink>
                        </a>
                    </div>
                </div>
                <div className='bg-purple-300 opacity-95 rounded-2xl active:scale-110'>
                    <h1 className='ml-4'>React JavaScript Technical Documentation Page</h1>
                    <figure>
                        <a href="https://extraordinary-kangaroo-49fa81.netlify.app/">
                            <img src={documentation} alt="documentation page img" />
                        </a>
                    </figure>
                    <div>
                        <a className='text-black flex justify-center' href="https://extraordinary-kangaroo-49fa81.netlify.app/">
                            <FaLink size={24}></FaLink>
                        </a>
                    </div>
                </div>
                <div className='bg-purple-300 opacity-95 rounded-2xl active:scale-110'>
                    <h1 className='ml-4'>React Landing Page Trombones</h1>
                    <figure>
                        <a href="https://euphonious-elf-68464c.netlify.app/">
                            <img src={trombones} alt="landing page trombones image" />
                        </a>
                    </figure>
                    <div>
                        <a className='text-black flex justify-center' href="https://euphonious-elf-68464c.netlify.app/">
                            <FaLink size={24}></FaLink>
                        </a>
                    </div>
                </div>
                <div className='bg-purple-300 opacity-95 rounded-2xl active:scale-110'>
                    <h1 className='ml-4'>REST API with Node and MongoDB</h1>
                    <figure>
                        <a href="https://github.com/StevenMGitHub">
                            <img src={mongodb} alt="mongodb request api" />
                        </a>
                    </figure>
                    <div>
                        <a className='text-black flex justify-center' href="https://github.com/StevenMGitHub">
                            <FaLink size={24}></FaLink>
                        </a>
                    </div>
                </div>
                <div className='bg-purple-300 opacity-95 rounded-2xl active:scale-110'>
                    <h1 className='ml-4'>React Request API</h1>
                    <figure>
                        <a href="https://statuesque-clafoutis-73f3d7.netlify.app/">
                            <img src={API} alt="Rick and Morty image" />
                        </a>
                    </figure>
                    <div>
                        <a className='text-black flex justify-center' href="https://statuesque-clafoutis-73f3d7.netlify.app/">
                            <FaLink size={24}></FaLink>
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <blockquote cite="http://news.rediff.com/report/2009/sep/14/pm-pays-tribute-to-father-of-green-revolution-borlaug.htm">
                    <p className='text-gray-300'>
                        "Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza"
                    </p>
                    <cite> -- Paul Leary</cite>
                </blockquote>
            </div>

        </div>
    </>
  )
}

export default Projects