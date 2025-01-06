import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import WithSplashScreen from './components/withSplashScreen';
import Header from './components/Header';
import LandingPage from './LandingPage';
import Services from './Services';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const hideFooterRoutes = ['/services', '/contact', '/projects']; // Hiding footer only on the services page

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default WithSplashScreen(App);