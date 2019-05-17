import React, { Component } from 'react';
import { getPerson } from '../../services/swapi-service';
import Spinner from '../spinner';
import ItemView from './item-view';
import ItemContent from './item-content';
import ErrorBoundry from '../error-boundry';

import './item-details.scss';

export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: false,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personID !== prevProps.personID) {
            this.updateItem();
        }
    }

    onItemLoaded = (item) => {
        this.setState({ item, loading: false });
    };


    updateItem() {
        const { personID } = this.props;
        if (!personID) return;

        this.setState({
            loading: true,
        });

        getPerson(personID)
            .then(this.onItemLoaded);
    }

    render() {
        const { item, loading } = this.state;

        const personView = !loading && item ? (
            <ItemView person={item} />
        ) : null;

        const spinner = loading ? (
            <ItemContent>
                <Spinner />
            </ItemContent>
        ) : null;

        const message = !(item || loading) ? (
            <ItemContent>
                Select a item from a list
            </ItemContent>
        ) : null;

        return (
            <div className="item-details card flex-row">
                <ErrorBoundry>
                    {personView}
                    {spinner}
                    {message}
                </ErrorBoundry>
            </div>
        );
    }
};