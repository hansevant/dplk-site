import { Link } from "react-router-dom";

export const CardSaldo = ({Title, Data}) => {
    const ub = Data.userBalances;
    return (
      <div className='mx-auto'>
        <div className="block w-full max-w-6xl p-4 border border-slate-300 rounded-lg">
          <h5 className="UserProfile w-[200px] text-gray-900 text-lg font-bold leading-[25.20px]">{Title}</h5>
          <div className='bg-white w-[1100px]'>
            
  
          <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-500 text-center">
                  <thead className="text-xs text-white uppercase bg-[#001E55]">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                          No
                          </th>
                          <th scope="col" className="px-6 py-3">
                          Nomor CIF
                          </th>
                          <th scope="col" className="px-6 py-3">
                          Nama Peserta
                          </th>
                          <th scope="col" className="px-6 py-3">
                          Nomor Account
                          </th>
                          <th scope="col" className="px-6 py-3">
                          Saldo DPLK
                          </th>
                          <th scope="col" className="px-6 py-3">
                          Paket Investasi
                          </th>
                          <th scope="col" className="px-6 py-3">
                          Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {ub.map((balance,index) =>(
                      <tr key={balance.id} className="bg-white text-slate-500 text-base font-normal">
                          <td className="px-6 py-4">
                          {++index}
                          </td>
                          <td className="px-6 py-4">
                          {Data.id}
                          </td>
                          <td className="px-6 py-4">
                          {Data.fullname}
                          </td>
                          <td className="px-6 py-4">
                          {balance.va}
                          </td>
                          <td className="px-6 py-4">
                          {balance.balance}
                          </td>
                          <td className="px-6 py-4">
                          {balance.invPack}
                          </td>
                          <td className="px-6 py-4">
                            <Link to="/detail" className="Button w-20 h-9 flex-col justify-start items-start gap-2.5 inline-flex">
                              <div className="BaseButton h-9 px-6 py-3 bg-sky-800 justify-center items-center gap-1 inline-flex">
                                <div className="Label text-right text-white text-xs font-bold">Detail</div>
                              </div>
                            </Link>
                          </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
  
  
          </div>
        </div>
      </div>
    );
  }
  