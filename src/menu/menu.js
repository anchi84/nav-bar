import React, { Component } from 'react';
import Item from '../item/item'

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: 'hr',
            hover: false
        };
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({id: event.target.value}); 
    }

    handleMouseEnter = () => {
        this.setState({hover: true})
    }

    handleMouseLeave = () => {
        this.setState({hover: false})
    }

    render() {

        const {
            languages
        } = this.props;

        // console.log(languages);

        return (
            <div>
                <div className="navBar">
                    {
                        this.props.menuItems[this.state.id].slice(0,4).map((item, index) => 
                            <Item key={index} item={item}/>
                        )
                    }
                    <div className="dropdown">
                        <span className='item' onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}>...</span>
                        {
                            this.state.hover && (this.props.menuItems[this.state.id].slice(4,8).map((item, index) => 
                                <Item key={index} item={item}/>)
                            )
                        }
                    </div>
                    <select className="select" onChange = {this.handleChange}>
                        {
                            Object.entries(languages).map(
                                ([id, language]) => (<option key={id} value={id}>{language}</option>)
                            )
                        }
                    </select>
                </div>
            </div>
            
        );
    }
}

export default Menu;