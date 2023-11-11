import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Accordion from '../components/Accordion'
import axios from 'axios';

const Faq = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFaq = async () => {
    try {
      const res = await axios.get('http://localhost:5000/faq');
      setData(res.data.data);
    } catch (error) {
      console.error('Error fetching faq:', error);
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getFaq();
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    // Menampilkan pesan loading jika data masih dimuat
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Navbar />
      <div className="mx-auto text-center flex flex-col items-center">
        <p className="mt-6 text-gray-700 text-4xl font-bold font-['DM Sans'] leading-10">
          Profil DPLK BRI
        </p>
        <p className="mb-6 mt-3 text-gray-700 text-xl font-normal font-['DM Sans'] leading-normal">
          Semua yang perlu Anda ketahui tentang Produk
        </p>
        <div className='w-[768px] mt-6'>
          {/* Assuming Accordion is a component that can handle the data */}
          <Accordion items={data} />
        </div>
      </div>
    </div>
  )
}

export default Faq  