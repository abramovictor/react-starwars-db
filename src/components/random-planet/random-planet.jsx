import React, { Component } from 'react';
import { getPlanet } from '../../services/swapi-service.js';
import './random-planet.scss';


export default class RandomPlanet extends Component {
    state = {
        planet: {}
    };

    constructor(props) {
        super(props);
        this.updatePlanet();
    }

    get randomId() {
        return parseInt((Math.random() * 25) + 1);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    };

    updatePlanet() {
        const id = this.randomId;

        getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;

        return (
            <section className="random-planet py-4">
                <div className="container">
                    <div className="card flex-row border">
                        <div className="col-4 p-0">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                className="card-img-top d-blog rounded"
                                alt={name} />
                        </div>
                        <div className="card-body col-8">
                            <h3 className="card-title h5">
                                {name}
                            </h3>
                            <ul className="list-group list-group-flushs">
                                <li className="list-group-item">
                                    <strong>Population:</strong> {population}
                                </li>
                                <li className="list-group-item">
                                    <strong>Rotation period:</strong> {rotationPeriod}
                                </li>
                                <li className="list-group-item">
                                    <strong>Diameter:</strong> {diameter}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};