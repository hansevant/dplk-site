import React from 'react'
import Navbar from '../components/Navbar';
import Image from '../assets/img/Image.png'
import { FiPlayCircle } from 'react-icons/fi';
import PackageCard from '../components/HomePage/PackageCard';
import FeatureCard from '../components/HomePage/FeatureCard';

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
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="201" viewBox="0 0 1440 201" fill="none">
<path d="M0 0C96 30.8 288 142.2 480 154C672 165.8 768 48.6 960 59C1152 69.4 1344 176.6 1440 206V281H0V0Z" fill="#014A94"/>
</svg>
        </section>

        
      <section className="mb-32">
      <div className="container my-24 mx-auto md:px-6">
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
      <div className="container my-24 mx-auto md:px-6">
        <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">
        Package
        </h5>
        <h2 className="text-center text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">Paket Pilihan Investasi
        </h2>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 gap-y-16 mt-20">

        {packages.map((pack)=>(
          <PackageCard key={pack.id} title={pack.text} points={pack.points} />
        ))}

        </div>
        
    </div>
      </section>
    </>
  )
}

export default Home