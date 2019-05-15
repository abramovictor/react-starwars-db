import React, { Fragment } from 'react';
import ErrorButton from '../error-button';

const PersonView = (props) => {
    const { id, name, gender, birthYear, eyeColor } = props.person;

    return (
        <Fragment>
            <div className="col-5 p-0">
                <img
                    onError={(error) => {
                        error.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                    }}
                    alt={name}
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    className="card-img-top h-100" />
            </div>

            <div className="card-body col">
                <h3 className="card-title h5">
                    {name}
                </h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Gender:</strong> {gender}
                    </li>
                    <li className="list-group-item">
                        <strong>Birth Year:</strong> {birthYear}
                    </li>
                    <li className="list-group-item">
                        <strong>Eye Color</strong> {eyeColor}
                    </li>
                </ul>

                <ErrorButton />
            </div>

        </Fragment>
    );
};

export default PersonView;
