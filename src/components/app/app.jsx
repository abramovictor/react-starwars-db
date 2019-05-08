import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.scss';

export default class App extends Component {
    state = {
        visibleRandomPlanet: true
    }

    handleToggleVisibleRandomPlanet = () => {
        this.setState(state => {
            return {
                visibleRandomPlanet: !state.visibleRandomPlanet
            }
        });
    };

    render() {
        const { visibleRandomPlanet } = this.state;

        const randomPlanet = visibleRandomPlanet ? <RandomPlanet /> : null

        return (
            <div id="app-starwars-db" className="app">
                <Header />
                {randomPlanet}

                <div className="container mb-4">
                    <button
                        onClick={this.handleToggleVisibleRandomPlanet}
                        className="btn btn-dark btn-sm">
                        Toggle Random Planet
                    </button>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <ItemList />
                            </div>
                            <div className="col-6">
                                <PersonDetails />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}