import React, { Component } from 'react';
import '@fontsource/fira-code';
import './withSplashScreen.css'; 

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
            }
        }

        async componentDidMount() {
            try{
                //await requests/api requests

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
            return <WrappedComponent {...this.props} />;
        }
    };
}