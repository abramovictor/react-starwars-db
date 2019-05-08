import React, { Fragment } from 'react';

const PersonView = (props) => {
    const { id, name, gender, birthYear, eyeColor } = props.person;

    return (
        <Fragment>
            <div className="col-5 p-0">
                <div
                    style={{
                        background: `url(https://starwars-visualguide.com/assets/img/characters/${id}.jpg) no-repeat center top / cover,
                                     url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg) no-repeat center top / cover`
                    }}
                    className="card-img-top h-100" />
            </div>

            <div className="card-body col">
                <h3 className="card-title h5">
                    {name}
                </h3>
                <ul className="list-group list-group-flush">
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
            </div>
        </Fragment>
    );
};

export default PersonView;
