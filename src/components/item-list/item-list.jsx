import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-list.scss';

export default class ItemList extends Component {
    state = {
        itemList: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then(itemList => {
                this.setState({ itemList });
            });
    }

    renderItem(itemList) {
        return itemList.map(({ id, name }) => (
            <button
                key={id}
                onClick={() => this.props.onPersonSelected(id)}
                className="btn btn-outline-dark shadow-none border-bottom rounded-0">
                {name}
            </button>
        ));
    }

    render() {
        const { itemList } = this.state;
        if (!itemList) return (
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <Spinner />
            </div>
        );

        const listItems = this.renderItem(itemList);
        return (
            <div className="list-item card list-group list-group-flush">
                {listItems}
            </div>
        );
    }
}