import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

import './app.scss';

export default class App extends Component {
    state = {
        visibleRandomPlanet: true,
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch() {
        console.log('componentDidCatch');
        this.setState({ hasError: true });
    }

    handleToggleVisibleRandomPlanet = () => {
        this.setState(state => {
            return {
                visibleRandomPlanet: !state.visibleRandomPlanet
            }
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <ErrorIndicator />
            );
        }

        const { visibleRandomPlanet } = this.state;
        const randomPlanet = visibleRandomPlanet ? (
            <RandomPlanet />
        ) : null;

        return (
            <div id="app-starwars-db" className="app pb-5">
                <Header />
                <div className="container mb-4">
                    <div className="custom-control custom-switch">
                        <input
                            onChange={this.handleToggleVisibleRandomPlanet}
                            type="checkbox"
                            className="custom-control-input"
                            id="togglePlanet"
                            checked={visibleRandomPlanet} />
                        <label className="custom-control-label" htmlFor="togglePlanet">
                            Toggle Random Planet
                        </label>
                    </div>
                </div>

                {randomPlanet}

                <PeoplePage />
                <PeoplePage />
                <PeoplePage />

            </div>
        );
    }
}