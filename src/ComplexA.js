import React from "react";

export default function ComplexA(){

    const[getThings,setGetThings] = React.useState(["Thing 1", "Thing 2"])

    function handleClick(){
        setGetThings(prevItems => [...prevItems, `Thing ${prevItems.length + 1}`])
    }

    const thingsElement = getThings.map(things => <p>{things}</p>)

    /*
        Challenge: See if you can do it all again by yourself
    */

   return(
    <div>
        <button onClick={handleClick}>Add Item</button>
        {thingsElement}
    </div>
   )

} 