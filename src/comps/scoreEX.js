import React ,{useContext}from 'react';
import { context } from '../context/context'

function ScoreEX(props){
    let {total}  = useContext(context)
    return(
        <div className='text-center'>
           {total}
        </div> 
    )
}

export default ScoreEX