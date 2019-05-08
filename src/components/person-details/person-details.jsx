import React, { Component } from 'react';
import { getPerson } from '../../services/swapi-service';
import Spinner from '../spinner';
import PersonView from './person-view';
import ErrorIndicator from '../error-indicator'

import './person-details.scss';

const PersonContent = ({ children }) => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            {children}
        </div>
    );
};

export default class PersonDetails extends Component {
    state = {
        person: null,
        loading: false,
        error: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personID !== prevProps.personID) {
            this.updatePerson();
        }
    }

    onPersonLoaded = (person) => {
        this.setState({ person, loading: false, error: false });
    };

    onPersonError = (error) => {
        this.setState({ error: true, loading: false });
    }

    updatePerson() {
        const { personID } = this.props;
        if (!personID) return;

        this.setState({
            loading: true,
            error: false
        });

        getPerson(personID)
            .then(this.onPersonLoaded)
            .catch(this.onPersonError);
    }

    render() {
        const { person, loading, error } = this.state;

        const personView = !loading && person ? (
            <PersonView person={person} />
        ) : null;
        const spinner = loading ? (
            <PersonContent>
                <Spinner />
            </PersonContent>
        ) : null;
        const message = !(person || loading || error) ? (
            <PersonContent>
                Select a person from a list
            </PersonContent>
        ) : null;
        const errorIndicator = error ? (
            <PersonContent>
                <ErrorIndicator />
            </PersonContent>
        ) : null;

        return (
            <div className="person-details card flex-row">
                {personView}
                {spinner}
                {message}
                {errorIndicator}
            </div>
        );
    }
};