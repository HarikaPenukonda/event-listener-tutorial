import React from "react";
import boxes from "./boxes";

export default function BoxApp(){

    const [box,setBox] = React.useState(boxes)

    const boxElements = box.map(
        items => (
            <div className="box" key={items.id}></div>
        )
    )

    /*
        Challenge part 1:
        1. Initialize state with the default value of the array
        pulled in from boxes.js
        2. Map over the state array and display each one as an
        empty square.
    */

    return(
        <main>
            {boxElements}
        </main>
    )
}