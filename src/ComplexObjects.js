import React from "react";

export default function ComplexObjects(){
    const [contact, setContact] = React.useState({
        "firstName" : "John",
        "lastName" : "Doe",
        "phone" : "+1 (123) 456 7890",
        "email" : "itsantihero@taylorswift.com",
        "isFavourite" : false
    })

    /*
        Challenge 2 : Use a ternary to determine which star image filename
        should be used based on `contact.isFavourite` property

        `true` => "star-filled.png"
        `false => "star-empty.png"

        let starIcon = // you code
    */

    let starIcon = contact.isFavourite ? "star-filled.png" : "star-empty.png"

    function toggleFavourite(){
        setContact(prevState => !prevState)
    }

    return(
        <main>
            <article className="card">
                <img src="./images/img_avatar.png"
                    className="card--image"
                />
                <div className="card--info">
                <img src={`/images/${starIcon}`}
                    width={"20px"}
                    onClick={toggleFavourite}/>
                <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}