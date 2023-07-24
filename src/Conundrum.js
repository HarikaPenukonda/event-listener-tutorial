import React from "react";

export default function Conundrum(){
    const thingsArray = ["Thing 1", "Thing 2"];

    /*
        use the array length +1 to determine the number
        of the "Thing" being added. Also, have your event
        listerner console.log() after adding the new item to the array
    */    
    const thingsElement = thingsArray.map(items=><p key={items}>{items}</p>)
    

    function addItem(){
        const newThingText = `Thing${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        console.log(thingsArray);
    }
    
    return(
        <div>
            <button onClick={addItem}>Add Items</button>
            {thingsElement}  
        </div>
    )
}