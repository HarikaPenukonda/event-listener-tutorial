import React from "react";

/*
    Challenge: Set up state to tract our count (initial value 0)
*/

export default function Counter(){
    const [count,setCount] = React.useState(0)
    /*
        Note : if you ever need the old value of state to help you determine the new value of state,
        you should pass a callback function to your state setter function(setCount) instead of using state directly
        This callback function will recieve the old value of state as its parameter, which you can use to determine your new state value
    */
    function add(){
        // provide a callback function
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