import React from "react";
import Star from "./Star";

export default function ComplexObjects(){
    const [contact, setContact] = React.useState({
        "firstName" : "John",
        "lastName" : "Doe",
        "phone" : "+1 (123) 456 7890",
        "email" : "itsantihero@taylorswift.com",
        "isFavourite" : true
    })

    /*
        Challenge : Move the star image into its own component
            - It should recieve a prop called `isFilled` that it uses to
            determine which icon it will display
            - Import and render that component, passing the value `isFavourite` to the 
            new `isFIlled` prop.
    */

    let starIcon = contact.isFavourite ? "star-filled.png" : "star-empty.png"

    function toggleFavourite(){
        setContact(prevContact => ({
            ...prevContact,
            isFavourite : !prevContact.isFavourite
         })
        )
    }

    return(
        <main>
            <article className="card">
                <img src="./images/img_avatar.png"
                    className="card--image"
                />
                <div className="card--info">
                <Star
                    isFilled={contact.isFavourite}
                />
                <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}