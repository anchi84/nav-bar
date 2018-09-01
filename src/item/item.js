import React, { Component } from 'react';

class Item extends Component {
    
    render() {
        const item = this.props.item;
        // console.log(item);
        var words = item.split(' ');
        // console.log(words);
        return (
            <div className='item'>
                {
                    words.map((word, index) => (word.length >= 3) ?
                        <span key={index}>{word}<br/></span>
                        :
                        <span key={index}>{word} </span>
                    )
                }
            </div>
        )
    }
}

export default Item;