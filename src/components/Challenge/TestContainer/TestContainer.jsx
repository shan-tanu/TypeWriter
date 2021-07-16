import React from 'react';
import './TestContainer.css';
import TryAgain from './TryAgain/TryAgain';
import TypingChallenge from './TypingChallenge/TypingChallenge';

const TestContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain,
}) => {
    return (
        <div className="test-container">
            {timeRemaining > 0 ? (
                <div className="typing-challenge-container" data-aos="fade-up">
                    <TypingChallenge
                        selectedParagraph={selectedParagraph}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                        startAgain={startAgain}
                    />
                </div>
            ) : (
                <div className="try-again-container">
                    <TryAgain
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        startAgain={startAgain}
                    />
                </div>
            )}
        </div>
    );
};

export default TestContainer;
