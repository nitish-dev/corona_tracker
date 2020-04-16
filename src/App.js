import React, { useState, useEffect } from 'react';

import './App.css';
import Card from './components/Cards/Card';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import logo from './images/COVID-19.png';
import stay from './images/stay.png';
import { fetchData } from './api';
import Preloader from './components/Loader/Preloader';
const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAPI = async () => {
      setData(await fetchData());
      setLoading(false);
    };
    fetchAPI();
  }, []);

  //handleChange
  const handleChange = async (country) => {

    const data = await fetchData(country);
    setData(data);
    setCountry(country);

  }
  if (loading) {
    return <Preloader />
  } else {
    return (
      <div className="container">

        <div className="blockquote">
          <img className="logo" src={logo} alt="COVID-19" />
          <img src={stay} alt="COVID-19" /></div>
        <CountryPicker handleChange={handleChange} />
        <Card data={data} />

        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
