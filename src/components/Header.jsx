import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Header.css';

import '@fontsource/fira-code';

const style = {
    fontFamily: 'Fira Code',
}

function Header() {
    const location = useLocation();
    console.log('Header component rendered');
    return(
        <header style={style}>
            <div className='myName' >
                <Link to= '/'>ted-langat</Link>   
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>_hello</Link>
                    </li>
                    <li>
                        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>_about</Link>
                    </li>
                    <li>
                        <Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>_projects</Link>
                    </li>
                </ul>
            </nav>
            <div className='contactMe'>
                <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>_contact-me</Link>
            </div>
                    
           
        </header>
    )
}

export default Header;