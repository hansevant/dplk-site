import React from 'react'
import Navbar from '../components/Navbar';
import Image from '../assets/img/Image.png'
import { FiPlayCircle } from 'react-icons/fi';

const Home = () => {
  return (
    <>
        <Navbar />
        <section className="bg-white">
          <div className="max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:flex justify-between items-center">

            <div className="lg:col-span-5">
              <h1 className="text-gray-700 text-5xl font-bold font-['DM Sans'] leading-10">Selamat Datang di DPLK BRI</h1>
              <p className="text-gray-700 text-lg font-normal font-['DM Sans'] mt-6 leading-relaxed">BRI DPLK | Dana Pensiun Lembaga Keuangan Bank Rakyat Indonesia (DPLK BRI) menyelenggarakan Program Pensiun Iuran Pasti (PPIP) bagi peserta Individu maupun Korporasi, serta Program Pensiun Untuk Kompensasi Pesangon (PPUKP) bagi peserta Korporasi.</p>
              <a href="##" className="text-center text-gray-700 text-lg font-semibold font-['Inter'] leading-10 mt-6 inline-flex items-center px-5 py-1 rounded-lg border border-gray-700">
                <FiPlayCircle size={16} style={{ color: 'rgb(55 65 81)' }}/>
                <p className='ml-2'>Tonton Video</p>
              </a>
            </div>
            
            <div className="hidden lg:block">
              <img src={Image} alt="mockup" style={{ width: '2200px', height: 'auto' }} />
            </div>
            
          </div>
        </section>
    </>
  )
}

export default Home