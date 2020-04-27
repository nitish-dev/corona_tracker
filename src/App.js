import React from 'react';

import './App.css';
import Card from './components/Cards/Card';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import logo from './images/logo.png';

import { GlobalProvider } from './context/GlobalState';

const App = () => {

  return (

    <div className="container">
      <GlobalProvider>
        <img className="image" src={logo} alt="COVID-19" />
        <CountryPicker />
        <Card />
        <Chart />
      </GlobalProvider>
    </div>

  );
}



export default App;
