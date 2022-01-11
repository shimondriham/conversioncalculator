import React, { useState } from 'react';
import InputEX from './inputEX';
import ScoreEX from './scoreEX';
import { arcontext } from '../context/arcontext';

function AppExchange(props) {
    let [ar, setAr] = useState([ {total:100, amount:100,first:"USDUSD",end:"USDUSD"}]);

    return (
                <arcontext.Provider value={{ ar: ar, setAr: setAr }} >
                    <React.Fragment >
                        <InputEX />
                        <ScoreEX ar={ar}/>
                    </React.Fragment>
                </arcontext.Provider>
    )
}

export default AppExchange