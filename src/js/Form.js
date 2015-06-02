import React, { findDOMNode, PropTypes } from 'react';

export default class Form extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const food = findDOMNode(this.refs.food).value.trim();

        if (!food) {
            return;
        }

        this.props.onSubmit(food);
        findDOMNode(this.refs.food).value = '';
        findDOMNode(this.refs.food).focus();

        return;
    }

    render() {
        return (
            <div className="well bs-component">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label"
                               htmlFor="foodfield">
                        Food name</label>
                        <input className="form-control"
                               id="foodfield"
                               type="text"
                               placeholder="Please input a food name..."
                               ref="food"
                               autoFocus />
                    </div>
                    <button className="btn btn-primary btn-large btn-block"
                            type="submit">Add to list</button>
                </form>
            </div>
        );
    }
}
