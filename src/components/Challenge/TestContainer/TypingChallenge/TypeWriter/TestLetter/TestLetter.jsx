import React from 'react';
import './TestLetter.css';

const TestLetter = ({ letter, letterInfo }) => {
    return <span className={`test-letter ${letterInfo}`}>{letter}</span>;
};

export default TestLetter;
