const array1 = [1,2,3]
const array2 = [10,20,30]

const combined = [...array1, 100, "hello", ...array2]
//console.log(combined) // [ 1, 2, 3, 100, 'hello', 10, 20, 30 ]

const info = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
}

// const fullInfo = [...info] // TypeError: info is not iterable
// const fullInfo = {
//     ...info,
//     language: 'javascript',
//     name: "Micheal", // overrides if spread operator is excuted first and update the value next
//     age: 100
// }
const fullInfo = {
    name: "Micheal", // will not override as the spread operator is executed after updating
    ...info,
    language: 'javascript',
    age: 100
}
//console.log(fullInfo)

function addNumbers(num1,num2,num3){
    
    return num1 + num2 + num3

}

const numbers = [10,20,30]

const total = addNumbers(...numbers)
console.log(total)