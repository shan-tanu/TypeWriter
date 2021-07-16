import React from 'react';
import TestLetter from './TestLetter/TestLetter';
import './TypeWriter.css';

const TypeWriter = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
}) => {
    //console.log('inde mainnn', testInfo);
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:{timeRemaining > 9 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted && 'Start typing to begin the challenge'}
                </p>
            </div>
            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="textarea test-paragraph">
                        {testInfo.map((ele, index) => (
                            <TestLetter
                                key={index}
                                letter={ele.testLetter}
                                letterInfo={ele.status}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea"
                        placeholder="Start typing here.."
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypeWriter;
