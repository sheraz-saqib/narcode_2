import React, { useEffect } from 'react'
import HomePage from './componets/home/HomePage'
import Layout from './componets/Layout/Layout'
import {
    Route,
    BrowserRouter as Router,
    Routes,
  } from "react-router-dom";
import ScrollToTop from './componets/ScrollToTop';
import Lenis from 'lenis';
import About from './componets/About/About';
import Contact from './componets/Contact/Contact';
import Portfolio from './componets/Portfolio/Portfolio';
import ProductDetialPage from './componets/ProductDetialPage/ProductDetialPage';
import ProductDesignServices from './componets/ProductDesignServices/ProductDesignServices';
import Services from './componets/Services/Services';
import DetailPage from './componets/DetailPage/DetailPage';
import PrivacyPolicy from './componets/privacyPolicy/PrivacyPolicy';
import TermOfUse from './componets/TermsOfUse/TermOfUse';


const App = () => {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
  return (
<>
<Router>
    <ScrollToTop />
    <Routes>
        <Route element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/product-detials' element={<ProductDetialPage/>} />
        <Route path='/product-design-services' element={<ProductDesignServices/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/term-of-use' element={<TermOfUse/>} />
        {/* detail-page */}
        <Route path='/ui-ux' element={<DetailPage id={0}/>} />
        <Route path='/logo-design' element={<DetailPage id={1}/>} />
        <Route path='/custom-website' element={<DetailPage id={2}/>} />
        <Route path='/custom-application' element={<DetailPage id={3}/>} />
        <Route path='/cms' element={<DetailPage id={4}/>} />
        </Route>
    </Routes>
</Router>
</>
  )
}

export default App
