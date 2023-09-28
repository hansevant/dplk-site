import React, { useEffect, useState } from 'react'
import Navbar2 from '../../components/Navbar2'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardProfile } from '../../components/CardProfile';
import { CardDocument } from '../../components/CardDocuments';
import { CardSaldo } from '../../components/CardSaldo';

const PortalPage = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getDataById = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/users/${id}`)
        setData(res.data.data)
        setIsLoading(false);
      } catch (error) {
        navigate('/notfound')
        setIsLoading(false);
      }
    }

  useEffect(() =>{
    if (!id) {
      // Jika tidak ada, redirect ke halaman lain (misalnya, '/notfound')
      navigate('/login');
      return; // Hentikan eksekusi useEffect selanjutnya
    }
      getDataById()
      console.log(data)
      // eslint-disable-next-line
  },[])

  if (isLoading) {
    // Menampilkan pesan loading jika data masih dimuat
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-slate-200 flex flex-col'>
      <Navbar2 />

      <CardProfile Title="User Profile" Data={data}/>
      <br/>
      <CardSaldo Title="Informasi Saldo DPLK" Data={data}/>
      <br/>
      <CardDocument Title="Unduh Dokumen" />

    </div>
  )
}

export default PortalPage