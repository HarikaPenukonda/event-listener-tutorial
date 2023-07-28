import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function BoxApp(){

    const [square,setSquare] = React.useState(boxes)

    function toggle(id){
        setSquare(prevSquares => {
            return prevSquares.map((square)=>{
                return square.id === id ? {...square, on:!square.on} : square
            })
        })
    }

    const boxElements = square.map(
        items =>(
            <Box
            key={items.id}
            id={items.id}
            on={items.on}
            toggle={toggle}
            />
        )
            
    )

    /*
            From the above code changes, when each box was initializing its 
            own state it was really simple to know which box was flipping its value 
            because each value is maintaining its own state.

            However, with our toggle function, the toggle function has no idea which
            box just ran its code.

            So in my BoxApp component if i want to use `setSquare`, because square
            is an array, we need to figure out which of the items in the array triggered
            set squares so that we can update the correct one and leave all the other ones
            exactly how they were.

            Our goal is to give the toggle function the ability to know which box was clicked
            so that we can correctly update the state array

            one way we could do that is to make it so that the toggle function takes the
            id of the box as parameter
                function toggle(id){
                    console.log("clicked")
                }
                However, as its currently set up this is not going to work. That is because 
                in our onClick in Box.js we really dont get to decide what parameter gets passed
                to our function.

                Every browser will pass an event handler function, the event itself, its an
                event object that describes a bunch of information about the event.

                if we console.log(id) - if we click a box it logs "SyntheticBaseEvent" instead of
                the id value.

                we can work around this by instead of just blindly running props.toggle in Box.js
                we can run our own function which then runs props.toggle()
                    onClick={()=>props.toggle()}
                This function can run props.toggle() and we have the ability to pass whatever
                we want in here.

                We should pass is that the `id` of the box. But, currently we are not recieving
                that id, sure we have key prop. But the key prop is really intended for something 
                completely different. if we try to access the key prop i.e, console.log(props.key)
                in Box.js we are going to get bunch of undefined's

                We can pass another prop id={square.id} which is exactly the same thing, now 
                we do have access in Box.js, if we console.log(props.id) it logs 1,2,...6 
                
                Now we use props.id to pass that information pass the id to my toggle function
                Now in the BoxApp.js we console.log(id) it logs the id of the respective Box.

            Now we can use the id to update the correct square in the setSquare function.



    */
    
    return(
        <main>
            {boxElements}
        </main>
    )
}

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