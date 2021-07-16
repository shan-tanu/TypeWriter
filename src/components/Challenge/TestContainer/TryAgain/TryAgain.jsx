import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm, startAgain }) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters</b>: {characters}
                </p>
                <p>
                    <b>Words</b>: {words}
                </p>
                <p>
                    <b>WPM</b>: {wpm}
                </p>
            </div>

            <div className="social-media">
                <button className="retry-btn" onClick={startAgain}>
                    Retry
                </button>
                <button
                    className="share-btn"
                    onClick={() => {
                        window.open(
                            'https://facebook.com/sharer/sharer.php?u=shan-tanu.github.io/portfolio/#/',
                            'facebook-share-dialog',
                            'width=800,height=600'
                        );
                    }}
                >
                    Share
                </button>
                <button
                    className="tweet-btn"
                    onClick={() => {
                        window.open(
                            'https://twitter.com/intent/tweet?text=shan-tanu.github.io/portfolio/#/',
                            'Twitter',
                            'width=800,height=600'
                        );
                    }}
                >
                    Tweet
                </button>
            </div>
        </div>
    );
};

export default TryAgain;
