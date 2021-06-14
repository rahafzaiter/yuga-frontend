import React, { useEffect, useState } from "react";

export default function HookCounterOne(){
    
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`you clicked ${count} times`

    })

    return(
        <div  onSubmit={e => e.preventDefault()}>
            <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
        </div>
    )
}