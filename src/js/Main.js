import React from 'react';
import Header from './Header';
import Form from './Form';
import Item from './Item';
import RandomButton from './RandomButton';
import ResetButton from './ResetButton';

export default class Main extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = { foods: []};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.destroyAll = this.destroyAll.bind(this);
        this.random = this.random.bind(this);
    }

    handleSubmit(food) {
        let foods = this.state.foods;
        foods.push({food, hightlight: false});

        this.setState({ foods });
    }

    handleDelete(item) {
        const foods = this.state.foods;

        const index = foods.indexOf(item);
        foods.splice(index, 1);

        this.setState({ foods });
    }

    destroyAll() {
        this.setState({ foods: []});
    }

    random() {
        const randomId = Math.floor(Math.random() * this.state.foods.length);

        const foods = this.state.foods.map(function(item, id) {
            const food = item.food;
            const hightlight = randomId == id ? true : false;
            return {food, hightlight};
        });

        this.setState({foods});
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div>
                <Header />
                <Form onSubmit={this.handleSubmit} />
                <Item foods={this.state.foods} onDelete={this.handleDelete} />
                <RandomButton random={this.random} /> 
                <ResetButton destroyAll={this.destroyAll} />
            </div>
        );
    }
}
