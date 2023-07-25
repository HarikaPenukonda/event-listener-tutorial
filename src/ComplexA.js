import React from "react";

export default function ComplexA(){

    /*
        Challenge: See if you can do it all by yourself
    */

    const[infoThings, setInfoThings] = React.useState(["Thing 1", "Thing 2"])

    function handleClick(){
        setInfoThings(prevItems => [...prevItems, `Thing ${prevItems.length + 1}`]) // [Things 1, Things2,]
    }

    const thingsElements = infoThings.map(things => <p>{things}</p>)
    return(
            <div>
                <button onClick={handleClick}>Add Item</button>
                {thingsElements}
            </div>
    )

} 