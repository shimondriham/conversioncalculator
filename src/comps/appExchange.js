import React, { useState } from 'react';
import InputEX from './inputEX';
import ScoreEX from './scoreEX';
import { abcontext } from '../context/abcontext';

function AppExchange(props) {
    let [ab, setAb] = useState([ {total:100, amount:100,first:"USDUSD",end:"USDUSD"}]);

    return (
                <abcontext.Provider value={{ ab: ab, setAb: setAb }} >
                    <React.Fragment >
                        <InputEX />
                        <ScoreEX ab={ab}/>
                    </React.Fragment>
                </abcontext.Provider>
    )
}

export default AppExchange