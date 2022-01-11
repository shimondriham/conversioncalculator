import React, { useContext, useRef ,setState} from 'react';
// import { totalcontext } from '../context/totalcontext';
// import { amountcontext } from '../context/amountcontext';
import { abcontext } from '../context/abcontext';
import axios from "axios";


function InputEX(props) {
    let {ab,setAb}  = useContext(abcontext)

    let firstValueRef = useRef();
    let endlValueRef = useRef();
    let amountRef = useRef();
 


    const switchClick = () => { 
     let temp = firstValueRef.current.value;
     firstValueRef.current.value = endlValueRef.current.value;
     endlValueRef.current.value = temp;
        doApi();
    }
    const calcTotal = () => {
        doApi();
    }
    const doApi = async () => {
        let url = `http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb`;
        let resp = await axios.get(url);
        let first_val = firstValueRef.current.value;
        let end_val = endlValueRef.current.value;
        
        
        let amount_val = amountRef.current.value;

        let TotalVal=(1/resp.data.quotes[first_val])*(resp.data.quotes[end_val])*amount_val;      

        let changeObj = {
                total:TotalVal,
                amount:amount_val,
                first: first_val,
                end: end_val,
            }
            setAb([changeObj])   
    }

    return (
        <div className='col-md-6 mx-auto shadow  input'>
            <div className='text-center'>
              <h1>Conversion calculator</h1>
              <hr/>
            </div>
            <h3>Choose coin</h3>
            <select id='idfirst' onChange={calcTotal} ref={firstValueRef} className='form-control select1'>
                <option value="USDUSD">USD</option>
                <option value="USDILS">ILS</option>
                <option value="USDEUR">EURO</option>
                <option value="USDBTC">BTC</option>
                <option value="USDTHB">THB</option>
            </select>
            <button className="a" onClick={switchClick}></button>
            <select onChange={calcTotal} ref={endlValueRef} className='form-control select2'>
                <option value="USDUSD">USD</option>
                <option value="USDILS">ILS</option>
                <option value="USDEUR">EURO</option>
                <option value="USDBTC">BTC</option>
                <option value="USDTHB">THB</option>
            </select>
            <h3>Enter amount:</h3>
            <input onInput={calcTotal} ref={amountRef} type="number" defaultValue="100" className='form-control' />
        </div>
    )
}

export default InputEX