import React ,{useContext }from 'react';
import { abcontext } from '../context/abcontext';


function ScoreEX(props){
    let {ab,setAb}  = useContext(abcontext)
    let first =ab[0].first.substr(3, 6);
    let upper= first.toLowerCase();
    let end =ab[0].end.substr(3, 6);
    let lower = end.toLowerCase();
    let elseupper=""
     let elselower=""
    if(upper == "thb"){elseupper="THB"}else{elseupper=""}
    if(lower == "thb"){elselower="THB"}else{elselower=""}
   
    return(
        <div className='col-md-6 mx-auto shadow text-center score'>
           <h2>{ab[0].amount} {elseupper}<i className={"fa fa-"+upper} aria-hidden="true"></i> = {ab[0].total.toFixed(2)} {elselower}<i className={"fa fa-"+lower} aria-hidden="true"></i></h2> 
           <br/>
           <h3>on the date: {new Date().toLocaleString() + ""}</h3>
        </div> 
    )
}

export default ScoreEX