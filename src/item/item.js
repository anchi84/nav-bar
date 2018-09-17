import React, { Component } from 'react';

class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            width: 0
        }
    }

    componentDidMount() {
        console.log("item componentDidMount")
        this.setState({width: this.item.offsetWidth})
    }

    getWidth = () => { 
        return this.item.offsetWidth;
    } 
    
    render() {
        console.log("item render");
        const item = this.props.item;
        // console.log(item);
        var words = item.split(' ');
        // console.log(words);
        return (
            <div className='item' ref={(r) => {this.item = r}}>
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