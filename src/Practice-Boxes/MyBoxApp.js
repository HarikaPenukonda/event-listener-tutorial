import React from "react";
import boxes from "./boxes";
import Box from "./Box"
export default function MyBoxApp(){

    const [squares, setSquares] = React.useState(boxes)

    function toggle(id){
        setSquares(prevSquares => {
            return squares.map((squares)=>{
                return squares.id === id ? {...squares, on : !squares.on} : squares
            })
        })
        
    }

    const boxElements = squares.map(prevState => (
        <Box
            key={prevState.id}
            // id={prevState.id}
            on={prevState.on}
            toggle={()=>toggle(prevState.id)}
        />
    ))
    return(
        <main>
            {boxElements}
        </main>
    )
}