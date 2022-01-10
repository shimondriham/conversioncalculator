import React, { useContext, useRef } from 'react';
import { context } from '../context/context'
import axios from "axios";


function InputEX(props) {
    let {total,setTotal}  = useContext(context)
    // let {amount,setAmount}  = useContext(context)

    let firstValueRef = useRef();
    let endlValueRef = useRef();
    let amountRef = useRef();


    const calcTotal = () => {
        // let coin_val = coinRef.current.value; 
        // let amount_val = amountRef.current.value;
        // setTotal({total:coin_val * amount_val});
        doApi();
  
    }
    const doApi = async () => {
        let url = `http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb`;
        let resp = await axios.get(url);
        // console.log(resp.data)
        let first_val = firstValueRef.current.value;
        let finalFirstVal = resp.data.quotes[first_val];
        let end_val = endlValueRef.current.value;
        let finalEndVal = resp.data.quotes[end_val];
        let amount_val = amountRef.current.value;
        let TotalVal=99999;
            if(end_val==first_val){
                TotalVal =  1 ;
                console.log(TotalVal+"c");
            }
            else if (first_val == "USDUSD") {
                TotalVal = finalFirstVal * finalEndVal;
                console.log(TotalVal+"a");
            }
            else if(end_val == "USDUSD"){
                TotalVal =  finalEndVal / finalFirstVal;
                console.log(TotalVal+"b");
            }
            // else if(end_val != "USDUSD" && first_val != "USDUSD" && finalFirstVal>1){
            //     TotalVal =  finalFirstVal/finalFirstVal * finalFirstVal-finalEndVal;
            //     console.log(TotalVal+"c");
            // }
            // else if(end_val != "USDUSD" && first_val != "USDUSD" && finalFirstVal<1){
            //     TotalVal =  finalEndVal/finalEndVal  /  finalEndVal-finalFirstVal;
            //     console.log(TotalVal+"c");
            // }
            else{
                console.log(TotalVal); 
            }
            setTotal(TotalVal*amount_val)
            // setAmount(amount_val)
        
    }

    return (
        <div className='col-md-6 mx-auto '>
            <h1>Monkeys Exchange:</h1>
            <h2>Choose coin</h2>
            <select onChange={calcTotal} ref={firstValueRef} className='select-control'>
                <option value="USDUSD">USD</option>
                <option value="USDILS">ILS</option>
                <option value="USDEUR">EURO</option>
                <option value="USDBTC">BTC</option>
                <option value="USDTHB">THB</option>
            </select>
            <button></button>
            <select onChange={calcTotal} ref={endlValueRef} className='select-control'>
                <option value="USDUSD">USD</option>
                <option value="USDILS">ILS</option>
                <option value="USDEUR">EURO</option>
                <option value="USDBTC">BTC</option>
                <option value="USDTHB">THB</option>
            </select>
            <h2>Enter amount:</h2>
            <input onInput={calcTotal} ref={amountRef} type="number" defaultValue="100" className='form-control' />
            {/* <h2>you will get: {this.state.total.toFixed(2)} NIS</h2> */}
            {/* <h1>{total}</h1> */}
        </div>
    )
}

export default InputEX