import React, { useState } from 'react';
import './assets/styles/Services.css';
import RouteIcon from '@mui/icons-material/Route';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import WebIcon from '@mui/icons-material/Web';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import ApiIcon from '@mui/icons-material/Api';
import HubIcon from '@mui/icons-material/Hub';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ThreePIcon from '@mui/icons-material/ThreeP';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

import Roadmap from './components/Roadmap';

import '@fontsource/fira-code';

const style = {
  fontFamily: 'Fira Code, monospace',
}

function Services() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set initial state to false

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='serviceContainer' style={style}>
        <div className={`serviceDashboard ${isSidebarOpen ? 'open' : 'closed'}`}>
            <h1>Services</h1>
            <div className='serviceType'>
              <div className='serviceItem'>
                <ShoppingCartCheckoutIcon className='serviceIcon' />
                <h2>E-commerce Platforms</h2>
              </div>
              <div className='serviceItem'>
                < WebIcon className='serviceIcon' />
                <h2>Static Websites</h2>
              </div>
              <div className='serviceItem'>
                <DynamicFeedIcon className='serviceIcon' />
                <h2>Dynamic Web Applications</h2>
              </div>
              <div className='serviceItem'>
                <DesignServicesIcon className='serviceIcon' />
                <h2>UX/UI Design</h2>
              </div>
              <div className='serviceItem'>
                <AppShortcutIcon className='serviceIcon' />
                <h2>Mobile Applications</h2>
              </div>
              <div className='serviceItem'>
                < ApiIcon className='serviceIcon' />
                <h2>APIs & Integration</h2>
              </div>
              <div className='serviceItem'>
                <HubIcon className='serviceIcon' />
                <h2>SaaS (Software as a Service)</h2>
              </div>
              <div className='serviceItem'>
                <PostAddIcon className='serviceIcon' />
                <h2>CMS (Content Management Systems)</h2>
              </div>
              <div className='serviceItem'>
                <ThreePIcon className='serviceIcon' />
                <h2>Personal Blogs</h2>
              </div>
            </div>
            <button className='toggleButton' onClick={toggleSidebar}>
              {isSidebarOpen ? <DoNotDisturbOnIcon /> : <SpaceDashboardIcon/>  }
            </button>
        </div>
        <div className='serviceContent'>
          <div className='serviceHeader'>
            <div className='serviceHeaderContent'>
              <RouteIcon className='serviceContentIcon' />
              <h2>RoadMap</h2>
            </div> 
            <p>How I take your idea from concept to reality</p>
          </div>
          <div className='serviceDetails'>
            <Roadmap />
          </div>
        </div>
    </div>
  );
}

export default Services;
