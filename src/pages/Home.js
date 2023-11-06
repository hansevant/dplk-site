import React from 'react'
import { FiPlayCircle } from 'react-icons/fi';
import "slick-carousel/slick/slick.css"
import '../assets/css/Slider.css'
import Navbar from '../components/Navbar';
import Image from '../assets/img/Image.png'
import Phone from '../assets/img/Phone.png'
import Group from '../assets/img/Group.png'
import AppStore from '../assets/img/app_store.png'
import GooglePlay from '../assets/img/google_play.png'
import Features from '../components/HomePage/Features';
import Packages from '../components/HomePage/Packages';
import Invest from '../components/HomePage/Invest';
import Testi from '../components/HomePage/Testi';

const Home = () => {

  const containerStyle = {
    backgroundImage: `url(${Group})`, // Set the background image using template literals
    backgroundSize: 'contain', // You can add other background-related styles here
  };

  return (
    <>
      <Navbar />
      <section className="bg-white" style={containerStyle}>
        <div className="max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:flex justify-between items-center">

          <div className="lg:col-span-5">
            <h1 className="text-gray-700 text-5xl font-bold font-['DM Sans'] leading-none">Selamat Datang di DPLK BRI</h1>
            <p className="text-gray-700 text-lg font-normal font-['DM Sans'] mt-6 leading-relaxed">BRI DPLK | Dana Pensiun Lembaga Keuangan Bank Rakyat Indonesia (DPLK BRI) menyelenggarakan Program Pensiun Iuran Pasti (PPIP) bagi peserta Individu maupun Korporasi, serta Program Pensiun Untuk Kompensasi Pesangon (PPUKP) bagi peserta Korporasi.</p>
            <a href="https://www.youtube.com/watch?v=X9eFHmCsQ2Y&pp=ygUIZHBsayBicmk%3D" className="text-center text-gray-700 text-lg font-semibold font-['Inter'] leading-10 mt-6 inline-flex items-center px-5 py-1 rounded-lg border hover:bg-gray-200 transition border-gray-700">
              <FiPlayCircle size={20} style={{ color: 'rgb(55 65 81)' }}/>
              <p className="ml-2 text-center text-gray-700 text-lg font-semibold font-['Inter'] leading-10">Tonton Video</p>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <img src={Image} alt="mockup" style={{ width: '2200px', height: 'auto' }} />
          </div>
          
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="201" viewBox="0 0 1440 201" fill="none">
          <path d="M0 0C96 30.8 288 142.2 480 154C672 165.8 768 48.6 960 59C1152 69.4 1344 176.6 1440 206V281H0V0Z" fill="#014A94"/>
        </svg>
      </section>

      <section className="mb-32">
        <Features />{/* Features Section  */}
      </section>

      <section className="mb-32">
        <Packages />{/* Packages Section  */}
      </section>
      
      <section className="py-12 bg-slate-50">
        <Invest /> {/* Invest Section  */}
      </section>

      <section className="mb-16">
        <Testi />{/* Testimonials Section  */}
      </section>

      <section className="bg-white mb-16">
        <div className="max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:flex justify-between items-center">
          <div className="hidden lg:block">
            <img src={Phone} alt="mockup" style={{ width: '725px', height: 'auto' }} />
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">DPLK BRIMO</h2>
            <h1 className="text-gray-700 text-5xl font-bold font-['DM Sans'] mt-3 leading-10">Kini DPLK BRI tersedia di BRIMO</h1>
            <p className="text-gray-700 text-lg font-normal font-['DM Sans'] mt-6 leading-relaxed">Segera daftarkan ke unit kerja BRI terdekat dan dapatkan di Apps Store dan Play Store.</p>
            <div className="mt-10 flex gap-2">
              <a href='https://play.google.com/store/apps/details?id=id.co.bri.brimo&pcampaignid=web_share'>
                <img src={GooglePlay} alt="mockup" style={{ width: 'auto', height: 'auto' }} />
              </a>
              <a href='https://apps.apple.com/id/app/brimo-bri/id1439730817'>
                <img src={AppStore} alt="mockup" style={{ width: 'auto', height: 'auto' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
        
      <section className='border-t'>
        <div className="pl-44 pr-96 py-20 rounded-lg border-slate-200 justify-start items-start gap-16 inline-flex">
          <div className="flex-col justify-center items-start gap-8 inline-flex">
            <p className="text-sky-800 text-xl font-medium font-['DM Sans'] leading-relaxed">BRI Kantor Pusat</p>
            <p className="text-gray-700 text-sm font-normal font-['DM Sans'] leading-tight">📌 Gedung BRI II Lt 30, <br/>Jl. Jendral Sudirman Kav. 44-46, Jakarta 10210</p>
          </div>
          <div className="rounded-lg flex-col justify-center items-start gap-7 inline-flex">
            <p className="text-sky-800 text-xl font-medium font-['DM Sans'] leading-relaxed">Hubungi Kami</p>
            <div className="pb-px rounded-lg flex-col justify-start items-start gap-2.5 flex">
              <p className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">📞 0804 130 3030</p>
              <p className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">📨 dplk@bri.co.id</p>
            </div>
          </div>
          <div className="rounded-lg flex-col justify-center items-start gap-7 inline-flex">
            <p className=" text-sky-800 text-xl font-medium font-['DM Sans'] leading-relaxed">Tautan</p>
            <div className="pb-px rounded-lg flex-col justify-start items-start gap-2.5 flex">
              <a href='?' className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Produk BRI</a>
              <a href='?' className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Deposit Interest</a>
              <a href='?' className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Rates</a>
              <a href='?' className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Loan Interest Rates</a>
              <a href='?' className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Fees & Rates</a>
              <a href='?' className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Whistleblowing System</a>
              <a href='?' className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Karier</a>
            </div>
          </div>
        </div>
      </section>
        
      <div className="w-full py-4 bg-sky-800 justify-center items-center inline-flex">
        <p className="text-center text-white text-base font-normal font-['DM Sans'] leading-relaxed">© 2023 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Home