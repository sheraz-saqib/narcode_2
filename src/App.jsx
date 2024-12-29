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
        <Route path='/custom-website' element={<DetailPage/>} />
        </Route>
    </Routes>
</Router>
</>
  )
}

export default App
