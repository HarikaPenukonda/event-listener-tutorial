import React from "react";

export default function Conundrum(){
    const thingsArray = ["Thing 1", "Thing 2"]

    /*
        use the array length +1 to determine the number
        of the "Thing" being added. Also, have your event
        listerner console.log() after adding the new item to the array
    */    
    const thingsElement = thingsArray.map(items=><p key={items}>{items}</p>)
    // const thingsElement = thingsArray.map((items) => {
    //     return <p>{items}</p>
    // })
    return(
        <div>
            <button onClick={()=>"Thing" + thingsArray.length+1}>Add Items</button>
            {thingsElement}  
        </div>
    )
}