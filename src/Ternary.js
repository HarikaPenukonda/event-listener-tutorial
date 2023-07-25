import React from "react";

export default function Ternary(){
    /*
        Challenge: Replace the if/else below with a ternary
        to determine the text that should display on the page
    */

    const isGoingOut = false

    let answer // Use Ternary here
    // if(isGoingOut === true){
    //     answer = "Yes"
    // }else{
    //     answer = "No"
    // }
    answer = isGoingOut ? "Yes" : "No"

    return(
        <div>
            <h1>Do I feel like going out tonight?</h1>
            <h1>{answer}</h1>
        </div>
    )
}