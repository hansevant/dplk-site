import {FiDownload, FiFile} from "react-icons/fi";
import Eporto from '../assets/docs/Eporto.pdf'
import Ecard from '../assets/docs/Ecard.pdf'
import BuktiPotongPajak from '../assets/docs/BuktiPotongPajak.pdf'

export const CardDocument = ({Title}) => {

    return (
      <div className='mx-auto mb-5'>
        <div className="block w-full max-w-6xl p-4 border border-slate-300 rounded-lg">
          <h5 className="UserProfile w-[200px] mb-2 text-gray-900 text-lg font-bold leading-[25.20px]">{Title}</h5>
  
          <div className='bg-white w-[1100px] flex justify-between p-2'>
            <div className='flex items-center'>
              <div className='rounded-full bg-[#DEF3FF] p-2'>
                <FiFile size={16} style={{ color: '#2F62B7' }} />
              </div>
              <a href={Eporto} target="_blank" rel="noopener noreferrer">
                <p className='ml-5 text-gray-700 text-base font-medium leading-snug'>
                  Unduh E-Portofolio
                </p>
              </a>
            </div>
           <div className='flex mr-4 items-center'>
              <FiDownload size={24} />
            </div>
          </div>
          <div className='bg-white w-[1100px] flex justify-between p-2 mt-[0.75px]'>
            <div className='flex items-center'>
              <div className='rounded-full bg-[#DEF3FF] p-2'>
                <FiFile size={16} style={{ color: '#2F62B7' }} />
              </div>
              <a href={BuktiPotongPajak} target="_blank" rel="noopener noreferrer">
                <p className='ml-5 text-gray-700 text-base font-medium leading-snug'>
                  Unduh Bukti Potong Pajak
                </p>
              </a>
            </div>
           <div className='flex mr-4 items-center'>
              <FiDownload size={24} />
            </div>
          </div>
          <div className='bg-white w-[1100px] flex justify-between p-2 mt-[0.75px]'>
            <div className='flex items-center'>
              <div className='rounded-full bg-[#DEF3FF] p-2'>
                <FiFile size={16} style={{ color: '#2F62B7' }} />
              </div>
              <a href={Ecard} target="_blank" rel="noopener noreferrer">
                <p className='ml-5 text-gray-700 text-base font-medium leading-snug'>
                  Unduh E-Card
                </p>
              </a>
            </div>
            <div className='flex mr-4 items-center'>
              <FiDownload size={24} />
            </div>
          </div>
  
        </div>
      </div>
    );
  }