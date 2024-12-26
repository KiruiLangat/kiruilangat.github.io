import React, { useState } from 'react';
import './assets/styles/LandingPage.css';
import '@fontsource/fira-code';
import { Link } from 'react-router-dom';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WebIcon from '@mui/icons-material/Web';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const style = {
  fontFamily: 'Fira Code, monospace',
}

function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleWorkItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='landingPageContainer' style={style}>
      <div className='landingContainer'>
        <p>Hello. I'm <br/>
          <span className='bigName'>Ted Langat </span><br/>
          <span className='title'>{'>'} Full Stack Developer</span></p>
          <div className='commentary'>
            <p>{'//'} need convincing? <br/>
            <span className='const'>const</span> <span className='var' >nextStep = </span><Link to= '/projects' className='theLink'>view projects</Link></p>
            <p>{'//'} you can find my portfolio on gitHub <br/>
            <span className='const'>const</span> 
            <span className='var'> githubLink = </span>
            <a href="https://github.com/KiruiLangat" className='theLink'>"https://github.com/KiruiLangat"</a>
            </p>
          </div>
      </div>
      <div className='landingContent'>
        <h1 className='typing-effect'>First, let's identify your needs...</h1>
        <div className='work'>
          <div 
            className={`workItem ${activeIndex === 0 ? 'active' : ''}`} 
            onClick={() => handleWorkItemClick(0)}
          >
            <div className='workHeader'>
              <ShoppingCartCheckoutIcon className='workIcon' />
              <h2>E-commerce Platforms</h2>
              <ArrowDropDownIcon className='dropdown-arrow' />
            </div>
            <div className='workLine'>
              <p>An online store to sell your products or a custom design that's tailored to your brand.</p>
            </div>
          </div>
          <div 
            className={`workItem ${activeIndex === 1 ? 'active' : ''}`} 
            onClick={() => handleWorkItemClick(1)}
          >
            <div className='workHeader'>
              < WebIcon className='workIcon' />
              <h2>Static Websites</h2>
              <ArrowDropDownIcon className='dropdown-arrow' />
            </div>
            <div className='workLine'>
              <p>A simple, clean website to get your message across.</p>
            </div>
          </div>
          <div 
            className={`workItem ${activeIndex === 2 ? 'active' : ''}`} 
            onClick={() => handleWorkItemClick(2)}
          >
            <div className='workHeader'>
              < DynamicFeedIcon className='workIcon' />
              <h2>Dynamic Web Applications</h2>
              <ArrowDropDownIcon className='dropdown-arrow' />
            </div>
            <div className='workLine'>
              <p>Web applications with interactive features and are dynamic. More complex than Static Websites.</p>
            </div>
          </div>
          <div
            className={`workItem ${activeIndex === 3 ? 'active' : ''}`} 
            onClick={() => handleWorkItemClick(3)}
          >
            <div className='workHeader'>
              < DesignServicesIcon className='workIcon' />
              <h2>UX/UI Design</h2>
              <ArrowDropDownIcon className='dropdown-arrow' />
            </div>
            <div className='workLine'>
              <p>A website designs or mockups prior to development.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

