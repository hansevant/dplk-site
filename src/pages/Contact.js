import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Image from '../assets/img/Map.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import AfterSubmit from '../components/AfterSubmit';

const Contact = () => {

    const navigate = useNavigate()

    const [selectedOption, setSelectedOption] = React.useState('');
    const [selectedOption2, setSelectedOption2] = React.useState("Pembayaran Manfaat");
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');

    const [errors, setErrors] = useState({});
    
    const handleOptionChange = (value) => {
        setSelectedOption(value);
    }

    const handleOptionChange2 =  (e) => {
        setSelectedOption2(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/contact", {
                isClient : selectedOption,
                firstName,
                lastName,
                email,
                phone,
                typeAssistance: selectedOption2,
                message
              });
            console.log(response.data)  
            setLogoutOpen(true);
        } catch (error) {
            setErrors(error.response.data);
            console.log(errors)
        }

    }

    const [isLogoutOpen, setLogoutOpen] = React.useState(false);

    const closeLogoutPopup = () => {
      navigate('/')
    };
  
    const handleLogout = () => {
        
    };
  return (
    <div>
    <Navbar />
    <AfterSubmit isOpen={isLogoutOpen} onClose={closeLogoutPopup} onConfirm={handleLogout} />
    <div className="bg-[#F9F9F9] text-white px-32 py-8 flex ">
      <div className="w-1/2 p-4">
        <h1 className="text-gray-700 text-5xl font-bold font-['DM Sans'] leading-10">Hubungi Kami</h1>
        <p className="text-gray-700 text-xl font-normal font-['DM Sans'] leading-normal mt-6">Jika Anda memiliki pertanyaan tentang langganan atau tidak yakin paket mana yang tepat untuk Anda, hubungi tim kami dan mari jadwalkan panggilan.</p>

        <div className='flex gap-3 mt-10'>
            <button className="w-48 h-16 pl-5 pr-10 pt-4 pb-3.5 bg-blue-600 rounded-lg border border-blue-600 flex-col justify-center items-start gap-px inline-flex">
                <p className="w-28 h-5 text-white text-sm font-semibold font-['Inter'] leading-tight">Hubungi kami</p>
                <p className="w-32 h-5 text-white text-sm font-normal font-['DM Sans'] leading-tight">📞 0804 130 3030</p>
            </button>

            <button className="w-48 h-16 pl-5 pr-9 pt-3 pb-3.5 bg-black rounded-lg border border-white flex-col justify-center items-start gap-1 inline-flex">
                <p className="text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">Email us</p>
                <p className="text-white text-base font-normal font-['DM Sans'] leading-relaxed">📨 dplk@bri.co.id</p>
            </button>
        </div>
        <div className='mt-6'>
            <p className="text-gray-700 text-lg font-semibold font-['Inter'] leading-9">Kunjungi Pusat Bantuan</p>
            <p className="text-gray-700 text-base font-normal font-['DM Sans'] leading-snug">📌 Gedung BRI II Lt 30, <br/>Jl. Jendral Sudirman Kav. 44-46, Jakarta 10210</p>
        </div>

        <img className='mt-8' src={Image} alt='map' />
      </div>

      <div className="w-1/2">
        <div className='px-10 pt-12 pb-12 bg-white rounded-2xl shadow border border-neutral-400'>
            <p className="text-gray-700 text-xl font-semibold font-['Inter']">Hubungi Kami</p>
            <p className="text-gray-700 text-lg font-normal font-['DM Sans'] mt-3 leading-relaxed">Kami memiliki rencana khusus untuk memberdayakan bisnis video Anda. Beri tahu kami kebutuhan Anda, dan kami akan segera menghubungi Anda.</p>
            <form onSubmit={handleSubmit} className='text-gray-800'>
                <p className="text-gray-700 text-xl font-medium font-['DM Sans'] mt-6 leading-normal">Apakah Anda klien yang sudah ada DPLK?</p>
                <div className="flex items-center space-x-4 text-black mt-3">
                    <label className="inline-flex items-center">
                        <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        checked={selectedOption === true}
                        onChange={() => handleOptionChange(true)} 
                        required
                        />
                        <span className="ml-2">Ya</span>
                    </label>

                    <label className="inline-flex items-center">
                        <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        checked={selectedOption === false}
                        onChange={() => handleOptionChange(false)}
                        required
                        />
                        <span className="ml-2">Tidak</span>
                    </label>
                </div>

                <div className='mt-3'>
                    <label htmlFor="firstName" className="block font-medium text-gray-700">
                    Nama Depan<span className='text-red-500'>*</span>
                    </label>
                    <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Masukkan nama depan Anda"
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className='mt-3'>
                    <label htmlFor="lastName" className="block font-medium text-gray-700">
                    Nama Belakang<span className='text-red-500'>*</span>
                    </label>
                    <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Masukkan nama belakang Anda"
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className='mt-3'>
                    <label htmlFor="email" className="block font-medium text-gray-700">
                    Email<span className='text-red-500'>*</span>
                    </label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Masukkan alamat email Anda"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mt-3'>
                    <label htmlFor="phone" className="block font-medium text-gray-700">
                        Nomor Handphone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Masukkan nomor telepon Anda"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    />
                </div>

                <div className='mt-3'>
                    <p className="my-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Apa yang bisa kita bantu?</p>
                    <select
                        value={selectedOption2}
                        onChange={handleOptionChange2}
                        className="w-full border border-gray-300 p-2 rounded mb-2"
                    >
                        <option value="Pembayaran Manfaat">Pembayaran Manfaat</option>
                        <option value="Lainnya">Yang Lain</option>
                    </select>
                </div>

                
                <div className='mt-3'>
                    <label htmlFor="message" className="block font-medium text-gray-700">
                    Pesan
                    </label>
                    <textarea
                    id="message"
                    value={message}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                {errors && <p className="text-red-500 text-sm mt-3">
                  {errors.message}
                </p>}
                <button type="submit" className="bg-blue-500 mt-3 w-full h-20 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Hubungi Kami</button>
            </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact