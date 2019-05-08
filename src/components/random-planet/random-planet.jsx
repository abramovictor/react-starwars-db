import React, { Component, Fragment } from 'react';
import { getPlanet } from '../../services/swapi-service.js';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PlanetView from './planet-view';

import './random-planet.scss';

export default class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor(props) {
        super(props);
        this.updatePlanet();
    }

    get randomId() {
        return parseInt((Math.random() * 25) + 2);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };

    onPlanetError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet() {
        const id = this.randomId;

        getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onPlanetError);
    }

    render() {
        const { loading, error, planet } = this.state;

        const errorMessage = error ? (
            <div className="d-flex justify-content-center align-items-center w-100">
                <ErrorIndicator />
            </div>
        ) : null;
        const speinner = loading? (
            <div className="d-flex justify-content-center align-items-center w-100">
                <Spinner />
            </div>
        ) : null;
        const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

        return (
            <section className="random-planet py-4">
                <div className="container">
                    <div className="card flex-row">
                        {errorMessage}
                        {speinner}
                        {content}
                    </div>
                </div>
            </section>
        );
    }
};