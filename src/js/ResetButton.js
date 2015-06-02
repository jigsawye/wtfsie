import React, { PropTypes } from 'react';

export default class ResetButton extends React.Component {
    static propTypes = {
        destroyAll: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

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
