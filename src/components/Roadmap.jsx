import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Roadmap.css';
import '@fontsource/fira-code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MockupVideo from '../assets/videos/MockupVideo.mp4';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FeedbackVideo from '../assets/videos/FeedbackVideo.mp4';
import CodeIcon from '@mui/icons-material/Code';
import CodeVideo from '../assets/videos/CodeVideo.mp4';
import BugReportIcon from '@mui/icons-material/BugReport';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import EngineeringIcon from '@mui/icons-material/Engineering';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';

const style = {
  fontFamily: 'Fira Code',
}

const Roadmap = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.roadmapContainer > div');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.style.opacity = 1;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the animation on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return( 
    <div className='roadmapContainer' style={style}>

      <div className='mockupDesign'>
        <div className='mockupVideo'>
          <video src={MockupVideo} preload='metadata' autoPlay loop muted  />
        </div> 
        <div className='mockupText'>
          <h1>I <br/>Design<br/>
            <DesignServicesIcon className='roadmapIcon'/><br/>
          </h1>
          <div className='Headline'>Bringing your Vision to Life</div>
        </div> 
      </div>

      <div className='clientFeedback'>
        <div className='feedbackText'>
          <h1>Your Opinion<br/>
            <FeedbackIcon className='roadmapIcon'/><br/>
          </h1>
          <div className='Headline'>Combining Ideas to your Vision</div>
        </div>
        <div className='feedbackVideo'>
          <video src={FeedbackVideo} preload='metadata' autoPlay loop muted />
        </div>
      </div>

      <div className='development'>
        <div className='developmentText'>
          <h1>My <br/>Magic <br/>
            <CodeIcon className='roadmapIcon'/><br/>
          </h1>
          <div className='Headline'>Turning your Vision into Reality</div>
        </div>
        <div className='developmentVideo'>
          <video src={CodeVideo} preload='metadata' autoPlay loop muted />
        </div>
      </div>
      <div className='finally'>
        <h1>Bringing Your Vision to Life</h1>
      </div>

      <div className='finalLap'>
        <div className='testing'>
          <div className='testingText'>
            <h1>Bug <br/>Control<br/>
              <BugReportIcon className='roadmapIcon'/><br/>
            </h1>
            <div className='Headline'>Troubleshooting & Testing</div>
          </div>
        </div>
        <div className='deployment'>
          <div className='deploymentText'>
            <h1>Online <br/>Deployment<br/>
              <CloudDoneIcon className='roadmapIcon'/><br/>
            </h1>
            <div className='Headline'>Making your Vision Accessible</div>
          </div>
        </div>
        <div className='maintenance'>
          <div className='maintenanceText'>
            <h1>Tech <br/>Support<br/>
              <EngineeringIcon className='roadmapIcon'/><br/>
            </h1>
            <div className='Headline'>Keeping your Vision Alive</div>
          </div>
        </div>
      </div>
      <div className='callToAction'>
        <h1>Got an Inquiry?<br/>
          <span className='ctaHeadline'>Feel free to reach out for collaborations or inquiries</span>
        </h1>

        <Link to='/contact'>
          <button className='contactButton'>
              <VoiceChatIcon className='ctaIcon'/>
              Let's Chat
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Roadmap;