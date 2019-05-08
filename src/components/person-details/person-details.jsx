import React, { Component } from 'react';
import { getPerson } from '../../services/swapi-service';

import './person-details.scss';

export default class PersonDetails extends Component {
    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personID !== prevProps.personID) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personID } = this.props;
        if (!personID) return;

        getPerson(personID)
            .then(person => this.setState({ person }));
    }

    render() {
        if (!this.state.person) return (
            <div className="alert alert-light text-white" role="alert">
                Select a person from a list
            </div>
        );

        const { person: { id, name, gender, birthYear, eyeColor } } = this.state;

        return (
            <div className="person-details card flex-row">
                <div className="col-5 p-0">
                    <div
                        style={{
                            background: `url(https://starwars-visualguide.com/assets/img/characters/${id}.jpg) no-repeat center top / cover,
                                     url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg) no-repeat center top / cover`
                        }}
                        className="card-img-top" />
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
            </div>
        );
    }
};