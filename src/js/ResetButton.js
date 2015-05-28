import React from 'react';

export default class ResetButton extends React.Component {
    render() {
        return (
            <button
                className="btn btn-danger btn-lg btn-block"
                onClick={this.props.destroyAll}>
                RESET ALL OF FOOD
            </button>
        );
    }
}
