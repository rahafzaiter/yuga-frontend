import React, { useEffect, useState } from "react";

export default function HookCounterTwo(){
    const initialCount=0;
    const [count,setCount]=useState(initialCount);

    
    const  incrementFive=()=>{
        for (let i=0;i<5;i++){
        setCount(prevcount=>prevcount+1)
        console.log(count)
        }
      }


    return(
        <form  onSubmit={e => e.preventDefault()}>
            <h1>hello from feedback</h1>
            Count:{count}
           
            <button type ="submit" onClick={ ()=>{setCount(initialCount),console.log(count)}} >Reset{count} </button>
            <button type ="submit" onClick={ ()=>{setCount(prevcount=>prevcount+1),console.log(count)}} >Increment {count} </button>
            <button type ="submit" onClick={ ()=>{setCount(prevcount=>prevcount-1),console.log(count)}} >Decriment {count} </button>
            <button onClick={incrementFive} >Increment 5 </button>
        </form>
    )
}