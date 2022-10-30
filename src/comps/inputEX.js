import React, { useContext, useRef, useEffect, useState } from 'react';
import { arcontext } from '../context/arcontext';
// import axios from "axios";



function InputEX(props) {
    let { ar, setAr } = useContext(arcontext)
    let firstValueRef = useRef();
    let endlValueRef = useRef();
    let amountRef = useRef();

    let currency = {
        "CAD": 1.356539,
        "EUR": 1.00329,
        "GBP": 0.864594,
        "ILS": 3.507978,
        "THB": 37.801035
    }

    useEffect(() => {
        doApi();
    }, [])


    const switchClick = () => {
        let temp = firstValueRef.current.value;
        firstValueRef.current.value = endlValueRef.current.value;
        endlValueRef.current.value = temp;
        doApi();
    }

    const calcTotal = () => {
        doApi();
    }
     // Not working due to API server problem -------------
    // const doApi = async () => {
    //     let first_val =firstValueRef.current.value; 
    //     let end_val = endlValueRef.current.value; 
    //     let url = `https://freecurrencyapi.net/api/v2/latest?apikey=EbfYOt8KeJ4wM6X0lDtMAXW8Dfg9CyII6ehuk0ai`;
    //     let resp = await axios.get(url);
    //     console.log(resp.data);
    //     let amount_val = amountRef.current.value;
    //     let  first = resp.data.data[first_val];
    //     if(first_val=="USD"){
    //       first = 1;   
    //     }
    //     let end =  resp.data.data[end_val]; 
    //     if(end_val == "USD"){
    //        end = 1 ;
    //     }
    //     let TotalVal=(1/first)*(end)*amount_val;      
    //     let changeObj = {
    //             total:TotalVal,
    //             amount:amount_val,
    //             first: first_val,
    //             end: end_val,
    //         }
    //         setAr([changeObj])   
    // }
    const doApi = () => {
        let first_val = firstValueRef.current.value;
        let end_val = endlValueRef.current.value;
        let amount_val = amountRef.current.value;
        let first = currency[first_val];
        if (first_val == "USD") { first = 1; }
        let end = currency[end_val];
        if (end_val == "USD") { end = 1; }
        let TotalVal = (1 / first) * (end) * amount_val;
        let changeObj = {
            total: TotalVal,
            amount: amount_val,
            first: first_val,
            end: end_val,
        }
        setAr([changeObj])
    }

    return (
        <div className='col-md-6 mx-auto shadow input'>
            <div className='text-center'>
                <h1>Conversion calculator</h1>
                <hr />
            </div>
            <h3>Choose coin</h3>
            <select id='idfirst' onChange={calcTotal} ref={firstValueRef} className='form-select  select1'>
                <option value="ILS">ILS New Shekel</option>
                <option value="USD">USD U.S. Dollar</option>
                <option value="EUR">EURO</option>
                <option value="CAD">CAD Canadian Dollar</option>
                <option value="GBP">GBP Pound</option>
                <option value="THB">THB Thai Butt</option>
            </select>
            <button className="a" onClick={switchClick}></button>
            <select onChange={calcTotal} ref={endlValueRef} className='form-select  select2'>
                <option value="USD">USD U.S. Dollar</option>
                <option value="ILS">ILS New Shekel</option>
                <option value="EUR">EURO</option>
                <option value="CAD">CAD Canadian Dollar</option>
                <option value="GBP">GBP Pound</option>
                <option value="THB">THB Thai Butt</option>
            </select>
            <h3>Enter amount:</h3>
            <input onInput={calcTotal} ref={amountRef} type="number" defaultValue="100" className='form-control' />
        </div>

    )
}


export default InputEX