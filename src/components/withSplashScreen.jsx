import React, { Component } from 'react';
import '@fontsource/fira-code';
import './withSplashScreen.css'; 
import MockupVideo from '../assets/videos/MockupVideo.mp4';
import FeedbackVideo from '../assets/videos/FeedbackVideo.mp4';
import CodeVideo from '../assets/videos/CodeVideo.mp4';
import HouseDesigns from '../assets/images/HouseDesigns.PNG';
import FamilysForum from '../assets/images/familysForumSite.PNG';

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
            this.handleResize = this.handleResize.bind(this); // Bind handleResize
        }

        async componentDidMount() {
            window.addEventListener('resize', this.handleResize); // Add resize event listener
            try{
                // Preload videos
                const mockupVideo = new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = MockupVideo;
                    video.oncanplaythrough = resolve;
                });

                const feedbackVideo = new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = FeedbackVideo;
                    video.oncanplaythrough = resolve;
                });

                const codeVideo = new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = CodeVideo;
                    video.oncanplaythrough = resolve;
                });

                // Preload images
                const houseDesignsImage = new Promise((resolve) => {
                    const img = new Image();
                    img.src = HouseDesigns;
                    img.onload = resolve;
                });

                const familysForumImage = new Promise((resolve) => {
                    const img = new Image();
                    img.src = FamilysForum;
                    img.onload = resolve;
                });

                await Promise.all([mockupVideo, feedbackVideo, codeVideo, houseDesignsImage, familysForumImage]);

                this.setState({
                    assetsLoaded: true,
                });

                setTimeout(() => {
                    this.setState({
                        fadeOut: true, // Trigger fade out
                    });
                    setTimeout(() => {
                        this.setState({
                            loading: false,
                        });
                    }, 500); // Duration of fade out animation
                }, 1100);
            } catch (err) {
                console.log(err)
                this.setState({
                    loading: false,
                });
            }
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize); // Remove resize event listener
        }

        handleResize() {
            // Handle resize logic if needed
        }

        render() {
            //show loading
            if (this.state.loading) return <div className={`splash-container ${this.state.fadeOut ? 'fade-out' : ''}`} style={style}><SplashMessage /></div>;

            //otherwise, show the desired route
            return <WrappedComponent {...this.props} assetsLoaded={this.state.assetsLoaded} />;
        }
    };
}