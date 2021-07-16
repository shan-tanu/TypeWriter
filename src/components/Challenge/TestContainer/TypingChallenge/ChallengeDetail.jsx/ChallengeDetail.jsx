import React from 'react';
import './ChallengeDetail.css';

const ChallengeDetail = ({ name, value }) => {
    return (
        <div className="details-card-container">
            <div className="card-name">{name}</div>
            <div className="card-value">{value}</div>
        </div>
    );
};

export default ChallengeDetail;
