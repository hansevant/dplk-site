import React from 'react'
import PackageCard from './Card/PackageCard';

const Packages = () => {
    
    const packages = [
      { id: 1, text: 'DPLK BRI Pasar uang', points : ["Efek Pasar uang: 100%"] },
      { id: 2, text: 'DPLK BRI Pendapatan Tetap', points : ["Efek Pendapatan Tetap: 60 - 100%", "Efek Pasar Uang: 0 - 40%"] },
      { id: 3, text: 'DPLK BRI Saham', points: ["Efek Saham: 60 - 100%","Efek Pasar Uang: 0 - 40%"] },
      { id: 4, text: 'DPLK BRI Pasar Uang Syariah', points: ["Efek Pasar Uang Syariah : 100%"] },
      { id: 5, text: 'DPLK BRI Berimbang Syariah', points: ["Efek Pasar Uang Syariah : 0 -100%","Efek Pendapatan Tetap Syariah : 0 - 50%", "Efek Saham Syariah : 0 - 50%"] },
      { id: 6, text: 'DPLK BRI Kombinasi', points: ["Gabungan antara konvensional dan syariah."] },
    ];
  
  return (
    <div className="container my-12 mx-auto md:px-6">
        <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">Package</h5>
        <h2 className="text-center text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">Paket Pilihan Investasi</h2>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 mt-20">
            {packages.map((pack)=>(
                <PackageCard key={pack.id} title={pack.text} points={pack.points} />
            ))}
        </div>
    </div>
  )
}

export default Packages