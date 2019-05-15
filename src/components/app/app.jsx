import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.scss';

export default class App extends Component {
    state = {
        visibleRandomPlanet: true,
        selectedPerson: null
    };

    handleToggleVisibleRandomPlanet = () => {
        this.setState(state => {
            return {
                visibleRandomPlanet: !state.visibleRandomPlanet
            }
        });
    };

    handlePersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const { visibleRandomPlanet } = this.state;

        const randomPlanet = visibleRandomPlanet ? <RandomPlanet /> : null

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

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <ItemList
                                    onPersonSelected={this.handlePersonSelected} />
                            </div>
                            <div className="col">
                                <PersonDetails
                                    personID={this.state.selectedPerson} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}