import React, { useContext, useRef ,setState} from 'react';
import { arcontext } from '../context/arcontext';
import axios from "axios";


function InputEX(props) {
    let {ar,setAr}  = useContext(arcontext)

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
        let url = `https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b`;
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
            setAr([changeObj])   
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