import React ,{useContext ,useState}from 'react';
// import { totalcontext } from '../context/totalcontext';
// import { amountcontext } from '../context/amountcontext';
import { abcontext } from '../context/abcontext';


function ScoreEX(props){
    // let {total}  = useContext(totalcontext)
    // let {amount}  = useContext(amountcontext)
    let {ab,setAb}  = useContext(abcontext)
    return(
        <div className='text-center'>
           {ab[0].amount}-{ab[0].first.substr(3, 6)} = {ab[0].total.toFixed(2)}-{ab[0].end.substr(3, 6)} 
           <br/>
           date:{ab[0].date}
        </div> 
    )
}

export default ScoreEX