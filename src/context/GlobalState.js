import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//create context
export const GlobalContext = createContext();



//Provider component
export const GlobalProvider = ({ children }) => {

    //initial state
    let initialState = {
        data: {},
        loading: true
    };
    const [state, setState] = useState(initialState);

    useEffect(() => {

        axios.get(url)
            .then(res => {
                //console.log(res.data)
                setState({
                    data: res.data,
                    loading: false
                });
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <GlobalContext.Provider value={[state, setState]}>
            {children}
        </GlobalContext.Provider>
    )
}