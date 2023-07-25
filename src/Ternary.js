import React from "react";

export default function Ternary(){

    /*
        Challenge 1 : Replace the if/else below with a ternary to determine 
        the text that shoulf display on the page

        Challenge 2 : move our ternary operator inside of the JSX
        so the "Yes" and "No" are determined inside the <h1>

        Challange 3 : 
            - Initalize state for `isGoingOut` as a boolean
            - Make it so clicking on the div state flips the boolean value from true to false viceversa
            - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
    */

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    // function handleClick(){
    //     setIsGoingOut(prevState => !prevState)
    // }

    return(
        <div>
            {/* <h1 onClick={handleClick}>Do I feel like going out tonight?</h1> */}
            <h1 onClick={() =>  setIsGoingOut(prevState => !prevState)}>Do I feel like going out tonight?</h1>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    )
}