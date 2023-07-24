import React from "react";

export default function Conundrum(){
    const thingsArray = ["Thing 1", "Thing 2"];

    /*
        use the array length +1 to determine the number
        of the "Thing" being added. Also, have your event
        listerner console.log() after adding the new item to the array
    */    
    const thingsElement = thingsArray.map(items=><p key={items}>{items}</p>) 
    // this line will run only one time and that's the very first time the app component gets rendered
    

    function addItem(){
        const newThingText = `Thing${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        console.log(thingsArray);
    }
    /*
        At this point the array is changing but we do not see this on screen
        React is not looking at local arrays that are just saved within a componenet
        to determine whether or not something should get re-rendered or rather if the return here
        should run again with an updated value for `thingsElement`
    */
    return(
        <div>
            <button onClick={addItem}>Add Items</button>
            {thingsElement}  
        </div>
    )
}