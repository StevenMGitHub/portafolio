import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className='flex flex-col bg-slate-500 px-8'>
            <h1 className='font-semibold'>Software Developer</h1>
            <p>
            Descubrí mi pasión por el desarrollo de software & TI en 2020, cuando determine cual camino quería recorrer, 
            inicie ansioso por aprender una adaptación a través de diversos cursos, como Ciencias de la Computacion 
            Online del Centro Stanford de Desarrollo Profesional de Stanford University a traves de estos encontré 
            diferentes tecnologías, lenguajes como MongoDb , Express, React, NodeJS (MERN) y herramientas increibles 
            para probar estas nuevas metodologías y mejores prácticas, sigo trabajando proactivamente, para crecer 
            personal y Profesionalmente.
            </p>
            <h3>Habilidades transferidas de mis puestos no tecnológicos:</h3>
            <ul className='px-8 bg-slate-300'>
                <l className='p-4'>Manager</l>
                <l className='p-4'>Habilidades de comunicación</l>
                <l className='p-4'>Negociación.</l>
            </ul>
        </div>
    </section>
    
  )
}

export default Hero