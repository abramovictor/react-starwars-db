import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div id="app-starwars-db" className="app">
                <Header />
                <RandomPlanet />

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