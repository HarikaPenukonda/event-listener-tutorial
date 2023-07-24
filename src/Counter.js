import React from "react";

/*
    Challenge: Set up state to tract our count (initial value 0)
*/

export default function Counter(){
    const [count,setCount] = React.useState(0)
    function add(){
        // provide a callback function
        //setCount(oldValue => oldValue + 1)
        setCount(prevCount => prevCount + 1)
    }

    function subract(){
         setCount(count - 1)
    }
    return(
        <div>
        <span>
            <button onClick={add}>+</button>
                <h3>{count}</h3>
            <button onClick={subract}>-</button>
        </span>
            
        </div>
    )
}