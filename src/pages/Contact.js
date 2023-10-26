import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../assets/img/Map.png'

const Contact = () => {

    const [selectedOption, setSelectedOption] = React.useState(null);
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const handleOptionChange = (value) => {
        setSelectedOption(value);
    }
  return (
    <div>
    <Navbar />
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
            <form className='text-gray-800'>
                <p className="text-gray-700 text-xl font-medium font-['DM Sans'] mt-6 leading-normal">Apakah Anda klien yang sudah ada DPLK?</p>
                <div className="flex items-center space-x-4 text-black mt-3">
                    <label className="inline-flex items-center">
                        <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={() => handleOptionChange("option1")}
                        />
                        <span className="ml-2">Ya</span>
                    </label>

                    <label className="inline-flex items-center">
                        <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={() => handleOptionChange("option2")}
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
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <button className="bg-blue-500 mt-6 w-full h-20 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Hubungi Kami</button>
            </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact