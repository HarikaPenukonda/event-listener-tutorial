import React from "react";

export default function Star(props){
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return(
        <div>
            <img src={`/images/${starIcon}`}
                width={"20px"}
            />
        </div>
    )
}