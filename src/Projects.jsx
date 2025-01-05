import React, { useEffect } from 'react';
import './assets/styles/Projects.css';
import '@fontsource/fira-code';
import HouseDesigns from './assets/images/HouseDesigns.PNG';
import FamilysForum from './assets/images/familysForumSite.PNG'
import StackIcon from 'tech-stack-icons';
import cPanel from './assets/images/cPanel.svg';
import WooCommerce from './assets/images/WooCommerce.svg';

const style = {
    fontFamily: 'Fira Code'
};

function Projects() {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.projectCard');
    projectCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.style.opacity = 1;
    });
  }, []);

  return (
    <div className='projectsContainer' style={style}>
      <div className='projects'>
        <div className='projectCard'>
          <div className='projectDetails'>
            <div className='projectImg'>
              <img src={HouseDesigns} alt='House Designs Ke' />
            </div>
            <div className='projectInfo'>
              <div className='projectTitle'>
                <h2>House Designs Ke <a href="https://housedesigns.co.ke">Visit</a><br/><span className='titleHighlight'>Architecture Company</span></h2>
                
              </div>
              <p>Dynamic Website/ Headless CMS & Commerce</p>
              <h3>UX/UI + FULL STACK DEVELOPMENT</h3>
              <div className='projectStack'>
                <StackIcon name='figma' className='projectIcon' />
                <StackIcon name='reactjs' className='projectIcon'/>
                <StackIcon name='nextjs2' className='projectIcon'/>
                <StackIcon name='nodejs' className='projectIcon' />
                <StackIcon name='wordpress' className='projectIcon'/>
                <img src={cPanel} alt='cPanel' className='cPanel'/>
                <img src={WooCommerce} alt='WooCommerce' className='wooCommerce' />
              </div>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectDetails'>
            <div className='projectImg'>
              <img src={FamilysForum} alt='Project 2' />
            </div>
            <div className='projectInfo'>
              <div className='projectTitle'>
                <h2>Familys Forum <a href="https://familysforum.com">Visit</a> <br/><span className='titleHighlight'>Counselling Consultancy</span></h2>
              </div>
              <p>Website/ Headless CMS</p>
              <h3>UX/UI + FULL STACK DEVELOPMENT</h3>
              <div className='projectStack'>
                <StackIcon name='figma' className='projectIcon' />
                <StackIcon name='reactjs' className='projectIcon'/>
                <StackIcon name='nextjs2' className='projectIcon'/>
                <StackIcon name='nodejs' className='projectIcon' />
                <StackIcon name='wordpress' className='projectIcon'/>
                <img src={cPanel} alt='cPanel' className='cPanel'/>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='projectCard'>
          <div className='projectDetails'>
            <div className='projectImg'>
              <img src={Project3Image} alt='Project 3' />
            </div>
            <div className='projectInfo'>
              <div className='projectTitle'>
                <h2>Project 3 <br/><span className='titleHighlight'>Subtitle 3</span></h2>
              </div>
              <p>Description 3</p>
              <h3>FULL STACK DEVELOPMENT</h3>
              <div className='projectStack'>
                <StackIcon name='figma' className='projectIcon' />
                <StackIcon name='reactjs' className='projectIcon'/>
                <StackIcon name='nextjs2' className='projectIcon'/>
                <StackIcon name='nodejs' className='projectIcon' />
                <StackIcon name='wordpress' className='projectIcon'/>
                <img src={cPanel} alt='cPanel' className='cPanel'/>
                <img src={WooCommerce} alt='WooCommerce' className='wooCommerce' />
              </div>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectDetails'>
            <div className='projectImg'>
              <img src={Project4Image} alt='Project 4' />
            </div>
            <div className='projectInfo'>
              <div className='projectTitle'>
                <h2>Project 4 <br/><span className='titleHighlight'>Subtitle 4</span></h2>
              </div>
              <p>Description 4</p>
              <h3>FULL STACK DEVELOPMENT</h3>
              <div className='projectStack'>
                <StackIcon name='figma' className='projectIcon' />
                <StackIcon name='reactjs' className='projectIcon'/>
                <StackIcon name='nextjs2' className='projectIcon'/>
                <StackIcon name='nodejs' className='projectIcon' />
                <StackIcon name='wordpress' className='projectIcon'/>
                <img src={cPanel} alt='cPanel' className='cPanel'/>
                <img src={WooCommerce} alt='WooCommerce' className='wooCommerce' />
              </div>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectDetails'>
            <div className='projectImg'>
              <img src={Project5Image} alt='Project 5' />
            </div>
            <div className='projectInfo'>
              <div className='projectTitle'>
                <h2>Project 5 <br/><span className='titleHighlight'>Subtitle 5</span></h2>
              </div>
              <p>Description 5</p>
              <h3>FULL STACK DEVELOPMENT</h3>
              <div className='projectStack'>
                <StackIcon name='figma' className='projectIcon' />
                <StackIcon name='reactjs' className='projectIcon'/>
                <StackIcon name='nextjs2' className='projectIcon'/>
                <StackIcon name='nodejs' className='projectIcon' />
                <StackIcon name='wordpress' className='projectIcon'/>
                <img src={cPanel} alt='cPanel' className='cPanel'/>
                <img src={WooCommerce} alt='WooCommerce' className='wooCommerce' />
              </div>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectDetails'>
            <div className='projectImg'>
              <img src={Project6Image} alt='Project 6' />
            </div>
            <div className='projectInfo'>
              <div className='projectTitle'>
                <h2>Project 6 <br/><span className='titleHighlight'>Subtitle 6</span></h2>
              </div>
              <p>Description 6</p>
              <h3>FULL STACK DEVELOPMENT</h3>
              <div className='projectStack'>
                <StackIcon name='figma' className='projectIcon' />
                <StackIcon name='reactjs' className='projectIcon'/>
                <StackIcon name='nextjs2' className='projectIcon'/>
                <StackIcon name='nodejs' className='projectIcon' />
                <StackIcon name='wordpress' className='projectIcon'/>
                <img src={cPanel} alt='cPanel' className='cPanel'/>
                <img src={WooCommerce} alt='WooCommerce' className='wooCommerce' />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
