/*
    Rest operator 

    The rest operator is used to store the "remaining" (the rest) values of a 
    collection (arrays or objects) into another collection
*/

// 1. Rest operator using Arrays

const array = [1,2,3,4,5,6]
// destructing
// const [first,second] = array
// console.log(first)
// console.log(second)

// destructing and using of rest operator
const [first, second, ...remainingValues] = array
console.log(remainingValues) // [ 3, 4, 5, 6 ]

// 2. Rest operator using objects -> the key properties should match, otherwise data is not iterable

const data = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
}
const {name, height, ...values} = data 
console.log(name)
console.log(height)
console.log(values)

// 3. Rest operator using function arguments

function getNumbers(num1, num2, ...remainingArguments){
    console.log(remainingArguments)
}

getNumbers(10,2,5,43,2,3,4,3)