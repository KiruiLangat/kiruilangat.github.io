import React, { Component } from 'react';
import '@fontsource/fira-code';
import './withSplashScreen.css'; 
import MockupVideo from '../assets/videos/MockupVideo.mp4';
import FeedbackVideo from '../assets/videos/FeedbackVideo.mp4';
import CodeVideo from '../assets/videos/CodeVideo.mp4';
import HouseDesigns from '../assets/images/HouseDesigns.PNG';
import FamilysForum from '../assets/images/familysForumSite.PNG';
import MockupVideoMobile from '../assets/videos/MockupVideoMobile.mp4';
import FeedbackVideoMobile from '../assets/videos/FeedbackVideoMobile.mp4';
import CodeVideoMobile from '../assets/videos/CodeVideoMobile.mp4';
import FamilysForumMobile from '../assets/images/familysForumSiteMobile.png';
import HouseDesignsMobile from '../assets/images/HouseDesignsMobile.png'


const style = {
    fontFamily: 'Fira Code',
}

function SplashMessage() {
    return(
        <div className="splash-container" style={style}>
            <h1 className="splash-text">Ted Langat<span className="splash-highlight">Portfolio</span></h1>
        </div>
    )
}

export default function withSplashScreen (WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                fadeOut: false, // Add fadeOut state
                assetsLoaded: false, // Change to assetsLoaded state
            }
        }

        async componentDidMount() {
            try {
                const isMobile = window.innerWidth <= 768;

                // Preload videos
                const mockupVideo = new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = isMobile ? MockupVideoMobile : MockupVideo;
                    video.preload = 'metadata'; // Preload only metadata
                    video.onloadedmetadata = () => resolve();
                });

                const feedbackVideo = new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = isMobile ? FeedbackVideoMobile : FeedbackVideo;
                    video.preload = 'metadata'; // Preload only metadata
                    video.onloadedmetadata = () => resolve();
                });

                const codeVideo = new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = isMobile ? CodeVideoMobile : CodeVideo;
                    video.preload = 'metadata'; // Preload only metadata
                    video.onloadedmetadata = () => resolve();
                });

                // Preload images
                const houseDesignsImage = new Promise((resolve) => {
                    const img = new Image();
                    img.src = isMobile ? HouseDesignsMobile : HouseDesigns;
                    img.loading = 'lazy';
                    img.onload = resolve;
                });

                const familysForumImage = new Promise((resolve) => {
                    const img = new Image();
                    img.src = isMobile ? FamilysForumMobile : FamilysForum;
                    img.loading = 'lazy';
                    img.onload = resolve;
                });

                await Promise.all([mockupVideo, feedbackVideo, codeVideo, houseDesignsImage, familysForumImage]);

                this.setState({
                    assetsLoaded: true,
                });

                setTimeout(() => {
                    this.setState({ fadeOut: true });
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            this.setState({ loading: false });
                        }, 500);
                    });
                }, 1100);
            } catch (err) {
                console.log(err)
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            //show loading
            if (this.state.loading) return <div className={`splash-container ${this.state.fadeOut ? 'fade-out' : ''}`} style={style}><SplashMessage /></div>;

            //otherwise, show the desired route
            return <WrappedComponent {...this.props} assetsLoaded={this.state.assetsLoaded} />;
        }
    };
}