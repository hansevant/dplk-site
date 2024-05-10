import React from 'react';
import {FiCheckCircle} from 'react-icons/fi';

const AfterSubmit = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div>
      {/* Background blur */}
      <div
        className={`fixed inset-0 bg-gray-700 opacity-50 transition-opacity ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      ></div>

      {/* Popup */}
      <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white rounded-lg shadow-lg p-8 w-[820px]">
        <div className='flex mr-4 items-center'>
            <div className='rounded-full bg-[#D1FADF] p-2'>
                <FiCheckCircle size={24} color='green'/>
            </div>
          </div>
          <p className=" text-gray-700 text-3xl font-bold font-['DM Sans'] leading-loose">Pesan anda telah dikirim</p>
          <p className="text-gray-700 text-xl font-normal font-['DM Sans'] leading-normal">Terima kasih telah mengirimkan pesan Anda kepada kami. Kami akan segera memproses pesan yang anda kirimkan Anda dan akan segera menghubungi Anda melalui email atau nomor telepon yang Anda berikan.</p>
        <button
            className="w-full mt-4 px-4 py-2.5 bg-blue-600 rounded hover:bg-blue-700 text-white text-base font-medium font-['DM Sans'] leading-snug"
            onClick={onClose}
        >
            Kembali ke beranda
        </button>
        </div>
      </div>
    </div>
  );
};

export default AfterSubmit;
