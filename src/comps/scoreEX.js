import React ,{useContext}from 'react';
import { context } from '../context/context'

function ScoreEX(props){
    let {total}  = useContext(context)
    return(
        <div className='text-center'>
           {total.toFixed(2)}
        </div> 
    )
}

export default ScoreEX