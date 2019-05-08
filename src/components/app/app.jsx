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
    }

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
                            <div className="col-5">
                                <ItemList onPersonSelected={this.handlePersonSelected} />
                            </div>
                            <div className="col">
                                <PersonDetails personID={this.state.selectedPerson} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}