
/*  Map function 
    1. Get array of all names
    2. Get array of all heights
    3. Get array of objects with just name and height poperties
    4. Get array of all first names

    map function will iterate through each item in the array and it allows us to transform each item in some way
    so the result will another array with a transformed item from each one of the original items in the array
*/ 

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// 1. Get array of all names
/*
    in map method, for each character return character.name
    map function will take a callback function and in that callback function we have defined our parameters
    in that callback function we show how to transform that individual item to a new one in the resulting arrar
*/
const names = characters.map(characters => characters.name)
console.log(names)

// Get array of all heights
const height = characters.map(values => values.height)
console.log(height)

// Get array of objects with just name and height properties
/*
    for each character we want to return an object so in this object, we have to have a name property and height property
    since it is an object wrap in (), this is an implicit return happen to be object
*/
const data = characters.map(characters => (
    {names: characters.name, height: characters.height}
))
console.log(data)

// Get array of all first names
const firstNames = characters.map(characters => characters.name.split(" ")[0])
console.log(firstNames)