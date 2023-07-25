import React from "react";

export default function Ternary(){
    /*
        Challenge: move our ternary directly inside of the JSX
        so the "Yes" and "No" are determined inside the <h1>
    */

    const isGoingOut = false
    return(
        <div>
            <h1>Do I feel like going out tonight?</h1>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    )
}