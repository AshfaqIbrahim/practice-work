// //Synchronous
// let a = "1st";
// let b = "2nd";
// let c = "3rd";

// console.log(a);
// console.log(b);
// console.log(c);

// //Asynchronous
// let x = "1st"
// setTimeout(() => {
//     console.log("2nd");
// },2000) //here it waits 2 seconds and makes it asynchronous.
// let y = "3rd";  //here it will run after running x, because 2nd is a asynchronous and runs after 2 seconds

// console.log(x);
// console.log(y);

////****************************************************************************************************************

// // Strict mode
//  "use strict"
//  a = 5; //here a is not defined so it will give a  ReferenceError: a is not defined
//  let b = 4;
//  let res = a + b;
//  console.log(res);

//  //Regular mode
//  x = 6;
//  y = 4;
//  result = x + y;
//  console.log(result);

// // Strict mode in Function
// function strictFunction(){
//     "use strict"
//     fullName = "Ashfaq"
//     console.log(fullName);
// }
// strictFunction();

// function regularFunction(){
//     fullName = "Ashfaq";
//     console.log(fullName);
// }
// regularFunction();

////****************************************************************************************************************

// //Callstack
// function first(){
//     console.log("1st task");
//     second()
//     console.log("1st is completed");
// }

// function second(){
//     console.log("2nd task");
//     third();
//     console.log("2nd is completed");
// }

// function third(){
//     console.log("3rd task");
// }

// first();

////****************************************************************************************************************

// //Temporal Deadzone (TDZ)

// // 1. var
// console.log(a);
// var a = 10;
// console.log(a);

// //working of this
// var a;  //declaration is hoisted and initialized as 'undefined'
// //TDZ of a
// //TDZ of a
// console.log(a);  // printing a in TDZ (output = undefined)
// //TDZ of a
// //TDZ of a
// a = 10;  //initialized a value to a
// console.log(a);  //printing the variable a (output = 10)

// // 2. let and const
// console.log(b);
// let b = 20;
// console.log(b);

// //working of this
// let a;  //declaration is hoisted
// //TDZ of a
// //TDZ of a
// console.log(a);  // printing a in TDZ (output = ReferenceError(because the  is stuck in TDZ))
// //TDZ of a
// //TDZ of a
// a = 10;  //initialized a value to a
// console.log(a);  //printing the variable a (output = 10)

////****************************************************************************************************************

// //Exception handling
// // let num = 2
// try{
//     let result = 10/num;
//     console.log(result);
// }

// catch(err){
//     console.error("Error name: ",err.name);
//     console.error("An error occured: ",err.message);
// }

// finally{
//     console.log("Code succesfully completed");
// }

// // 2. CheckAge
// function checkAge(age){
//     try{
//         if(age<18){
//             throw new Error("Oops...You're under 18 year old!")
//         }else{
//             console.log("You're eligible to vote");
//         }
//     }
//     catch(err){
//         console.log("Caught error: ",err.message);
//     }
//     finally{
//         console.log("Code succesfully completed");
//     }
// }
// checkAge(9);

////****************************************************************************************************************

// // Shadowing

// var mesasge = "Hello, world!"   //global 'var' variable

// function shadowing(){
//     let message = "Hey guys, how are you!"  //'let' variable shadows or hides 'var' global variable
//     console.log(mesasge);
// }
// shadowing();

// // Illegal shadowing
// let a = 10;
// {
//     var a = 15;
//     console.log(a);
// }
// console.log(a);

////****************************************************************************************************************

// //Class
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     //methods
//     greet(){
//         this.greeted = true;
//         return `Hello, I am ${this.name}.`;
//     }

//     //getter
//     get status(){
//         return `${this.name} is currently learning MERN stack in Bridgeon.`;
//     }
//     //static
//     static describe(){
//         return `${person1.name} is a handsome ${person1.age} year old guy`;
//     }
// }

// let person1 = new Person("Ashfaq", 22);
// console.log(Person.describe());

////****************************************************************************************************************

// //Shallow copy

// let employee = {
//     id : 101,
//     name : {firstName : "Ibrahim", lastName : "Ashfaq"},
//     salary : 100000
// }

// let newEmployee = {...employee};
// newEmployee.name.firstName = "Mohammed";

// console.log("Employee: ", employee);
// console.log("****************************************");
// console.log("New Employee: ",newEmployee);

// //Deep copy
// let employee = {
//     id : 101,
//     name : {firstName : "Ibrahim", lastName : "Ashfaq"},
//     salary : 100000
// }

// let newEmployee = JSON.parse(JSON.stringify(employee));
// newEmployee.name.firstName = "Mohammed";

// console.log("Employee: ", employee);
// console.log("****************************************");
// console.log("New Employee: ",newEmployee);

////****************************************************************************************************************


// //Instance
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// //Instances of Person
// let peron1 = new Person("Ashfaq",22)
// let peron2 = new Person("Mahroof",4)
// console.log(peron1);
// console.log(peron2);


//Allocation
let num = 10; //here JS engine allocated memory for num 

