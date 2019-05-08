import React, { Component } from 'react';
import { getPlanet } from '../../services/swapi-service.js';
import './random-planet.scss';


export default class RandomPlanet extends Component {
    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        this.updatePlanet();
    }

    updatePlanet() {
        getPlanet(7)
            .then(planet => this.setState({
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            }))
    }

    render() {
        const { name, population, rotationPeriod, diameter } = this.state;

        return (
            <section className="random-planet py-4">
                <div className="container">
                    <div className="card flex-row">
                        <div className="col-4 p-0">
                            <img src="..." className="card-img-top" alt="..." />
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