import React from "react";
// eslint-disable-next-line

export default function ComplexArray(){

    /*
        Challenge 1 : Convert the code below to use an array held in state instead of
        local variable. Initialize the state array with the same 2 items below
    */
    

    const [thingsArray,setThingsArray] = React.useState(["Thing 1", "Thing 2"])



    function addItem(){
        // 2 options - new value or callback function
        /*
            1. what i need to add?
                - i need to add array.length + 1
            2. what i need to return?
                - return the new state

            Note : we cannot use prevThingArray.push() as we did before as it changes the state directly
            and push method actually doesnt return the array that is modified it returns the new length of the array
            so this would be replacig all of our state with a number i.e, 3
        */
        //setThingsArray(prevThingsArray => "Thing" + prevThingsArray.length + 1)
        // return a new array, spread in the existing array
        setThingsArray(prevThingsArray => 
            [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return(
        <div>
            <button onClick={addItem}>Add Items</button>
            {thingsElements}  
        </div>
    )
}