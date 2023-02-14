import React from 'react'

const Navbar = () => {
  return (
    <>
        <section>
            <nav className='w-full h-20 flex justify-between items-center px-8 text-white'>
                <h1 className='text-2xl font-bold text-white'>PORTAFOLIO</h1>
                    <ul className='hidden md:flex items-center'>
                        <li className='p-4'>About</li>
                        <li className='p-4'>Projects</li>
                        <li className='p-4'>Works</li>
                        <li className='p-4'>Contact</li>
                    </ul>

            </nav>
        </section>
    </>
  )
}

export default Navbar