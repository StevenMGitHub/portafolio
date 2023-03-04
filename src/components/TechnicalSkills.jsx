import React from 'react'

const TechnicalSkills = () => {
  return (
    <>
        <section>
            
            <div className='flex flex-col p-8'>
              <div>
                <h2>TECHNICAL SKILLS</h2>
              </div>          
              <div className='grid md:grid-cols-3 gap-2 p-4'>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Blockchain</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Solidity</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Cryptography</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Truffle</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Hardhat</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Smart Contracts</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Cryptocurrencies</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">NFTs </a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">DeFi</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">Git</a>
                  <a className='p-4 rounded-lg bg-purple-400 font-bold' href="">GitHub</a>
              </div>        
            </div>
            </section>
    </>
  )
}

export default TechnicalSkills