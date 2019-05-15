import React, { Component } from 'react';
import { getAllPeople } from '../../services/swapi-service';
import Spinner from '../spinner';
import './item-list.scss';

export default class ItemList extends Component {
    state = {
        peopleList: null
    };

    componentDidMount() {
        getAllPeople()
            .then(peopleList => {
                this.setState({ peopleList });
            });
    }

    renderPeople(peopleList) {
        return peopleList.map(({ id, name }) => (
            <button
                key={id}
                onClick={() => this.props.onPersonSelected(id)}
                className="btn btn-outline-dark shadow-none border-bottom rounded-0">
                {name}
            </button>
        ));
    }

    render() {
        const { peopleList } = this.state;
        if (!peopleList) return (
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <Spinner />
            </div>
        );

        const listItems = this.renderPeople(peopleList);
        return (
            <div className="list-item card list-group list-group-flush">
                {listItems}
            </div>
        );
    }
}