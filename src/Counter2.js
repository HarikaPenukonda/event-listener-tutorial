import React from "react";
import Count from "./Count";

export default function Counter2(){
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
    
    /*
        Challenge:
            - Create a new compoennt named Count
                - It should recieve a prop called `number`, whose value
                is the current value of our count
            - Have the component render the whole div and display the incoming prop `number`
            - Replace the div below with an instance of the new Count component
    */ 
    function subract(){
         setCount(prevCount => prevCount - 1)
    }
    return(
        <div className="counter">
        <span>
            <button onClick={add}>+</button>
            <Count
                number={count}
            />
            <button onClick={subract}>-</button>
        </span>
            
        </div>
    )
}