import React from "react";

export default function Ternary(){
    /*
        Challenge: 
        - Initialize state for `isGoingOut` as a boolean
        - Make it so clicking the div.state--value flips that boolean value (true->false, false->true)
        - Display "Yes" if `isGoingOut` is true and No otherwise
    */
    const [isGoingOut,setIsGoingOut] = React.useState(false)

    function handleChange(){
        return setIsGoingOut(isGoingOut ? "Yes" : "No")
    }
    // const isGoingOut = false
    return(
        <div>
            <h1 onClick={handleChange}>Do I feel like going out tonight?</h1>
            <h1>{isGoingOut}</h1>
        </div>
    )
}