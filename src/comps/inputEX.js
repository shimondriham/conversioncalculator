import React, { useContext, useRef } from 'react';
// import { totalcontext } from '../context/totalcontext';
// import { amountcontext } from '../context/amountcontext';
import { abcontext } from '../context/abcontext';
import axios from "axios";


function InputEX(props) {
    // let {total,setTotal}  = useContext(totalcontext)
    // let {amount,setAmount}  = useContext(amountcontext)
    let {ab,setAb}  = useContext(abcontext)

    let firstValueRef = useRef();
    let endlValueRef = useRef();
    let amountRef = useRef();

    
    const switchClick = () => { 
        let temp = firstValueRef
        firstValueRef = endlValueRef
        endlValueRef =temp
        doApi();
    }

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
            // setTotal(TotalVal*amount_val)
            // setAmount(amount_val)
            let changeObj = {
                total:TotalVal*amount_val,
                amount:amount_val,
                first: first_val,
                end: end_val,
                date:Date.now()
            }
            setAb([changeObj])   
    }

    return (
        <div className='col-md-6 mx-auto '>
            <div className='text-center'>
              <h1>Conversion calculator:</h1>
            </div>
            <h2>Choose coin</h2>
            <select onChange={calcTotal} ref={firstValueRef} className='select-control'>
                <option value="USDUSD">USD</option>
                <option value="USDILS">ILS</option>
                <option value="USDEUR">EURO</option>
                <option value="USDBTC">BTC</option>
                <option value="USDTHB">THB</option>
            </select>
            <button className='btn btn-dark m-2' onClick={switchClick}>swith</button>
            <select onChange={calcTotal} ref={endlValueRef} className='select-control'>
                <option value="USDUSD">USD</option>
                <option value="USDILS">ILS</option>
                <option value="USDEUR">EURO</option>
                <option value="USDBTC">BTC</option>
                <option value="USDTHB">THB</option>
            </select>
            <h2>Enter amount:</h2>
            <input onInput={calcTotal} ref={amountRef} type="number" defaultValue="100" className='form-control' />
            <hr/>
            {/* <h2>you will get: {this.state.total.toFixed(2)} NIS</h2> */}
            {/* <h1>{total}</h1> */}
        </div>
    )
}

export default InputEX