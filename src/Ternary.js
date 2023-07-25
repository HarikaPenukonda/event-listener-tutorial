import React from "react";

export default function Ternary(){

    /*
        Challenge 1 : Replace the if/else below with a ternary to determine 
        the text that shoulf display on the page

        Challenge 2 : move our ternary operator inside of the JSX
        so the "Yes" and "No" are determined inside the <h1>
    */

    const isGoingOut = true
    

    return(
        <div>
            <h1>Do I feel like going out tonight?</h1>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    )
}