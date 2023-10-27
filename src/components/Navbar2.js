import React from 'react'
import LogoNav from '../assets/img/picwish.png'
import { Link, useNavigate } from 'react-router-dom'
import LogoutPopup from './LogoutPopup'
import { FiHome, FiLogOut, FiSettings } from 'react-icons/fi'

const Navbar2 = () => {

  const navigate = useNavigate()

    // const menu = ["Beranda", "Pengaturan", "Log-Out"]

    const [isLogoutOpen, setLogoutOpen] = React.useState(false);

  const openLogoutPopup = () => {
    setLogoutOpen(true);
  };

  const closeLogoutPopup = () => {
    setLogoutOpen(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, you can redirect to the login page or clear user session
    localStorage.removeItem("id");
    navigate('/login')
    // Then close the popup
    closeLogoutPopup();
  };

  return (
    <>
      <div className='container max-w-7xl mx-auto flex flex-row justify-between py-5 px-6 items-center'>
          <img alt='logo' src={LogoNav} className='w-36' />

          <div>
              <a href='##' className='text-lg text-blue-800 font-semibold rounded-md px-7 py-2'>
              Selamat Datang di Microsite DPLK BRI 👋
              </a>
          </div>
      </div>
      <div className='container border-y-[1.2px] border-[#D4DBEA] max-w-full mx-auto flex flex-row py-5 items-center'>
        <ul className='flex gap-5 ml-[72px] text-slate-700 font-medium px-7 '>
            <li>
              <Link to="/portal" className="flex items-center hover:text-slate-950">
                <FiHome size={16} className="mr-2" />
                Beranda
              </Link>  
            </li>
            <li>
              <Link to="/soon" className="flex items-center hover:text-slate-950">
                <FiSettings size={16} className="mr-2" />
                Pengaturan
              </Link>
            </li>
            <li><Link to="#" onClick={openLogoutPopup} className="flex items-center hover:text-slate-950">
            <FiLogOut size={16} className="mr-2" />Log-Out</Link></li>
        </ul>
      </div>
      <LogoutPopup isOpen={isLogoutOpen} onClose={closeLogoutPopup} onConfirm={handleLogout} />
    </>
  )
}

export default Navbar2