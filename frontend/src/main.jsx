import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter , Routes, Route, useLocation} from "react-router-dom"

import Homepage from './home/Homepage.jsx';
import SignupPage from './auth/Signup.jsx';
import LoginPage from './auth/Login.jsx';
import AboutPage from './about/AboutPage.jsx';
import ProductsPage from './products/productsPage.jsx';
import PricingPage from './pricing/PricingPage.jsx';
import SupportPage from './support/SupportPage.jsx';
import NotFound from './NotFound.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'; 

import DashboardHome from "./dashboard/Home.jsx";


const AppLayout = () => {
  const location = useLocation();
  
  // Logic: If the path starts with "/dashboard", isDashboard is true
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      
      {!isDashboard && <Navbar />}

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/dashboard/*" element={<DashboardHome />} />
      </Routes>

      
      {!isDashboard && <Footer />}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
)

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <Navbar/>
//   <Routes>
//     <Route path='/' element={<Homepage/>}/>
//     <Route path='/signup' element={<SignupPage/>}/>
//     <Route path='/login' element={<LoginPage/>}/>
//     <Route path='/about' element={<AboutPage/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//     <Route path='/pricing' element={<PricingPage/>}/>
//     <Route path='/support' element={<SupportPage/>}/>
//     <Route path='*' element={<NotFound/>}/>
//     <Route path="/dashboard/*" element={<DashboardHome />} />
//   </Routes>
//   <Footer/>
//   </BrowserRouter>
// )
