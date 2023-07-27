import React from "react";

export default function Box(props){

    /*
        Challenge : Create state controlling whether box is "on" or "off".
        Use the incoming `props.on1 to determine the inital state.

        Create an event listener so when the box is clicked, it
        toggles from "on" to "off"

        Goal: clicking each box should toggle it on and off

    */

    const [light,setLight] = React.useState(props.on)

    function handleClick(){
        setLight(prevState => !prevState)
    }
    
    const styles = {
        backgroundColor : light ? "#222222" : "transparent"
    }
    return(
        <div 
            className="box" 
            style={styles}
            alt="box"
            onClick={handleClick}
            ></div>
            
    )
}