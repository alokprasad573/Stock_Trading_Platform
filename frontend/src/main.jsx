import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import HomePage from './landing_page/pages/HomePage'
import AboutPage from './landing_page/pages/AboutPage'
import PricingPage from './landing_page/pages/PricingPage'
import ProductPage from './landing_page/pages/ProductPage.jsx'
import SignupPage from './landing_page/pages/SignupPage.jsx'
import SigninPage from './landing_page/pages/SigninPage.jsx'
import SupportPage from './landing_page/pages/SupportPage.jsx'
import NotFound from './landing_page/components/NotFound'
import Navbar from "./landing_page/components/Navbar.jsx";
import Footer from "./landing_page/components/Footer.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/signin" element={<SigninPage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/pricing" element={<PricingPage/>} />
                <Route path="/support" element={<SupportPage/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>
)
