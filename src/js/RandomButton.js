import React, { PropTypes } from 'react';

export default class RandomButton extends React.Component {
    static propTypes = {
        random: PropTypes.func.isRequired
    }

    render() {
        return (
            <button
                className="btn btn-warning btn-lg btn-block"
                onClick={this.props.random}>
                FUCKIN TELL ME NOW
            </button>
        );
    }
}
