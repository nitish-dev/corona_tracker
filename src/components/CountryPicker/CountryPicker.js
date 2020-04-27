import React, { useState, useEffect, useContext } from 'react'
import { fetchCountry } from '../../api';
import { GlobalContext } from '../../context/GlobalState';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

const CountryPicker = () => {

    const [countries, setCountries] = useState([]);
    const [state, setState] = useContext(GlobalContext);

    useEffect(() => {

        const fetchAPI = async () => {
            setCountries(await fetchCountry());
            M.AutoInit();
        };
        fetchAPI();

    }, []);

    let name = '';

    // onchange
    const onChange = (e) => {
        name = e.target.value;
        let changeableUrl = url;
        if (e.target.value) {
            changeableUrl = `${url}/countries/${e.target.value}`;
        }
        axios.get(changeableUrl)
            .then(res => {
                setState({
                    data: res.data,
                    country: name,
                    loading: false
                })

            })
            .catch(err => console.log(err));
    }
    return (
        <div className="row">
            <div className="input-field col s12">
                <select onChange={onChange}>

                    <option value="">Global</option>

                    {countries !== null && countries.map((name, i) => <option key={i} value={name}>{name}</option>)}
                </select>

            </div>
        </div>
    )

}

export default CountryPicker;
