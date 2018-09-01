import React, { Component } from 'react';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            language: 'Hrvatski'
        };
    }

    handleChange = (event) => {
        (this.state.language === 'Hrvatski') ?
        this.setState({language: 'English'}) : this.setState({language: 'Hrvatski'}); 
    }

    render() {

        const {
            hr,
            en
        } = this.props.menuItems;

        //console.log(en);
        //console.log(hr);

        return (
            <div className="navBar">
            {
                (this.state.language === 'Hrvatski') ?
                    hr.map((item, index) => 
                        <p key={index}>{item}</p>
                    ) : 
                    en.map((item, index) => 
                        <p key={index}>{item}</p>
                    )
            }
                <select onChange = {this.handleChange}>
                    <option defaultValue>Hrvatski</option>
                    <option>English</option>
                </select>
            </div>
        );
    }
}

export default Menu;