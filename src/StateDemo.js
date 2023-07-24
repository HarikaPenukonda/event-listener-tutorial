import React from "react";

export  default function StateDemo(){
    /*
        Challenge: Replace our hard-coded "Yes" on the page with
        some state initiated with React.useState()
    */
   const [isImportant,setIsImportant] = React.useState("Yes")
   /*
    Challenge:
        1. Create a function called `handleClick` that runs setIsImportant("no")
        2. add a click even listener to the div.state--value that runs `handleClick` when the div is clicked
   */
    function handleClick(){
        setIsImportant("No")
        // If we click again, the value does not change, it shows "No"
    }
    return(
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{isImportant}</h1>
            </div>

        </div>
    )
}