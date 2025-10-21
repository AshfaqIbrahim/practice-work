// //Basic level
// //1. Write an arrow function add that takes two numbers and returns their sum.
// let add = (a,b) => {
//    return a + b;
// }
// console.log(add(6,4));

// //2. Convert this regular function to an arrow function:
// // function greet(name) {
// //   return "Hello " + name;
// // }
// let greet = name => {
//     return "Hello " + name;
// }
// console.log(greet("Ashfaq"));

// //3. Create an arrow function that takes a name and logs "Welcome <name>".
// let welcome = name => {
//     console.log("Welcome " + name);
// }
// welcome("Ashfaq");

// //4. Write an arrow function square that returns the square of a number.
// let square = num => {
//     return num*num;
// }
// console.log(square(5));

// //5. Write an arrow function that checks if a number is even.
// let even = num => {
//     if(num%2==0){
//         return "It is an even number!"
//     }else{
//         return "It is not an even number!"
//     }
// }
// console.log(even(10));
// console.log(even(9));

// //Intermediate level
// //6. Write an arrow function getFullName that takes first name and last name and returns the full name.
// let fullName = (firstname, lastname) => {
//     return firstname + lastname;
// }
// console.log(fullName("Ibrahim ", "Ashfaq"));

// //7. Write an arrow function multiply that takes an array of numbers and multiplies each element by 2 (use map).

// let multiply = element => {
//     return element.map(double);
// }      

//     function double(element){
//         return element * 2;
//     }

// console.log(multiply([1,2,3,4]));


// //8. Create an arrow function filterEven that filters even numbers from an array.
// let filterEven = arr => {
//     return arr.filter(filtered)
// }

// function filtered(element){
//     return element%2==0;
// }
// console.log(filterEven([1,2,3,4,5,8]));


// //9. Write an arrow function findMax that finds the largest number in an array using reduce.
// function findMax(arr) {
//     return arr.reduce(function(max, current) {
//         return current > max ? current : max;
//     });
// }

// console.log(findMax([3, 7, 2, 9, 5]));
////****************************************************************************************************************



//Array map method

// //Double Every Number
// let numbers = [1,2,3,4,5];
// let result = numbers.map(num =>{ 
//    return num * 2
// });
// console.log(result);        


// //Convert to Strings
// let numebrs = [1,2,3];

// let result = numebrs.map(num => {
//     return ""+num;
// });
// console.log(result);


// //Extract property from object 
// let users = [
//     {name: "Ashfaq", age: 22},
//     {name: "Simran", age: 21},
//     {name: "Zara", age: 11},
// ]

// let result = users.map((user,year) => {
//     return user.name + " " + user.age
// });

// console.log(result);


// //Use map() and filter() together to get squares of even numbers.
// let numbers = [1,2,3,4,5,6];

// let result = numbers.filter(num => num%2===0).map(num => num *num); 

// console.log(result);


//Use map() to create an array where each element is a string showing its index and value.
let numbers = ["apple","banana","cherry"];

let result = numbers.map((fruit,index)=> {
    return `Index: ${index}: ${fruit}`
})

console.log(result);
