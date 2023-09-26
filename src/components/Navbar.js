import React from 'react'
import LogoNav from '../assets/img/logo_nav.png'

const Navbar = () => {

    const menu = ["Beranda", "Tentang Kami", "Simulasi", "Informasi", "FAQ", "Hubungi Kami"]

  return (
    <div className='container max-w-5xl mx-auto flex flex-row justify-between py-5 px-6 items-center'>
        <a href='/'>
            <img alt='logo' src={LogoNav} className='w-36' />
        </a>
        <ul className='flex gap-5 text-gray-700 text-base font-medium leading-snug'>
            {menu.map((value, i) => (
                <li key={i}><a href='soon' className='hover:text-[#014A94]'>{value}</a></li>
            ))}
        </ul>
        <div>
            <a href='/login' className='text-lg bg-gray-100 text-blue-800 font-semibold rounded-md px-7 py-2 hover:bg-blue-100 transition'>
            Masuk
            </a>
        </div>
    </div>
  )
}

export default Navbar