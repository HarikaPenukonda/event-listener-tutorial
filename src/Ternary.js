import React from "react";

export default function Ternary(){
    /*
        Challenge: 
        - Initialize state for `isGoingOut` as a boolean
        - Make it so clicking the div.state--value flips that boolean value (true->false, false->true)
        - Display "Yes" if `isGoingOut` is true and No otherwise
    */
    const [isGoingOut,setIsGoingOut] = React.useState(true)
    
    function handleClick(){
        setIsGoingOut(prevState => !prevState)
    }

    return(
        <div>
            <h1 onClick={handleClick}>Do I feel like going out tonight?</h1>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    )
}