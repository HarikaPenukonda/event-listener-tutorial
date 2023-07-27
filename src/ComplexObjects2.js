import React from "react";
import Star from "./Star";

export default function ComplexObjects(){
    const [contact, setContact] = React.useState({
        "firstName" : "John",
        "lastName" : "Doe",
        "phone" : "+1 (123) 456 7890",
        "email" : "itsantihero@taylorswift.com",
        "isFavourite" : false
    })

    /*
        Challenge : Move the star image into its own component
            - It should recieve a prop called `isFilled` that it uses to
            determine which icon it will display
            - Import and render that component, passing the value `isFavourite` to the 
            new `isFIlled` prop.
    */

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
                    isFilled={contact.isFavourite} handleClick={toggleFavourite}
                />
                {/* Our conundrum is that we have a child component<Star/> that is recieving
                the value of `isFavourite` through props but it is not receiving the ability
                to change that state.
                How can i give my child compoenent<Star/> the abilty to make changes to the state
                that lives inside the parent component <ComplexObjects2/> 
                
                Solutions :
                    if i provide onClick={toggleFavourite} in <Star/> it quite doesnt work
                    why do you think that this isnt just enough to work?
                        -   when we have a component that we created (custom component), all 
                        of the properties that we pass it are custom properties. So simply
                        putting onClick here doesn't magically register as an event listener.
                        The onClick attribute needs to exist on native DOM elements like <img/>,
                        <button/> etc (lower case letters).

                        - That is because these are what will actually get created into real DOM 
                        elements by react.

                        - However Star with `S` is not a real DOM element instead what is happening 
                        in React is looking at the Star component and rendering the <img/>, and this 
                        image has the ability to recieve an onClick event listener

                        - the onClick in child component is just a custom prop that happensto be called
                        the same name as the event listener

                        - often times we can change it to `handleClick` which is obvious that it is 
                        not a native event listener and then pass over in our Star.js we can add an actual
                        onClick event listener and the value of onClick will be function that comes 
                        from props.handleClick.

                        - In this case that ComplexObjects component is passing the `toggleFavourite`
                        function to a child component and allowing the child component to run it 
                        whenever a certain event like click even happens.

                        - However, it is important to know to note that the context in which the `toggleFavourite`
                        function exists is still in the parent which means that it can change the
                        state that lives inside the parent.
                
                */}
                <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}