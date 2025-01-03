import React, { Component } from 'react';
import '@fontsource/fira-code';
import './withSplashScreen.css'; 
import MockupVideo from '../assets/videos/MockupVideo.mp4';
import FeedbackVideo from '../assets/videos/FeedbackVideo.mp4';
import CodeVideo from '../assets/videos/CodeVideo.mp4';

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
                videosLoaded: false, // Add videosLoaded state
            }
        }

        async componentDidMount() {
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

                await Promise.all([mockupVideo, feedbackVideo, codeVideo]);

                this.setState({
                    videosLoaded: true,
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
                }, 1500);
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
            return <WrappedComponent {...this.props} videosLoaded={this.state.videosLoaded} />;
        }
    };
}