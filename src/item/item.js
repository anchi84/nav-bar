import React, { Component } from 'react';

class Item extends Component {
    
    render() {
        return <div className='item'>{this.props.item}</div>
    }
}

export default Item;