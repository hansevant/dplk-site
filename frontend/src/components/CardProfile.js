export const CardProfile = ({Title, Data}) => {

    const originalDateTimeString = Data.createdAt;
    const originalDate = new Date(originalDateTimeString);

    // Extract day, month, and year components
    const day = originalDate.getDate().toString().padStart(2, '0');
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based, so add 1.
    const year = originalDate.getFullYear();
    
    // Create the "dd-mm-yyyy" formatted string
    const formattedDate = `${day}-${month}-${year}`;
    
    const data = [
      { id: 1, name: 'User ID', price: Data.id },
      { id: 2, name: 'Nama Lengkap', price: Data.fullname },
      { id: 3, name: 'Alamat', price: Data.address },
      { id: 4, name: 'Tanggal Registrasi', price: formattedDate },
      // Add more data as needed
    ];
  
    return (
      <div className='mx-auto mt-6'>
        <div className="block w-full max-w-6xl p-4 border border-slate-300 rounded-lg">
          <h5 className="UserProfile w-[200px] text-gray-900 text-lg font-bold leading-[25.20px]">{Title}</h5>
          <div className='bg-white w-[1100px]'>
            
          <table className="w-full border-collapse border-transparent">
          <tbody>
            {data.map(item => (
              <tr key={item.id} className='text-gray-700 text-sm font-medium leading-tight'>
                <td className="p-2 w-36">{item.name}</td>
                <td className="p-2 w-1">:</td>
                <td className="p-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
          </div>
        </div>
      </div>
    );
  }