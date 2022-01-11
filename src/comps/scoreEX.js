import React ,{useContext }from 'react';
// import { totalcontext } from '../context/totalcontext';
// import { amountcontext } from '../context/amountcontext';
import { abcontext } from '../context/abcontext';


function ScoreEX(props){
    let {ab,setAb}  = useContext(abcontext)

  
    return(
        <div className='text-center'>
           {ab[0].amount}-{ab[0].first.substr(3, 6)} = {ab[0].total.toFixed(2)}-{ab[0].end.substr(3, 6)} 
           <br/>
          on the date: {new Date().toLocaleString() + ""}
        </div> 
    )
}

export default ScoreEX