import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '@fontsource/fira-code';

const style = {
    fontFamily: 'Fira Code',
}

function Header() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return(
        <header style={style}>
            <div className='myName' >
                <Link to= '/'>ted-langat {'<tl/>'}</Link>   
            </div>
            <nav className='desktopNav'>
                <ul>
                    <li>
                        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>_hello</Link>
                    </li>
                    <li>
                        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>_about-me</Link>
                    </li>
                    <li>
                        <Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>_projects</Link>
                    </li>
                </ul>
            </nav>
            <div className='contactMe'>
                <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>_contact-me</Link>
            </div>
            <div className='mobileMenuIcon' onClick={toggleSidebar}>
                {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            {sidebarOpen && (
                <div className='mobileSidebar'>
                        <div className='routeLink'>
                            <Link to='/' className={location.pathname === '/' ? 'active' : ''} onClick={toggleSidebar}>_hello</Link>
                        </div>
                        <div className='routeLink'>
                            <Link to='/about' className={location.pathname === '/about' ? 'active' : ''} onClick={toggleSidebar}>_about-me</Link>
                        </div>
                        <div className='routeLink'>
                            <Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''} onClick={toggleSidebar}>_projects</Link>
                        </div>
                        <div className='routeLink'>
                            <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''} onClick={toggleSidebar}>_contact-me</Link>
                        </div>
                </div>
            )}
        </header>
    )
}

export default Header;