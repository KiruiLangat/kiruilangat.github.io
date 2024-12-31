import React from 'react';
import './assets/styles/LandingPage.css';
import '@fontsource/fira-code';
import { Link } from 'react-router-dom';
import StackIcon from 'tech-stack-icons';
import Cpanel from './assets/images/cPanel.svg';
import WooCommerce from './assets/images/WooCommerce.svg';



const style = {
  fontFamily: 'Fira Code, monospace',
}

function LandingPage() {
 

  return (
    <div className='landingPageContainer' style={style}>
      <div className='landingContainer'>
        <p>Hello. I'm <br/>
          <span className='bigName'>Ted Langat </span><br/>
          <span className='title'>{'>'} Full Stack Developer</span></p>
          <div className='commentary'>
            <p>{'//'} need convincing? <br/>
              <span className='const'>const</span> <span className='var' >nextStep = </span>
              <Link to= '/projects' className='theLink'>
                view projects
              </Link>
            </p>
            <p>{'//'} you can find my portfolio on gitHub <br/>
            <span className='const'>const</span> 
            <span className='var'> githubLink = </span>
            <a href="https://github.com/KiruiLangat" className='theLink'>"https://github.com/KiruiLangat"</a>
            </p>
          </div>
      </div>
      <div className='landingContent'>
        <div className='techStack'>
          <StackIcon name="reactjs" className='techIcon' data-name="ReactJS" />
          <StackIcon name="nextjs2" className='techIcon' data-name="Next.js" />
          <StackIcon name="dart" className='techIcon' data-name="Dart" />
          <StackIcon name="flutter" className='techIcon' data-name="Flutter" />
          <StackIcon name="figma" className='techIcon' data-name="Figma" />
          <StackIcon name="github" className='techIcon' data-name="GitHub" />
          <StackIcon name="materialui" className='techIcon' data-name="Material UI" />
          <StackIcon name="reactrouter" className='techIcon' data-name="React Router" />
          <StackIcon name="kubernetes" className='techIcon' data-name="Kubernetes" />
        </div>
        <div className='moreStacks'>
          <StackIcon name="nodejs" className='techIcon' data-name="Node.js" />
          <StackIcon name="wordpress" className='techIcon' data-name="WordPress" />
          <StackIcon name="firebase" className='techIcon' data-name="Firebase" />
          <StackIcon name="mysql" className='techIcon' data-name="MySQL" />
          <StackIcon name="mongodb" className='techIcon' data-name="MongoDB" />
          <StackIcon name="postgresql" className='techIcon' data-name="PostgreSQL" />
          <StackIcon name="netlify" className='techIcon' data-name="Netlify" />
          <StackIcon name="netlify2" className='techIcon' data-name="Netlify" />
          <StackIcon name="postman" className='techIcon' data-name="Postman" />
        </div>
        <div className='moreStacks2'>
          <StackIcon name="html5" className='techIcon' data-name="HTML5" />
          <StackIcon name="css3" className='techIcon' data-name="CSS3" />
          <StackIcon name="js" className='techIcon' data-name="JavaScript" />
          <StackIcon name="python" className='techIcon' data-name="Python" />
          <StackIcon name="c++" className='techIcon' data-name="C++" />
          <StackIcon name="kotlin" className='techIcon' data-name="Kotlin" />
          <img src={Cpanel} className='cpanel' alt="cPanel" data-name="cPanel" />
          <img src={WooCommerce} className='woocommerce' alt="WooCommerce" data-name="WooCommerce" />
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

