import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Services from './Pages/Services';
import NewProps from './Pages/NewProps';
import Reviews from './Pages/Reviews';
import Footer from './Pages/Footer';
import Find from './Pages/Find';
import Build from './Pages/Build';
import Purchase from './Pages/Purchase';
import About_us from './Pages/About_Us';
import TermsAndConditions from './Pages/TermsAndCondition';
import ContactUs from './Pages/ContactUs';
import PropertyDetails from "./Pages/PropertyDetails";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <NewProps />
            <Reviews />
            <Footer />
          </>
        } />
        <Route path="/search" element={<Find />} />
        <Route path="/build" element={<Build />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/terms&condition" element={<TermsAndConditions />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
