import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'50px'}}></img>
        </div>
        
        {/*Menu*/}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Expirience</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        {/*Hamburger*/}
        <div className='md:hidden'>
            <FaBars/>
        </div>
        {/*Mobile Menu*/}
        <div className='hidden'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Expirience</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/*Social Icons*/}
        <div className='hidden'>
        </div>



    
    </div>

    

  )

}

export default Navbar
