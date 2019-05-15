import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import { getAllPeople } from '../../services/swapi-service'

import './people-page.scss';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    handlePersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <ErrorIndicator />
            );
        }

        return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <ItemList
                                getData={getAllPeople}
                                onPersonSelected={this.handlePersonSelected} />
                        </div>
                        <div className="col">
                            <PersonDetails
                                personID={this.state.selectedPerson} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};