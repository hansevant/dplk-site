import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const Information = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, cat: 'Semua' },
    { id: 2, cat: 'Regulasi', doc : {
        docId :1,
        title: "pp file",
    }},
    { id: 3, cat: 'PDP DPLK BRI' },
    { id: 4, cat: 'Fund Fact Sheet' },
    { id: 5, cat: 'Formulir' },
    { id: 6, cat: 'Produk Brief DPLK BRI' },
    { id: 7, cat: 'Lainnya' },
  ];

  return (
    <>
        <Navbar />
        <div className="max-w-screen-lg mt-24 bg-slate-50 border mx-auto">
            <div className='flex justify-between bg-white items-center p-6'>
                <h1 className="text-gray-900 text-xl font-medium font-['DM Sans'] leading-normal">Unduh Informasi</h1>
                <input
                type="text"
                id="username"
                className="mt-1 w-64 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Cari dokumen anda disini"
                />
            </div>
            <ul className="flex space-x-4 mt-6 pl-6">
                {tabs.map((tab) => (
                <li key={tab.id}>
                    <button
                    className={`${
                        activeTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    } px-4 py-2 text-xs font-medium font-['DM Sans'] rounded-full transition-all`}
                    onClick={() => setActiveTab(tab.id)}
                    >
                    {tab.cat}
                    </button>
                </li>
                ))}
            </ul>
            <div>
                {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`${
                    activeTab === tab.id ? 'block' : 'hidden'
                    } mt-4 p-6 bg-slate-50 rounded-lg`}
                >
                    <div className="w-96 h-16 items-center bg-white p-2.5 rounded-lg flex-col justify-center gap-2.5 inline-flex">
                        <div className="justify-start items-center gap-2.5 inline-flex">
                            <p className="w-72 text-sky-800 text-base font-medium font-['DM Sans'] leading-snug">Content for {tab.cat}</p>
                            <div className='p-3 bg-indigo-50 text-[#014A94]'>
                                <FiDownload size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default Information;
