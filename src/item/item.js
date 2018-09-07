import React, { Component } from 'react';

class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            width: 0
        }
    }

    componentDidMount() {
        this.setState({width: this.childNode.offsetWidth})
    }

    getWidth = () => { 
        return this.childNode.offsetWidth;
     } 
    
    render() {
        const item = this.props.item;
        // console.log(item);
        var words = item.split(' ');
        // console.log(words);
        return (
            <div className='item' ref={(r) => {this.childNode = r}}>
                {
                    words.map((word, index) => (word.length >= 3) 
                    ? <span key={index}>{word}<br/></span>
                    : <span key={index}>{word} </span>
                    )
                }
            </div>
        )
    }
}

export default Item;