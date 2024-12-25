import React from 'react';
import '../assets/styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '@fontsource/fira-code';

const style = {
    fontFamily: 'Fira Code',
}

function Footer() {
  
  return (
    <footer style={style}>
      <div className='letsConnect'>
          _lets-connect:
          <div className='socials'>
            <a href='https://x.com/LangatTed' target='_blank' rel='noreferrer'>
              <XIcon  className='XIcon'/>
            </a>
            <a href='https://www.linkedin.com/in/ted-langat-a22291121/' target='_blank' rel='noreferrer'>
              <LinkedInIcon className='linkedInIcon' />
            </a>
          </div>
      </div>
      <div className='middleFooter'>
          
      </div>
      <div className='gitHub'>
          @KiruiLangat
          <a href='https://github.com/KiruiLangat' target='_blank' rel='noreferrer'>
            <GitHubIcon className='gitIcon'/>
          </a>
      </div>

      <div className='mobileFooter'>
        <p>_lets-connect</p>
        <div className='mobileSocials'>
          <a href='https://x.com/LangatTed' target='_blank' rel='noreferrer'>
            <XIcon  className='XIcon'/>
          </a>
          <a href='https://www.linkedin.com/in/ted-langat-a22291121/' target='_blank' rel='noreferrer'>
            <LinkedInIcon className='linkedInIcon' />
          </a>
          <a href='https://github.com/KiruiLangat' target='_blank' rel='noreferrer'>
            <GitHubIcon className='gitIcon'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
