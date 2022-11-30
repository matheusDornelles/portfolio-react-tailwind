import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justfy-between items-center px-4 bg-[#08192f] text-gray-300'>
        <img src={Logo} alt="Logo image" style={{width:'50px'}} />
    </div>
  )
}

export default NavBar