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


// //Use map() to create an array where each element is a string showing its index and value.
// let numbers = ["apple","banana","cherry"];

// let result = numbers.map((fruit,index)=> {
//     return `Index: ${index}: ${fruit}`
// })

// console.log(result);


//Week-1 Task

// //1. Given an array of strings ["apple", "banana", "cherry"], use map() to convert all items to uppercase.
// //  Expected Output: ["APPLE", "BANANA", "CHERRY"]

// let fruits = ["apple", "banana", "cherry"];
// let upper = fruits.map(str=> str.toUpperCase());
// console.log(upper);


// //2.  Create an array of names ["john", "mary", "peter"] and use map() to return a new array where each name starts with a capital letter.
// // // Expected Output: ["John", "Mary", "Peter"]

// let arr = ["john", "mary", "peter"];
// let firstLetter = arr.map(f => f.charAt(0).toUpperCase() + f.slice(1));
// console.log(firstLetter);


// //3. Create an array of names ["adil", "thasmer", "ashfak"]
// // and use map() to return each name in the format:
// // "Hello, Adil!"
// // Expected Output: ["Hello, Adil!", "Hello, Thasmer!", "Hello, Ashfak!"]

// let names =  ["adil", "thasmeer", "samith"];
// let formatted = names.map(str =>"Hello, " + str.charAt(0).toUpperCase() + str.slice(1) + "!" ) ;
// console.log(formatted);



// //4. ## Number Transformation 
// // You are given an array of numbers:
// // const numbers = [2, 5, 8, 12];

// // - Write a function that returns the square of a number.
// // - Use this function to create a new array of squared numbers.
// // - Create a new array containing only the squared numbers that are greater than 50.
// // - Calculate the sum of all squared numbers.

// const numbers = [2, 5, 8, 12];
// let square = numbers.map(s => s * s);
// console.log(square);

// const filtered = square.filter(num => num > 50);
// console.log(filtered);

// const sum = square.reduce((a,b) => a+b);
// console.log(sum);




// // 5.  You have an array of products with their prices:
// // const products = [
// //   { name: "Shoes", price: 50 },
// //   { name: "Hat", price: 15 },
// //   { name: "Jacket", price: 120 },
// //   { name: "Socks", price: 5 }
// // ];

// // - Create a new array of product names.
// // - Create a new array of discounted prices (20% off for each product).
// // - Filter the products to get only those with a discounted price > 20.
// // - Calculate the total discounted price of all products.

// const products = [
//   { name: "Shoes", price: 50 },
//   { name: "Hat", price: 15 },
//   { name: "Jacket", price: 120 },
//   { name: "Socks", price: 5 }
// ];

// let productName = products.map(value => value.name);
// console.log(productName);

// let discount = products.map(dis => dis.price * 80 /100);
// console.log(discount);

// let discountPrice = discount.filter(val => val > 20);
// console.log(discountPrice);

// let discountSum = discount.reduce((a,b) => a+b);
// console.log(discountSum);




// //6. You have an array of orders from an online store:
// jsx  
// const orders = [
//   { id: 1, customer: "Alice", total: 250, status: "completed" },
//   { id: 2, customer: "Bob", total: 80, status: "pending" },
//   { id: 3, customer: "Charlie", total: 120, status: "completed" },
//   { id: 4, customer: "Dave", total: 300, status: "completed" },
//   { id: 5, customer: "Eve", total: 50, status: "pending" }
// ];



// *Tasks:*

// 1. Create a *new array* containing only the *totals of completed orders*.
// 2. Calculate the *sum of all completed order totals*.
// 3. Create a *new array of customer names* who have *completed orders with totals greater than 200*.
// 4. Combine steps 1–3 into *a single chain of methods*, if possible, without using any intermediate variables.
// 5. Write a *function* that, given an order object, returns a string like:
    

//     "Customer <name> has an order of $<total> and its status is <status>".
//     Use this function to *print all orders* to the console.
    
 const orders = [
  { id: 1, customer: "Alice", total: 250, status: "completed" },
  { id: 2, customer: "Bob", total: 80, status: "pending" },
  { id: 3, customer: "Charlie", total: 120, status: "completed" },
  { id: 4, customer: "Dave", total: 300, status: "completed" },
  { id: 5, customer: "Eve", total: 50, status: "pending" }
];


// 1. Create a *new array* containing only the *totals of completed orders
let completedOrder = orders.filter(a =>  a.status == "completed") .map(x => x.total );
console.log(completedOrder);

// 2. Calculate the *sum of all completed order totals*.
let sum = completedOrder.reduce((a,b) => a+b);
console.log(sum);

// 3. Create a *new array of customer names* who have *completed orders with totals greater than 200*.
let customer = orders.filter(a =>  a.status == "completed");

let result = customer.filter(a => a.total > 200).map(x => x.customer);
console.log(result);


