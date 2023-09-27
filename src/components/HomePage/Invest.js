import React from 'react'

const Invest = () => {

    const invest = [
        {id: 1, name:"DPLK BRI PSU", r3: 0.44 , r1: 4.03},
        {id: 2, name:"DPLK BRI PENDAPATAN TETAP", r3: 0.47, r1: 6.89},
        {id: 3, name:"DPLK BRI SAHAM", r3: 5, r1: 14.3},
        {id: 4, name:"DPLK BRI PSU SYARIAH", r3: 3.69, r1: 5.67},
        {id: 5, name:"DPLK BRI BERIMBANG SYARIAH", r3: 0.23, r1: 5.67},
      ]

    return (
        <div className="container my-12 mx-auto md:px-6">
            <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">Paket Investasi</h5>
            <h2 className="text-center mb-6 text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">NAV Harian (Rupiah)</h2>
            <div className="container mx-auto px-4 py-8 bg-white border rounded-lg">
                <p className="text-slate-800 text-lg mb-4 font-medium font-['DM Sans'] leading-tight">Paket Investasi</p>
                <div className="w-full mx-auto">
                    <table className="min-w-full bg-white">
                    <thead>
                        <tr className="border-y">
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                            Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                            NAV/Unit
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                            Return 1 Hari Terakhir
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                        Return 30 Hari Terakhir
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                            Return 1 Tahun Terakhir
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-700 text-sm font-medium font-['DM Sans']">
                            Return 3 Tahun Terakhir
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {invest.map((inv) => (
                        <tr key={inv.id} className="border-t border-gray-200 text-gray-700 text-sm font-normal font-['DM Sans'] leading-tight">
                            <td className="px-6 py-4 whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                            {inv.name}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                            99
                            </td>
                            <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                            0.01
                            </td>
                            <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                            {inv.r3}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                            {inv.r1}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-no-wrap text-gray-500 text-sm font-normal font-['DM Sans'] leading-tight">
                            14.18
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Invest