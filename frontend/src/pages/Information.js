import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import Regulasi from '../assets/docs/Regulasi.pdf'
import Navbar from '../components/Navbar';

const Information = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, cat: 'Semua' },
    { id: 2, cat: 'Regulasi', doc : [
            {
                docId :1,
                title: "POJK Nomor 60 tahun 2020",
            },
            {
                docId :2,
                title: "POJK Nomor 5/POJK.05/2017",
            },
            {
                docId :3,
                title: "POJK Nomor 17/POJK.5/2016",
            },
            {
                docId :4,
                title: "POJK Nomor 14/POJK.5/2016",
            },
        ]
    },
    { id: 3, cat: 'PDP DPLK BRI', doc : [
        {
            docId :1,
            title: "PDP DPLK BRI Tahun 2022",
        },
        {
            docId :2,
            title: "PDP DPLK BRI Tahun 2020",
        },
        {
            docId :3,
            title: "PDP DPLK BRI Tahun 2014",
        },
        {
            docId :4,
            title: "PDP DPLK BRI Tahun 2009",
        },
    ] },
    { id: 4, cat: 'Fund Fact Sheet', doc : [
        {
            docId :1,
            title: "FFS BRIFINE Berimbang Syariah - Desember 2022",
        },
        {
            docId :2,
            title: "FFS BRIFINE Pasar Uang Syariah - Desember 2022",
        },
        {
            docId :3,
            title: "FFS BRIFINE Pasar Uang - Desember 2022",
        },
        {
            docId :4,
            title: "FFS BRIFINE Berimbang Syariah - Desember 2021",
        },
    ] },
    { id: 5, cat: 'Formulir', doc : [
        {
            docId :1,
            title: "Formulir Pendaftaran",
        },
    ] },
    { id: 6, cat: 'Produk Brief DPLK BRI', doc : [
        {
            docId :1,
            title: "Keterangan Program BRI Future Investment",
        },
    ]},
    { id: 7, cat: 'Lainnya' },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl my-6 bg-slate-50 border mx-auto">
        <div className='flex justify-between bg-white items-center p-6'>
          <h1 className="text-gray-900 text-xl font-medium font-['DM Sans'] leading-normal">Unduh Informasi</h1>
          <input
          type="text"
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
        <div className='mt-4 p-6 flex bg-slate-50 rounded-lg'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? 'block' : 'hidden'} flex flex-wrap`}
            >
              {activeTab === 1 && tab.cat === 'Semua' ? (
                // Render all documents for the "Semua" category
                tabs
                  .filter((t) => t.cat !== 'Semua' && Array.isArray(t.doc)) // Filter out "Semua" and tabs with an array of docs
                  .map((filteredTab) => (
                    <div key={filteredTab.id} className="">
                      {filteredTab.doc.map((document) => (
                        <div key={document.docId} className="flex m-2 w-96 justify-between border border-slate-300 items-center bg-white p-2.5 rounded-lg">
                          <a href={Regulasi} target="_blank" rel="noreferrer">
                            <p className="text-sky-800 w-72 text-base font-medium font-['DM Sans'] leading-snug">
                              Content for {document.title}
                            </p>
                          </a>
                          <div className='p-3 bg-indigo-50 text-[#014A94]'>
                            <FiDownload size={20} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
              ) : Array.isArray(tab.doc) ? (
                // Render the document for other categories with an array of docs
                tab.doc.map((document) => (
                  <div key={document.docId}  className="flex m-2 w-96 justify-between border border-slate-300 items-center bg-white p-2.5 rounded-lg">
                    <a href={Regulasi} target="_blank" rel="noreferrer">
                      <p className="text-sky-800 w-72 text-base font-medium font-['DM Sans'] leading-snug">
                        Content for {document.title}
                      </p>
                    </a>
                    <div className='p-3 bg-indigo-50 text-[#014A94]'>
                      <FiDownload size={20} />
                    </div>
                  </div>
                ))
              ) : (<>no files</>)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
