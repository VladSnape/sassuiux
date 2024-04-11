import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { SiGravatar } from "react-icons/si";




const NavBar = () => {
  return (
    <nav className='  p-3 flex justify-between lg:px-10'>
        <div className=' flex gap-x-10'>
        <SiGravatar className=' text-slate-900 text-2xl'/>
        <div className='flex gap-x-3'>
        <span className='hidden lg:block'>Features</span>
        <span className='hidden lg:block'>Pricing</span>
        <span className='hidden lg:block'>Enterprise</span>
        <span className='hidden lg:block'>Careers</span>
        </div>
        
        </div>
        <div className=' flex gap-5'>
        <CiMenuBurger className=' text-slate-900 text-2xl lg:hidden'/>
        <div className=' flex gap-7 items-center'>
        <span className='hidden lg:block'>Open an account</span>
        <div className='flex gap-2 items-center'>
            <RxAvatar className=' text-slate-900 text-2xl'/>
            <span className='hidden lg:block'>Sign in</span>
        </div>
        </div>
       
        </div>

    </nav>
  )
}

export default NavBar