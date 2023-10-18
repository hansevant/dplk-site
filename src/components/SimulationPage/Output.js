import React from 'react'
import sim from '../../assets/img/sim.png'

const Output = ({Clicks}) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
        <img src={sim} alt='s' style={{ width: '625px', height: 'auto' }} />
        <button className="bg-blue-500 mt-4 text-white rounded px-16 py-3 hover:bg-blue-600 transition" onClick={Clicks}>
            <p className="text-white text-xs font-medium font-['DM Sans']">Hitung Ulang</p>
        </button>
    </div>
  )
}

export default Output