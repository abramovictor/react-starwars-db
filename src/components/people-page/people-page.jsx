import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import { getAllPeople } from '../../services/swapi-service'
import Wrapper from '../wrapper';
import ErrorBoundry from '../error-boundry';

import './people-page.scss';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null,
        hasError: false
    };

    handlePersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const itemList = (
            <ErrorBoundry>
                <ItemList
                    getData={getAllPeople}
                    onPersonSelected={this.handlePersonSelected}>
                    {(item) => (
                        `${item.name} (${item.birthYear})`
                    )}
                </ItemList>
            </ErrorBoundry>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails
                    personID={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
            <ErrorBoundry>
                <Wrapper
                    left={itemList}
                    right={personDetails} />
            </ErrorBoundry>
        );
    }
};