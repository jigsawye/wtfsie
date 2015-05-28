import React from 'react';
import classNames from 'classnames';

export default class Item extends React.Component {

    constructor(...args) {
        super(args);
    }

    onDelete(label) {
        this.props.onDelete(label);
    }

    render() {
        const itemNodes = this.props.foods.map((foodItem, id) => {
            const {food, hightlight} = foodItem;
            const boundClick = this.onDelete.bind(this, food);

            const classes = classNames({
                'list-group-item': true,
                'active': hightlight
            });

            return (
                <a href="#"
                   className={classes}
                   onClick={boundClick}
                   key={id}
                   >{food}</a>
            );
        });
        return (
            <div className="list-group">
                {itemNodes}
            </div>
        );
    }
}
