/*
    Spread operator (...)
    1. can make copies only one level deep i.e, is not suitable for multiple levels

    The Spread operator written as ..., is used to spread an iterable collection (object or array) into individual 
    elements seperated by comma.
*/

/*
    spread operator on arrays , take every item inside of array and spread it out and copy it over into this new array - copyNames
*/
const names = ["Archie","Betty","Charlotte","Daniel","Eric"]
const copyNames = [...names]
console.log(copyNames) // [ 'Archie', 'Betty', 'Charlotte', 'Daniel', 'Eric' ]

/*
    spread operator on objects , key-value pairs
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

const newCopy = {...characters}
console.log(newCopy)