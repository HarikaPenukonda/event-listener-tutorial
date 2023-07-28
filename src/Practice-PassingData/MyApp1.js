import React from "react";
import Header from "./Header";
import Body from "./Body";

export default function MyApp1(){
    const [user, setUser] = React.useState("Joe")
    return(
        <main>
            <Header
                user={user}
            />
            <Body
                user={user}
            />
        </main>
    )
}