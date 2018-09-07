import React, { Component } from 'react';
import Item from '../item/item'

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.itemComponent = [];
        this.state = {
            id: 'hr',
            showDropdown: false,
            width: 0
        };
    } 

    componentDidMount() {
        this.calculate();
    }

    calculate = () => {
        var width = this.itemComponent
            .map(item => item.getWidth())
            .reduce((a, b) => a + b);
        console.log(width);
        this.setState({width: width});
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({id: event.target.value}, this.calculate);
    }

    handleMouseEnter = () => {
        this.setState({showDropdown: true})
    }

    handleMouseLeave = () => {
        this.setState({showDropdown: false})
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
                        this.props.menuItems[this.state.id]
                            .slice(0,8)
                            .map((item, index) => 
                                <Item key={this.state.id + "_" + index} 
                                    item={item} 
                                    ref={(r) => {this.itemComponent[index] = r}}
                                />
                            )
                    }
                   {/*  <div className="dropdown" 
                        onMouseEnter={this.handleMouseEnter} 
                        onMouseLeave={this.handleMouseLeave}
                    >
                        <span className='item'>...</span>
                        {
                            this.state.showDropdown 
                            && (this.props.menuItems[this.state.id]
                                .slice(4,8)
                                .map((item, index) => 
                                    <Item key={index} item={item}/>)
                                )
                        }
                    </div> */}
                    <select className="select" onChange={this.handleChange}>
                        {
                            Object.entries(languages)
                                .map(([id, language]) => 
                                    (<option key={id} value={id}>{language}</option>)
                                )
                        }
                    </select>
                </div> 
            </div>
            
        );
    }
}

export default Menu;