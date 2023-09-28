import React, { useEffect } from 'react'
import Navbar2 from '../../components/Navbar2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CardProfile } from '../../components/CardProfile';

const CardComponent2 = ({Title}) => {

  // const data = [
  //   { id: 1, name: 'User ID', price: 1234789 },
  //   { id: 2, name: 'Nama Lengkap', price: 'Farhan Rizky Pratama' },
  //   { id: 3, name: 'Alamat', price: 'Jl. Jenderal Sudirman, Kota Jakarta Pusat,  10210' },
  //   { id: 4, name: 'Tanggal Registrasi', price: '10-04-2023' },
  //   // Add more data as needed
  // ];

  return (
    <div className='mx-auto'>
      <div className="block w-full max-w-3xl p-4 border border-slate-300 rounded-lg">
        <h5 className="UserProfile w-[200px] text-gray-900 text-lg font-bold leading-[25.20px]">{Title}</h5>
        <div className='bg-white'>
          

        <div className="">
  <table className="w-full text-sm text-gray-500 text-center border-collapse">
    <thead className="text-xs text-white uppercase bg-[#001E55]">
      <tr>
        <th scope="col" className="px-6 py-3 border border-slate-200">
          No
        </th>
        <th scope="col" className="px-6 py-3 border border-slate-200">
          Nomor Account
        </th>
        <th scope="col" className="px-6 py-3 border border-slate-200">
          Paket Investasi
        </th>
        <th scope="col" className="px-6 py-3 border border-slate-200">
          Saldo DPLK
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white text-slate-500 text-base font-normal">
        <td className="px-6 py-4 border border-slate-200">
          1
        </td>
        <td className="px-6 py-4 border border-slate-200">
          1234789
        </td>
        <td className="px-6 py-4 border border-slate-200">
          Farhan Rizky Pratama
        </td>
        <td className="px-6 py-4 border border-slate-200">
          2320255
        </td>
      </tr>
    </tbody>
  </table>
</div>

        <p className="p-1 text-gray-700 text-sm font-medium">Total Saldo : 7,727,633</p>
        </div>
      </div>
    </div>
  );
}

const DetailPage = () => {
    const id = localStorage.getItem("id");
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();
    const getDataById = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/users/${id}`)
          setData(res.data.data)
        } catch (error) {
          navigate('/notfound')
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

  return (
    <div className='bg-slate-200 flex flex-col h-screen'>
    <Navbar2 />

    <CardProfile Title="User Profile" Data={data} />
    <br/>
    <CardComponent2 Title="Detail Saldo DPLK" />
    </div>

  )
}

export default DetailPage