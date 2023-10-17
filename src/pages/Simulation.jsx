import React from 'react'
import Navbar from '../components/Navbar'
import Mobile from '../assets/img/Mobile.png'
import '../assets/css/Simulation.css'

const Simulation = () => {
  const [rangeValue, setRangeValue] = React.useState(0); // Initial range value

  const [selectedOption, setSelectedOption] = React.useState("Pasar Syariah"); // Initial selected option

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <div>
    <Navbar />
    <div className="max-w-screen-lg px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:flex justify-between">

        <div className="lg:col-span-5">
          <h1 className="text-sky-800 text-sm ml-8 font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">Simulasi</h1>
          <p className="text-gray-700 text-4xl my-3 font-bold font-['DM Sans'] leading-10">Tertarik melakukan investasi? <br/> coba hitung simulasi DPLK</p>
          
          {/* Kalkulator */}
          <div className="bg-white border rounded-lg shadow-md p-4">
            <div className='flex gap-6'>
              {/* Left Column */}
              <div className="w-1/2">
              
                <div className="w-full max-w-md mx-auto">
                <p className="mb-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Setoran awal</p>
                  <div className="flex mb-[-15px]">
                    <div className="bg-gray-300 p-2 rounded-l">Rp.</div>
                    <input
                      type="number"
                      value={rangeValue}
                      onChange={handleRangeChange}
                      className="w-full border border-gray-300 p-2 rounded-r"
                    />
                  </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={rangeValue}
                      onChange={handleRangeChange}
                      className="range-input w-full bg-gray-300 appearance-none h-2 rounded mb-2"
                    />
                </div>
              
                <div className="w-full max-w-md mx-auto">
                <p className="my-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Usia anda saat ini</p>
                  <div className="flex mb-[-15px]">
                    <input
                      type="number"
                      value={rangeValue}
                      onChange={handleRangeChange}
                      className="w-full border border-gray-300 p-2 rounded-l"
                    />
                    <div className="bg-gray-300 p-2 rounded-r">Tahun</div>
                  </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={rangeValue}
                      onChange={handleRangeChange}
                      className="range-input w-full bg-gray-300 appearance-none h-2 rounded mb-2"
                    />
                </div>
                
              </div>

              {/* Right Column */}
              <div className="w-1/2">

                <div className="w-full max-w-md mx-auto">
                  <p className="mb-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Kenaikan iuran per tahun</p>
                  <div className="flex mb-[-15px]">
                    <input
                      type="number"
                      value={rangeValue}
                      onChange={handleRangeChange}
                      className="w-full border border-gray-300 p-2 rounded-l"
                    />
                    <div className="bg-gray-300 p-2 rounded-r">%</div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    className="range-input w-full bg-gray-300 appearance-none h-2 rounded mb-2"
                    />
                </div>

                <div className="w-full max-w-md mx-auto">
                  <p className="my-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Usia Pensiun</p>
                  <div className="flex mb-[-15px]">
                    <input
                      type="number"
                      value={rangeValue}
                      onChange={handleRangeChange}
                      className="w-full border border-gray-300 p-2 rounded-l"
                    />
                    <div className="bg-gray-300 p-2 rounded-r">Tahun</div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    className="range-input w-full bg-gray-300 appearance-none h-2 rounded mb-2"
                    />
                </div>

              </div>
            </div>
            
            <p className="my-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Iuran per bulan</p>
            <div className="flex">
              <div className="bg-gray-300 p-2 rounded-l text-gray-700 text-sm font-normal font-['DM Sans'] leading-relaxed">IDR</div>
              <input
                type="number"
                value={rangeValue}
                onChange={handleRangeChange}
                className="w-full border border-gray-300 p-2"
              />
              <div className="bg-gray-300 p-2 rounded-r text-gray-700 text-sm font-normal font-['DM Sans'] leading-relaxed">/bulan</div>
            </div>
            
            <p className="my-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Pilihan Investasi</p>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full border border-gray-300 p-2 rounded mb-2"
            >
              <option value="Pasar Syariah">Pasar Syariah</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
              
            <button className="bg-amber-500  mt-2 text-white rounded px-16 py-3 hover:bg-amber-600 transition">
        <p className="text-white text-xs font-medium font-['DM Sans']">
          Hitung
          </p>
      </button>

          </div>

        </div>

        <div className="hidden lg:block ml-6">
            <img src={Mobile} alt="mockup" style={{ width: '325px', height: 'auto' }} />
        </div>

        </div>
    </div>
  )
}

export default Simulation