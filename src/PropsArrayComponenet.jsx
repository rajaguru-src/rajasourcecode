import React from 'react';


export const PropsArrayfun = (props)=>{
    return(
        <>
        <h2> Props Array Componenet</h2>
        <p>{props.name}</p> 
        <ul>
            {props.name.map((fruts, index ) => (
                  <li key={index}> {fruts} </li>
            ))
            }
        </ul>             
        </>
        
    )
}