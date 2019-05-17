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
        return itemList.map((item) => {
            const { id } = item;
            const label = this.props.children(item);

            return (
                <button
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)}
                    className="btn btn-outline-dark shadow-none border-bottom rounded-0">
                    {label}
                </button>
            );
        });
    }

    render() {
        const { itemList } = this.state;
        if (!itemList) return (
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <Spinner />
            </div>
        );

        const items = this.renderItem(itemList);
        return (
            <div className="list-item card list-group list-group-flush">
                {items}
            </div>
        );
    }
}