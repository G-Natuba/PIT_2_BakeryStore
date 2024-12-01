import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>


        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Bringing simplicity and modernity in the way you dress and buy clothes.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
            <li>Home</li>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>            
            <li>Collection</li>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>            
            <li>About</li>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>            
            <li>Contact</li>
            </NavLink>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+55 11 91234-5678</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
