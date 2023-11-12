import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../assets/img/about_us.png'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className='mx-auto text-center'>
            <p className="mt-3 text-gray-700 text-4xl font-bold font-['DM Sans'] leading-10">Profil DPLK BRI</p>
            <p className=" my-6 text-gray-700 text-xl font-normal font-['DM Sans'] leading-normal">Semua yang perlu Anda ketahui tentang DPLK</p>
            <img
                className="mx-auto mb-6 max-w-full h-auto"
                src={Image}
                alt='img'
            />
        </div>
    </div>
  )
}

export default About