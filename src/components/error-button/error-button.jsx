import React, { Component } from 'react';

export default class ErrorButton extends Component {
    state = {
        renderError: false
    };

    handleErrorClick = () => {
        this.setState({ renderError: true });
    };

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button
                onClick={this.handleErrorClick}
                className="btn btn-outline-danger">
                Throw Error
            </button>
        );
    }
}