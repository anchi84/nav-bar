import React, { Component } from 'react';
import Item from '../item/item'

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: 'hr'
        };
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({id: event.target.value}); 
    }

    render() {

        const {
            languages
        } = this.props;

        console.log(languages);

        return (
            <div>
                <div className="navBar">
                {
                    this.props.menuItems[this.state.id].map((item, index) => 
                        <Item key={index} item={item}/>
                    ) 
                }
                </div>
                <select onChange = {this.handleChange}>
                    {
                        Object.entries(languages).map(
                            ([id, language]) => (<option key={id} value={id}>{language}</option>)
                        )
                    }
                </select>
            </div>
            
        );
    }
}

export default Menu;