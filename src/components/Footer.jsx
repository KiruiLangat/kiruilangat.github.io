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
          Let's Connect:
          <div className='socials'>
            <a href='https://x.com/LangatTed' target='_blank' rel='noreferrer'>
              <XIcon />
            </a>
            <a href='https://www.linkedin.com/in/ted-langat-a22291121/' target='_blank' rel='noreferrer'>
              <LinkedInIcon />
            </a>
          </div>
      </div>
      <div className='gitHub'>
          @KiruiLangat:
          <a href='https://github.com/KiruiLangat' target='_blank' rel='noreferrer'>
            <GitHubIcon />
          </a>
      </div>
    </footer>
  );
}

export default Footer;
