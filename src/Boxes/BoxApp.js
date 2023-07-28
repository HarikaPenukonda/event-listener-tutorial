import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function BoxApp(){

    const [square,setSquare] = React.useState(boxes)
    
    /*
        Challenge : Create a toggle() function that logs "clicked" to the console.

        Pass that function down to each of the components and set it up so that
        when they get clicked it runs the function
    */

    function toggle(){
        console.log("Clicked!")
    }

    const boxElements = square.map(
        items =>(
            <Box
            key={items.id}
            on={items.on}
            toggle={toggle}
            />
        )
            
    )
    /*
        style prop - in react we are not going to use string "" the same way we 
        did in html, instead we are going to provide an object {}

        - {} does not represent an object it simply represents me entering into
        javascript outside of JSX or rather it allows me to put javascript inside
        of JSX 

        - since we need to represent style as an object we are going to use second set 
        of curly braces, this inner set of curly braces represents an object and outer
        set of curly braces represents going into javascript from JSX style{{}}

        - to avoid confusion we can create a seperate variable styles and set that
        to an object

        - we should use camel case for the object properties and also when i am 
        modifying the properties of a DOM element 
        eg : document.getElementById("something").style.backgroundColor = "red"
        similarly we use backgroundColor instead of background-color

    */
    return(
        <main>
            {boxElements}
        </main>
    )
}