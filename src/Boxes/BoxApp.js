import React from "react";
import boxes from "./boxes";

export default function BoxApp(props){

    const [square,setSquare] = React.useState(boxes)
    
    /*
        Challenge : use a ternary to determine the backgroundColor
        If darkMode is true, set is to #222222
        If darkMode is false, set it to #cccccc
    */
    const styles = {
        backgroundColor : props.darkMode ? "#222222" : "#cccccc"
    }

    const boxElements = square.map(
        items => (
            <div 
            className="box" 
            key={items.id}
            style={styles}
            ></div>
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