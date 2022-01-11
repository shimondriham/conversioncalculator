import React, { useState } from 'react';
import InputEX from './inputEX';
import ScoreEX from './scoreEX';
// import { totalcontext } from '../context/totalcontext'
// import { amountcontext } from '../context/amountcontext'
import { abcontext } from '../context/abcontext';

function AppExchange(props) {
    // let [total, setTotal] = useState(1);
    // let [amount, setAmount] = useState(100);
    let [ab, setAb] = useState([ {total:100, amount:100,first:"USDUSD",end:"USDUSD"}]);

    return (
        // <totalcontext.Provider value={{ total: total, setTotal: setTotal }}>
        //     <amountcontext.Provider value={{ amount: amount, setAmount: setAmount }}>
                <abcontext.Provider value={{ ab: ab, setAb: setAb }}>
                    <React.Fragment >
                        <InputEX />
                        <ScoreEX ab={ab}/>
                    </React.Fragment>
                </abcontext.Provider>
        //     </amountcontext.Provider>
        // </totalcontext.Provider>
    )
}

export default AppExchange