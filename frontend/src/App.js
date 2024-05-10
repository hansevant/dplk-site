import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import PortalPage from './pages/Auth/PortalPage.js';
import DetailPage from './pages/Auth/DetailPage.js';
import ComingSoon from './pages/ComingSoon.js';
import About from "./pages/About.js";
import Simulation from "./pages/Simulation.js";
import Faq from "./pages/Faq.js";
import Contact from "./pages/Contact.js";
import Information from "./pages/Information.js";
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
          <Route path="/information" element={<Information />}/> 
          <Route path="/contact" element={<Contact />}/> 
          <Route path="/login" element={<Login />}/> 
          <Route path="/portal" element={<PortalPage />}/> 
          <Route path="/detail" element={<DetailPage />}/> 
          <Route path="*" element={<ComingSoon />}/> 
        </Routes>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  )
}