import React, { useEffect } from 'react'
import Logo from '../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 py-4 text-center">
//       <p className="text-sm text-gray-500">
//         © 2023 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved
//       </p>
//     </footer>
//   );
// };


const Login = () => {
  const idl = localStorage.getItem("id");
  const navigate = useNavigate();
  const [id, setId] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  useEffect(()=>{
    if(idl)navigate('/portal')
  },[idl,navigate])

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/users", {
        id,
        password,
      });
      console.log(response.data)

      localStorage.setItem("id", response.data.data.id);
      navigate("/portal");
    } catch (error) {
      console.log(error.response.data)
    } 
  }
  
  return (
    <div className="flex min-h-screen bg-white">
    {/* Left Side - Login Form */}
      <div className="flex-1 p-8 flex flex-col justify-center items-center">
      <img alt='logo' src={Logo} className='w-36' />
      <p className='text-center text-slate-500 text-sm font-normal leading-tight'>Selamat datang di</p>
        <h2 className="text-center text-gray-700 text-2xl font-medium mb-4">Customer Portal DPLK BRI</h2>
        <form onSubmit={handleLogin} className="space-y-4 w-full max-w-md">
          <div>
            <label htmlFor="username" className="block font-medium text-gray-700">
              User ID
            </label>
            <input
              type="number"
              id="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Masukkan user ID Anda"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Masukkan password Anda"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-[420px] h-[38px] px-2 justify-start items-start gap-10 inline-flex">
            <div className="grow shrink basis-0 h-[38px] py-2 justify-start items-center gap-2 flex">
              <div className="w-5 h-5 bg-white rounded-lg justify-center items-center flex">
                <div className="w-5 h-5 relative bg-white rounded-md border border-gray-400" />
              </div>
              <div className="text-gray-700 text-base font-normal leading-snug">Ingatkan saya</div>
            </div>
            <div className="grow shrink basis-0 h-[38px] py-2 justify-end items-center gap-2 flex">
              <Link to="/soon" className="text-slate-500 text-base font-normal leading-snug">Lupa kata sandi?</Link>
            </div>
          </div>

          <button type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300">
            Masuk
          </button>
        </form>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-right" style={{ backgroundImage: 'url(https://www.bri.co.id/documents/20123/aa97b88b-cc8f-5bc1-bf99-dec08110584b?download=false)' }}>
        {/* You can replace 'your-image-url.jpg' with your actual image URL */}
      </div>
    </div>
    
  )
}

export default Login