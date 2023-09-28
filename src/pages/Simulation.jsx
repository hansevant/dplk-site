import React from 'react'
import Navbar from '../components/Navbar'
import Mobile from '../assets/img/Mobile.png'

const Simulation = () => {
  return (
    <div>
    <Navbar />
    <div className="max-w-screen-lg px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:flex justify-between">

        <div className="lg:col-span-5 mt-4">
            <h1 className="text-sky-800 text-sm ml-8 font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">Simulasi</h1>
            <p className="text-gray-700 text-4xl my-4 font-bold font-['DM Sans'] leading-10">Tertarik melakukan investasi? <br/> coba hitung simulasi DPLK</p>

            <div className='border w-96 h-96 shadow p-4'>
                <p className="w-28 h-5 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Setoran awal</p>
            </div>
        </div>

        <div className="hidden lg:block ml-6">
            <img src={Mobile} alt="mockup" style={{ width: '325px', height: 'auto' }} />
        </div>

        </div>
    </div>
  )
}

export default Simulation