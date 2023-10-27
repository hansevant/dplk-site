import React from 'react'
import Navbar from '../components/Navbar'
import Accordion from '../components/Accordion'

const Faq = () => {

  const accordionItems = [
    {
      title: 'Bagaimana cara login DPLK pada Microsite?',
      content: "Username : 7 Digit CIF DPLK</br>Password: 6 Digit tanggal lahir + 7 digit CIF</br>Pengguna juga dapat melakukan cek saldo melalui aplikasi BRImo",
    },
    {
      title: 'Kapan dana efektif masuk rekening?',
      content: 'Content for Section 3',
    },
    {
      title: 'Bila peserta DPLK ingin melakukan auto debet saldo DPLK tiap bulan, kemanakah rekening tujuannya?',
      content: 'Content for Section 3',
    },
    {
      title: 'Apakah manfaat menjadi peserta DPLK BRI?',
      content: 'Content for Section 3',
    },
    {
      title: 'Paket apa saja yang ditawarkan oleh DPLK BRI saat ini?',
      content: 'Content for Section 3',
    },
  ];

  return (
    <div>
    <Navbar />
        <div className='mx-auto text-center flex flex-col items-center'>
            <p className="mt-6 text-gray-700 text-4xl font-bold font-['DM Sans'] leading-10">Profil DPLK BRI</p>
            <p className="mb-6 mt-3 text-gray-700 text-xl font-normal font-['DM Sans'] leading-normal">Semua yang perlu Anda ketahui tentang Produk</p>
            <div className='w-[768px] mt-6'>
                <Accordion items={accordionItems} />
            </div>
        </div>

    </div>
  )
}

export default Faq  