import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'
import { useState } from 'react';


const Home = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/*container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Olá, meu nome é</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Matheus Dornelles</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Eu sou um Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]  '>Estou me especializado em construir sistemas web com REACT, estou focado em
                     construção de aplicativos web full-stack.</p>
                <div>
                    <button onClick={handleClick} to="about" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                            Sobre
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>

                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home