import React from 'react';
import './IntroStyle.css';
import { Button } from '../Button/Button';
import vid from '../../videos/video-1.mp4'

const Intro = () => {
    return (
        <div className="intro-container">
            <video src={vid} autoPlay loop muted />
            <h1>Adventure awaits Be ready</h1>
            <p>What are you wating?</p>
            <div className="intro-btn">
                <Button
                    className="btn"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Get Started
                </Button>

                <Button
                    className="btn"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    Watch Trailer <i className="far fa-play-circle" />
                </Button>

            </div>
        </div>
    )
}

export default Intro
