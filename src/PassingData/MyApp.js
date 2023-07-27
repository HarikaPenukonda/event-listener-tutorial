import React from "react";
import Body from "./Body";
import Header from "./Header"

export default function MyApp(){
    const [user,setUser] = React.useState("Joe")
    return(
        <div>
            <Header
                user={user}
            />
            <Body
                user={user}
            />
        </div>
    )
}