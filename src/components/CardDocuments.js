import {FiDownload, FiFile} from "react-icons/fi";

export const CardDocument = ({Title}) => {

    return (
      <div className='mx-auto mb-5'>
        <div className="block w-full max-w-6xl p-4 border border-slate-300 rounded-lg">
          <h5 className="UserProfile w-[200px] text-gray-900 text-lg font-bold leading-[25.20px]">{Title}</h5>
  
          <div className='bg-white w-[1100px] flex justify-between p-2'>
            <div className='flex items-center'>
              <div className='rounded-full bg-[#DEF3FF] p-2'>
                <FiFile size={16} style={{ color: '#2F62B7' }} />
              </div>
              <p className='ml-5 text-gray-700 text-base font-medium leading-snug'>
              Unduh E-Portofolio
              </p>
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
              <p className='ml-5 text-gray-700 text-base font-medium leading-snug'>
              Unduh Bukti Potong Pajak
              </p>
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
              <p className='ml-5 text-gray-700 text-base font-medium leading-snug'>
              Unduh E-Card
              </p>
            </div>
            <div className='flex mr-4 items-center'>
              <FiDownload size={24} />
            </div>
          </div>
  
        </div>
      </div>
    );
  }