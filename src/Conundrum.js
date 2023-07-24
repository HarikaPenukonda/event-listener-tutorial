import React from "react";

export default function Conundrum(){
    const thingsArray = ["Thing 1", "Thing 2"]

    /*
        Challenge: Map over the thingsArray to generate
        a <p> element for each item and render them on the page
        below the button
    */ 
    const thingsElement = thingsArray.map(items=><p>key={items}</p>)
    // const thingsElement = thingsArray.map((items) => {
    //     return <p>{items}</p>
    // })
    return(
        <div>
            <button>Add Items</button>
            {thingsElement}  
        </div>
    )
}