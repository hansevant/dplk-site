import React from 'react'
import Navbar from '../components/Navbar'
import Accordion from '../components/Accordion'

const Faq = () => {

  const accordionItems = [
    {
      title: 'Bagaimana cara login DPLK pada Microsite?',
      content: 'Content for Section 1',
    },
    {
      title: 'Apakah DPLK bisa untuk yang tidak bekerja atau hanya untuk yang sudah bekerja saja?',
      content: 'Content for Section 2',
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
            <p className="mt-3 text-gray-700 text-4xl font-bold font-['DM Sans'] leading-10">Profil DPLK BRI</p>
            <p className="my-6 text-gray-700 text-xl font-normal font-['DM Sans'] leading-normal">Semua yang perlu Anda ketahui tentang Produk</p>
            <div className='w-[768px]'>
                <Accordion items={accordionItems} />
            </div>
        </div>

    </div>
  )
}

export default Faq  