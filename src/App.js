import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import PortalPage from './pages/Auth/PortalPage';
import DetailPage from './pages/Auth/DetailPage';
import ComingSoon from './pages/ComingSoon';
import About from "./pages/About";
import Simulation from "./pages/Simulation";
import Faq from "./pages/Faq";
// import AuthContextProvider from './context/AuthContext';

export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/about" element={<About />}/> 
          <Route path="/simulation" element={<Simulation />}/> 
          <Route path="/faq" element={<Faq />}/> 
          <Route path="/login" element={<Login />}/> 
          <Route path="/portal" element={<PortalPage />}/> 
          <Route path="/detail" element={<DetailPage />}/> 
          <Route path="*" element={<ComingSoon />}/> 
        </Routes>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  )
}