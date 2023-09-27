import React, { useRef } from 'react'
import Navbar from '../components/Navbar';
import Image from '../assets/img/Image.png'
import Phone from '../assets/img/Phone.png'
import Group from '../assets/img/Group.png'
import AppStore from '../assets/img/app_store.png'
import GooglePlay from '../assets/img/google_play.png'
import { FiArrowLeft, FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import '../assets/css/Slider.css'
import SliderCard from '../components/HomePage/Card/SliderCard';
import Features from '../components/HomePage/Features';
import Packages from '../components/HomePage/Packages';
import Invest from '../components/HomePage/Invest';

const Home = () => {

  const testimonials = [
    {id: 1, name:"Prisca Yuliana", star: 5},
    {id: 2, name:"Fachrie Malyan", star: 4},
    {id: 3, name:"Ernita Deliami", star: 5},
    {id: 4, name:"Abizar Ramadhan", star: 3},
  ]

    const sliderRef = useRef(null);
    const next = () => {
      sliderRef.current.slickNext();
    };
    const previous = () => {
      sliderRef.current.slickPrev();
    };
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: null, // Set to null to hide the previous arrow
    nextArrow: null, // Set to null to hide the next arrow
  };

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
              <h1 className="text-gray-700 text-5xl font-bold font-['DM Sans'] leading-10">Selamat Datang di DPLK BRI</h1>
              <p className="text-gray-700 text-lg font-normal font-['DM Sans'] mt-6 leading-relaxed">BRI DPLK | Dana Pensiun Lembaga Keuangan Bank Rakyat Indonesia (DPLK BRI) menyelenggarakan Program Pensiun Iuran Pasti (PPIP) bagi peserta Individu maupun Korporasi, serta Program Pensiun Untuk Kompensasi Pesangon (PPUKP) bagi peserta Korporasi.</p>
              <a href="https://www.youtube.com/watch?v=X9eFHmCsQ2Y&pp=ygUIZHBsayBicmk%3D" className="text-center text-gray-700 text-lg font-semibold font-['Inter'] leading-10 mt-6 inline-flex items-center px-5 py-1 rounded-lg border hover:bg-gray-200 transition border-gray-700">
                <FiPlayCircle size={20} style={{ color: 'rgb(55 65 81)' }}/>
                <p className='ml-2'>Tonton Video</p>
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

      {/* Features Section  */}
      <section className="mb-32">
        <Features />
      </section>

      {/* Packages Section  */}
      <section className="mb-32">
        <Packages />
      </section>

      {/* Invest Section  */}
      <section className="py-12 bg-slate-50">
        <Invest />
      </section>

      <section className="mb-16">
        <div className="container my-12 mx-auto md:px-6">
            <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
            Testimonial
            </h5>
            <h2 className="text-center text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">
            Dengarkan Cerita Mereka
            </h2>

            <div className="slider-container text-center">

              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testi) => (
                  <SliderCard key={testi.id} name={testi.name} star={testi.star} />
                ))}
              </Slider>

              <div className="slider-controls mt-4 flex justify-center">
                <button className="slider-button text-4xl text-slate-300 hover:text-slate-400 transition py-2 px-4 rounded" onClick={previous}>
                  <FiArrowLeft/>
                </button>
                <button className="slider-button text-4xl text-slate-300 hover:text-slate-400 transition py-2 px-4 rounded" onClick={next}>
                  <FiArrowRight />
                </button>
              </div>
            </div>

        </div>
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
            <div className="mt-10">
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
            <div className="text-sky-800 text-xl font-medium font-['DM Sans'] leading-relaxed">BRI Kantor Pusat</div>
            <div className="text-gray-700 text-sm font-normal font-['DM Sans'] leading-tight">📌 Gedung BRI II Lt 30, <br/>Jl. Jendral Sudirman Kav. 44-46, Jakarta 10210</div>
          </div>
          <div className="rounded-lg flex-col justify-center items-start gap-7 inline-flex">
            <div className="text-sky-800 text-xl font-medium font-['DM Sans'] leading-relaxed">Hubungi Kami</div>
            <div className="pb-px rounded-lg flex-col justify-start items-start gap-2.5 flex">
              <div className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">📞 0804 130 3030</div>
              <div className="text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">📨 dplk@bri.co.id</div>
            </div>
          </div>
          <div className="rounded-lg flex-col justify-center items-start gap-7 inline-flex">
            <div className=" text-sky-800 text-xl font-medium font-['DM Sans'] leading-relaxed">Tautan</div>
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
        
        {/* Footer */}
      <div className="w-full py-4 bg-sky-800 justify-center items-center inline-flex">
        <p className="text-center text-white text-base font-normal font-['DM Sans'] leading-relaxed">© 2023 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Home