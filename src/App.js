import React from "react";

export default function App(){
    function handleClick(){
        //console.log("I was clicked")
        return(
            <h1>You are clicked</h1>
        )
    }
    /*
        Add function - handleClick() to the button
    */
    return(
        <div className="container">
            <img 
                src="./images/i1.jpeg"
                width="200px"
                />
            <br></br>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

