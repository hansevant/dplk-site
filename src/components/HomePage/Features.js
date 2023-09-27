import React from 'react'
import FeatureCard from './Card/FeatureCard';

const Features = () => {

  const features = [
    { id: 1, text: 'Aman', desc : "Dikelola oleh manajemen Bank BRI, serta seluruh transaksi dilakukan melalui overbooking untuk meningkatkan keamanan transaksi."},
    { id: 2, text: 'Akses Luas', desc : "Jaringan kerja konvensional maupun e-channel BRI tersebar di seluruh Indonesia, memudahkan peserta DPLK BRI dalam bertransaksi."},
    { id: 3, text: 'Investasi Beragam dan Prudent', desc:  "DPLK BRI mengutamakan prinsip kehati-hatian dalam penempatan dana dengan 6 pilihan investasi"},
    { id: 4, text: 'Return Optimal', desc: "Secara historis, DPLK BRI memberikan return yang baik."},
    { id: 5, text: 'Pengelolaan Modern', desc: "Pengelolaan investasi DPLK BRI memakai konsep pengelolaan reksadana yang dihitung harian dan dikirim secara periodik"},
    { id: 6, text: 'Berpengalaman', desc: "Pengalaman bekerjasama dengan lebih dari 200 korporasi terkemuka di Indonesia"},
  ];

  return (
    <div className="container my-12 mx-auto md:px-6">
        <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">Features</h5>
        <h2 className="text-center text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">Keuntungan DPLK BRI</h2>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 gap-y-16 mt-20">
            {features.map((feature)=>(
                <FeatureCard key={feature.id} text={feature.text} desc={feature.desc} />
            ))}
        </div>
    </div>
  )
}

export default Features