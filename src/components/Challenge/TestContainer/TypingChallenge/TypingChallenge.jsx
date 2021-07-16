import React from 'react';
import ChallengeDetail from './ChallengeDetail.jsx/ChallengeDetail';
import TypeWriter from './TypeWriter/TypeWriter';
import './TypingChallenge.css';

const TypingChallenge = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
}) => {
    return (
        <div className="typing-challenge-container">
            {/* Details */}
            <div className="details-container">
                <ChallengeDetail name="Words" value={words} />
                <ChallengeDetail name="Characters" value={characters} />
                <ChallengeDetail name="Speed" value={wpm} />
            </div>
            {/* Typing */}
            <div className="typing-container">
                <TypeWriter
                    selectedParagraph={selectedParagraph}
                    words={words}
                    characters={characters}
                    wpm={wpm}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    );
};

export default TypingChallenge;
