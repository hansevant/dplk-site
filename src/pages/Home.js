import React, { useRef } from 'react'
import Navbar from '../components/Navbar';
import Image from '../assets/img/Image.png'
import Phone from '../assets/img/Phone.png'
import Group from '../assets/img/Group.png'
import AppStore from '../assets/img/app_store.png'
import GooglePlay from '../assets/img/google_play.png'
import { FiArrowLeft, FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import PackageCard from '../components/HomePage/PackageCard';
import FeatureCard from '../components/HomePage/FeatureCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import '../assets/css/Slider.css'
import SliderCard from '../components/HomePage/SliderCard';

const Home = () => {

  

  const features = [
    { id: 1, text: 'Aman', desc : "Dikelola oleh manajemen Bank BRI, serta seluruh transaksi dilakukan melalui overbooking untuk meningkatkan keamanan transaksi."},
    { id: 2, text: 'Akses Luas', desc : "Jaringan kerja konvensional maupun e-channel BRI tersebar di seluruh Indonesia, memudahkan peserta DPLK BRI dalam bertransaksi."},
    { id: 3, text: 'Investasi Beragam dan Prudent', desc:  "DPLK BRI mengutamakan prinsip kehati-hatian dalam penempatan dana dengan 6 pilihan investasi"},
    { id: 4, text: 'Return Optimal', desc: "Secara historis, DPLK BRI memberikan return yang baik."},
    { id: 5, text: 'Pengelolaan Modern', desc: "Pengelolaan investasi DPLK BRI memakai konsep pengelolaan reksadana yang dihitung harian dan dikirim secara periodik"},
    { id: 6, text: 'Berpengalaman', desc: "Pengalaman bekerjasama dengan lebih dari 200 korporasi terkemuka di Indonesia"},
  ];

  const packages = [
    { id: 1, text: 'DPLK BRI Pasar uang', points : ["Efek Pasar uang: 100%"] },
    { id: 2, text: 'DPLK BRI Pendapatan Tetap', points : ["Efek Pendapatan Tetap: 60 - 100%", "Efek Pasar Uang: 0 - 40%"] },
    { id: 3, text: 'DPLK BRI Saham', points: ["Efek Saham: 60 - 100%","Efek Pasar Uang: 0 - 40%"] },
    { id: 4, text: 'DPLK BRI Pasar Uang Syariah', points: ["Efek Pasar Uang Syariah : 100%"] },
    { id: 5, text: 'DPLK BRI Berimbang Syariah', points: ["Efek Pasar Uang Syariah : 0 -100%","Efek Pendapatan Tetap Syariah : 0 - 50%", "Efek Saham Syariah : 0 - 50%"] },
    { id: 6, text: 'DPLK BRI Kombinasi', points: ["Gabungan antara konvensional dan syariah."] },
  ];

  const invest = [
    {id: 1, name:"DPLK BRI PSU", r3: 0.44 , r1: 4.03},
    {id: 2, name:"DPLK BRI PENDAPATAN TETAP", r3: 0.47, r1: 6.89},
    {id: 3, name:"DPLK BRI SAHAM", r3: 5, r1: 14.3},
    {id: 4, name:"DPLK BRI PSU SYARIAH", r3: 3.69, r1: 5.67},
    {id: 5, name:"DPLK BRI BERIMBANG SYARIAH", r3: 0.23, r1: 5.67},
  ]

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

        
      <section className="mb-32">
      <div className="container my-12 mx-auto md:px-6">
          <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
          Features
          </h5>
          <h2 className="text-center text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">Keuntungan DPLK BRI
          </h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 gap-y-16 mt-20">

            {features.map((feature)=>(
              <FeatureCard key={feature.id} text={feature.text} desc={feature.desc} />
            ))}

          </div>
        </div>
      </section>
      <section className="mb-32">
        <div className="container my-12 mx-auto md:px-6">
            <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
            Package
            </h5>
            <h2 className="text-center text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">Paket Pilihan Investasi
            </h2>
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 mt-20">

            {packages.map((pack)=>(
              <PackageCard key={pack.id} title={pack.text} points={pack.points} />
            ))}

            </div>
            
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container my-12 mx-auto md:px-6">
            <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
            Paket Investasi
            </h5>
            <h2 className="text-center mb-6 text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">NAV Harian (Rupiah)
            </h2>

            <div className="container mx-auto px-4 py-8 bg-white border rounded-lg">
            <p className="text-slate-800 text-lg mb-4 font-medium font-['DM Sans'] leading-tight">Paket Investasi</p>
              <div className="w-full mx-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="border-y">
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                        Name
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                        NAV/Unit
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                        Return 1 Hari Terakhir
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                      Return 30 Hari Terakhir
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                        Return 1 Tahun Terakhir
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                        Return 3 Tahun Terakhir
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invest.map((inv) => (
                      <tr key={inv.id} className="border-t border-gray-200 text-gray-700 text-sm font-normal font-['DM Sans'] leading-tight">
                        <td className="px-6 py-4 whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                          {inv.name}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                          99
                        </td>
                        <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                          0.01
                        </td>
                        <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                          {inv.r3}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                          {inv.r1}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                          14.18
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
        </div>
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
        <div className="w-full py-4 bg-sky-800 justify-center items-center inline-flex">
          <p className="text-center text-white text-base font-normal font-['DM Sans'] leading-relaxed">© 2023 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.</p>
        </div>
    </>
  )
}

export default Home