import React from 'react'

const Input = ({Clicks}) => {
    
  const [setoranAwal, setSetoranAwal] = React.useState(0); // Initial range value
  const [iuranTahun, setIuranTahun] = React.useState(0); // Initial range value
  const [iuranBulan, setIuranBulan] = React.useState(0); // Initial range value
  const [usia, setUsia] = React.useState(0); // Initial range value
  const [usiaPensiun, setUsiaPensiun] = React.useState(0); // Initial range value
  const [selectedOption, setSelectedOption] = React.useState("Pasar Syariah"); // Initial selected option
  
    const handleSetoranAwal = (e) => {
      setSetoranAwal(e.target.value);
    };
  
    const handleIuranTahun = (e) => {
      setIuranTahun(e.target.value);
    };
  
    const handleIuranBulan = (e) => {
      setIuranBulan(e.target.value);
    };
  
    const handleUsia = (e) => {
      setUsia(e.target.value);
    };
  
    const handleUsiaPensiun = (e) => {
      setUsiaPensiun(e.target.value);
    };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
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
                    value={setoranAwal}
                    onChange={handleSetoranAwal}
                    className="w-full border border-gray-300 p-2 rounded-r"
                />
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={setoranAwal}
                    onChange={handleSetoranAwal}
                    className="range-input w-full bg-gray-300 appearance-none h-2 rounded mb-2"
                />
            </div>
            
            <div className="w-full max-w-md mx-auto">
            <p className="my-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Usia anda saat ini</p>
                <div className="flex mb-[-15px]">
                <input
                    type="number"
                    value={usia}
                    onChange={handleUsia}
                    className="w-full border border-gray-300 p-2 rounded-l"
                />
                <div className="bg-gray-300 p-2 rounded-r">Tahun</div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={usia}
                    onChange={handleUsia}
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
                    value={iuranTahun}
                    onChange={handleIuranTahun}
                    className="w-full border border-gray-300 p-2 rounded-l"
                />
                <div className="bg-gray-300 p-2 rounded-r">%</div>
                </div>
                <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={iuranTahun}
                onChange={handleIuranTahun}
                className="range-input w-full bg-gray-300 appearance-none h-2 rounded mb-2"
                />
            </div>

            <div className="w-full max-w-md mx-auto">
                <p className="my-2 text-slate-800 text-lg font-medium font-['DM Sans'] leading-tight">Usia Pensiun</p>
                <div className="flex mb-[-15px]">
                <input
                    type="number"
                    value={usiaPensiun}
                    onChange={handleUsiaPensiun}
                    className="w-full border border-gray-300 p-2 rounded-l"
                />
                <div className="bg-gray-300 p-2 rounded-r">Tahun</div>
                </div>
                <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={usiaPensiun}
                onChange={handleUsiaPensiun}
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
            value={iuranBulan}
            onChange={handleIuranBulan}
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
            
        <button className="bg-amber-500  mt-2 text-white rounded px-16 py-3 hover:bg-amber-600 transition" onClick={Clicks}>
            <p className="text-white text-xs font-medium font-['DM Sans']">Hitung</p>
        </button>

    </div>
  )
}

export default Input