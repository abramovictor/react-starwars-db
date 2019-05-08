import React from 'react';

import './person-details.scss';

const PersonDetails = () => {
    return (
        <div className="card person-details">
            <img src="..." className="card-img-top" alt="..." />

            <div className="card-body">
                <h3 className="card-title h5">R2-D2</h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <strong>Gender:</strong> male
                </li>
                <li className="list-group-item">
                    <strong>Birth Year:</strong> 43
                </li>
                <li className="list-group-item">
                    <strong>Eye Color</strong> red
                </li>
            </ul>
        </div>
    );
};

export default PersonDetails;
