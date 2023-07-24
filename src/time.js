/*
    Challenge: complete the function below
    Given a name, return "Good <timeOfDay>, <name>!" depending
    on the current time of day.


    Hint: you can get the current time of day by using:
        const date = new Date()
        const hours = date.getHours()

        4am - 11:59 am, "morning"
        12pm - 4:59 pm, "afternoon"
        5pm - 7:59 pm, "evening"
        8pm - 3:59am, "night"
*/

const date = new Date()
const hours = date.getHours()
//console.log(hours) // 15

let timeOfDay
if(hours > 4 && hours < 12 ){
    timeOfDay = "morning"
}else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
}else if (hours>=17 && hours<20){
    timeOfDay = "evening"
}else {
    timeOfDay = "night"
}

function greeting(name){
    // name="Archie" -> Good afternoon, Archie
    return console.log(`Good ${timeOfDay}, ${name}`)
    
}

greeting("Bob")

