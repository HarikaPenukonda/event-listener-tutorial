import React from "react";

export default function ComplexObjects(){
    const [contact, seContact] = React.useState({
        "firstName" : "John",
        "lastName" : "Doe",
        "phone" : "+1 (123) 456 7890",
        "email" : "itsantihero@taylorswift.com",
        "isFavourite" : false
    })

    /*
        Challenge : Fill in the values in the markup
        using the properties of our state object above
    */

    function toggleFavourite(){
        console.log("Toggle Favourite")
    }

    return(
        <main>
            <article className="card">
                <img src="./images/img_avatar.png"
                    className="card--image"
                />
                <div className="card--info">
                <img src="./images/star.png"
                    width={"20px"}
                    onClick={toggleFavourite}
                />
                <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}