import {useState} from 'react';
import { HiMenuAlt2 } from 'react-icons/hi/index';
import {RiCloseFill} from 'react-icons/ri/index';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle); // setup lo opuesto de toggle.
};

  return (
    <>
        <section>
            <nav className='w-full h-20 flex justify-between items-center px-8 text-white'>

                <h1 className='text-3xl font-bold text-white'>FOLIO.</h1>

                  <ul className='hidden md:flex items-center gap-2'>
                      <li className='w-28 p-1 text-center rounded-2xl font-semibold border active:scale-110'><a href='#about'>About</a></li>
                      <li className='w-28 p-1 text-center rounded-2xl font-semibold border active:scale-110'><a href='#projects'>Projects</a></li>
                      <li className='w-28 p-1 text-center rounded-2xl font-semibold border active:scale-110'><a href='#works'>Works</a></li>
                      <li className='w-28 p-1 text-center rounded-2xl font-semibold border active:scale-110'><a href='#contact'>Contact</a></li>
                      <li className='w-28 p-1 text-center rounded-2xl font-semibold border active:scale-110'><a href='#blog'>Blog</a></li>
                  </ul>


                  <div className='md:hidden ' onClick={handleToggle}>
                    { toggle ? 
                        <HiMenuAlt2 size={26}/>
                      :  <RiCloseFill size={30}/>
                    }
                    { toggle ?
                          <ul className='md:hidden absolute right-8 flex flex-col bg-slate-400 rounded-md bg-opacity-75 p-3'>
                            <li className='p-3 text-center font-semibold active:scale-110'><a href='#about'>About</a></li>
                            <li className='p-3 text-center font-semibold active:scale-110'><a href='#projects'>Projects</a></li>
                            <li className='p-3 text-center font-semibold active:scale-110'><a href='#works'>Works</a></li>
                            <li className='p-3 text-center font-semibold active:scale-110'><a href='#contact'>Contact</a></li>
                            <li className='p-3 text-center font-semibold active:scale-110'><a href='#blog'>Blog</a></li>
                          </ul>
                          :
                          null
                      }
                  </div>
            </nav>
        </section>
    </>
  )
}

export default Navbar