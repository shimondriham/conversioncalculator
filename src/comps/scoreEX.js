import React ,{useContext }from 'react';
import { abcontext } from '../context/abcontext';


function ScoreEX(props){
    let {ab,setAb}  = useContext(abcontext)

  
    return(
        <div className='col-md-6 mx-auto shadow text-center score'>
           <h2>{ab[0].amount}-{ab[0].first.substr(3, 6)} = {ab[0].total.toFixed(2)}-{ab[0].end.substr(3, 6)}</h2> 
           <br/>
           <h3>on the date: {new Date().toLocaleString() + ""}</h3>
        </div> 
    )
}

export default ScoreEX