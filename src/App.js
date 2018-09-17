import React, { Component } from 'react';

import './App.css';
import Menu from '../src/menu/menu'

class App extends Component {

  render() {
    console.log("app render")

    const menuItems = {
      hr: [
        "Ljepota i Vi",
        "Kuhanje na zdrav način",
        "Kampiranje na otvorenom",
        "Aktivirajte se",
        "Meditacija",
        "2 + 2 = 3",
        "Za filmofile i knjigoljupce",
        "Jučer danas sutra"
      ],
      en: [
        "Beauty and You",
        "Healthy Cooking",
        "Outdoor Camping",
        "Activate",
        "Meditation",
        "2 + 2 = 3",
        "Cinephiles' and Booklovers' Corner",
        "Yesterday Today Tomorrow"
      ]
    };

    const languages = {
      hr: 'Hrvatski',
      en: 'English'
    }

    return (
      <Menu 
        menuItems={menuItems} 
        languages={languages}
      />
    );
  }
}

export default App;
