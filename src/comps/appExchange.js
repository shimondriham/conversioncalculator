import React, { useState } from 'react';
import InputEX from './inputEX';
import ScoreEX from './scoreEX';
import { context } from '../context/context'

function AppExchange(props) {
    let [total,setTotal] = useState(1);
    // let [amount,setAmount] = useState(100);
    return (
        // {amount:amount,setAmount:setAmount},
        <context.Provider value={{total:total,setTotal:setTotal}}>
            <React.Fragment >
                <InputEX />
                <ScoreEX />
            </React.Fragment>
        </context.Provider>


    )
}

export default AppExchange