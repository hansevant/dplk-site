import React from 'react';
import { FiAlertTriangle} from 'react-icons/fi';

const LogoutPopup = ({ isOpen, onClose, onConfirm }) => {
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
        <div className="bg-white rounded-lg shadow-lg p-8 w-[512px]">
        <div className='flex mr-4 justify-center items-center'>
            <div className='rounded-full bg-[#FEF0C7] p-2'>

            <FiAlertTriangle size={24} color='orange'/>
            </div>
          </div>
          <p className=" text-center text-gray-900 text-base font-medium my-6">Anda yakin ingin meninggalkan halaman ini?</p>
          <div className="flex justify-center gap-4">
            <button
              className="w-[170px] h-[42px] px-4 py-2.5 bg-gray-300 rounded hover:bg-gray-400 text-slate-700 text-base font-medium"
              onClick={onClose}
            >
              Batalkan
            </button>
            <button
              className="w-[170px] h-[42px] px-4 py-2.5 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
