import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PortalPage from './pages/PortalPage';
import DetailPage from './pages/DetailPage';
import ComingSoon from './pages/ComingSoon';
// import AuthContextProvider from './context/AuthContext';

export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/login" element={<Login />}/> 
          <Route path="/portal" element={<PortalPage />}/> 
          <Route path="/detail" element={<DetailPage />}/> 
          <Route path="/soon" element={<ComingSoon />}/> 
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  )
}