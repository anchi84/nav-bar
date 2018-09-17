import React, { Component } from 'react';
import Item from '../item/item'

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.itemComponent = [];
        this.state = {
            id: 'hr',
            hideMenu: false,
            showDropdown: false,
            index: 8,
            itemsWidth: [],
            menuWidth: 0
        };
    } 

    componentDidMount() {
        console.log("menu componentDidMount");
        window.addEventListener("resize", this.calculate);
        this.calculate();
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.calculate);
    }

    calculate = () => {
        this.setState({hideMenu: false, index: 8}, 
            function() {
                var itemsWidth = this.itemComponent
                    .map((item) => item.getWidth());
                var totalWidth = itemsWidth
                    .reduce((accumulator, currentValue) => accumulator + currentValue);
                var menuWidth = this.menu.offsetWidth - this.select.offsetWidth;
                console.log(itemsWidth);
                console.log(totalWidth);
                console.log(menuWidth);
                if(menuWidth - totalWidth < 0) {
                    var index;
                    for (let item of itemsWidth) {
                        // console.log(item);
                        if(menuWidth - item > 0) {
                            menuWidth -= item;
                        } else {
                            index = itemsWidth.indexOf(item) - 1;
                            break;
                        }         
                    }                    
                    // console.log("index " +index);
                    this.setState({hideMenu: true, index: index});
                }
            }
        );    
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
        console.log("menu render")
        const {
            languages,
            menuItems
        } = this.props;

        var menuItemsMap = menuItems[this.state.id]
            .map((item, index) =>
                <Item 
                    key={this.state.id + "_" + index} 
                    item={item} 
                    ref={(r) => {this.itemComponent[index] = r}}
                />
            );

        return (
            <div className="navBar" ref={(r) => {this.menu = r}}>
                {
                    menuItemsMap.slice(0, this.state.index)
                }
                {
                    this.state.hideMenu && (
                        <div
                            className="dropdown"
                            onMouseEnter={this.handleMouseEnter} 
                            onMouseLeave={this.handleMouseLeave}
                        > 
                            <span className='item'>...</span>
                            {
                                this.state.showDropdown && (  
                                    menuItemsMap.slice(this.state.index, 8)
                                )
                            }
                        </div>
                    )
                }
                <select 
                    className="select" 
                    onChange={this.handleChange} 
                    ref={(r) => {this.select = r}}
                >
                    {
                        Object
                            .entries(languages)
                            .map(([id, language]) => 
                                <option key={id} value={id}>
                                    {language}
                                </option>
                            )
                    }
                </select>
            </div> 
        );
    }
}

export default Menu;