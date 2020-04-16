import React, { useState, useEffect } from 'react'
import { fetchCountry } from '../../api';
import M from 'materialize-css/dist/js/materialize.min.js';
const CountryPicker = ({ handleChange }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {

        const fetchAPI = async () => {
            setCountries(await fetchCountry());
            M.AutoInit();
        };
        fetchAPI();

    }, [0])
    return (
        <div className="row">
            <div className="input-field col s12">
                <select onChange={(e) => handleChange(e.target.value)}>

                    <option value="">Global</option>

                    {countries !== null && countries.map((name, i) => <option key={i} value={name}>{name}</option>)}
                </select>

            </div>
        </div>
    )

}

export default CountryPicker;
