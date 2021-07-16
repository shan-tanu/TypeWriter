import React from 'react';
import './Landing.css';
import typewriter from '../../assets/hero.png';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-left" data-aos="fade-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Quick?', 'Accurate?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img
                    data-aos="fade-right"
                    src={typewriter}
                    alt="TypeWriter Logo"
                    className="typewriter-image"
                />
            </div>
        </div>
    );
};

export default Landing;
