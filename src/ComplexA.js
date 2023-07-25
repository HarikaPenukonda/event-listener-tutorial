import React from "react";

export default function ComplexA(){

    /*
        Challenge: See if you can do it all by yourself
    */

    const[infoThings, setInfoThings] = React.useState(["Things 1", "Things 2"])

    function handleClick(){
        setInfoThings(prevItems => [...prevItems, `"Thing "${prevItems.length + 1}`]) // [Things 1, Things2, Things3..]
    }

    const thingsElements = infoThings.map(things => <p>{things}</p>)
    return(
            <div>
                <button onClick={handleClick}>Add Item</button>
                {thingsElements}
            </div>
    )

} 