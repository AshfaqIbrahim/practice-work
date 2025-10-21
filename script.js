//This JS file has a lot of practice work. If you want to check some codes comment down rest of the code and run it.
//Thank you

// //Postition of i and j
// let rows = 5;
// let a = "";
// for(i=1;i<=rows;i++){
//     for(j=1;j<=rows;j++){
//          a+= `(${i} ${j})`
//     }
//     a+="\n";
// }
// console.log(a);

// //Print hollow square pattern
// let rows = 5;
// let a = "";
// for(i=1;i<=rows;i++){
//     for(j=1;j<=rows;j++){
//          if (i==1 || j==5 || i==5 || j==1) {
//             a+="* ";
//          }else{
//             a+="  ";
//          }
//     }
//     a+="\n";
// }
// console.log(a);

// //Number from 1 to 10
// for(i=1;i<=10;i++){
//    console.log(i);
// }

// //All even numbersd from 1 to 20
// for(i=2;i<=20;i++){
//    if(i%2==0){
//       console.log(i);
//    }
// }

// //Numbers from 10 down to 1 using while loop
// let num = 11;
// while(num > 1){
//    num--;
//    console.log(num);
// }

// //First 5 multiples of 3 using for loop
// let num = 3;
// for(i=1;i<=5;i++){
//    console.log(num + " * " +i+ " = " + (num*i));
// }

// //print "Hello Bridgeon" 5 times using do while loop
// let num = 5;
// do{
//    console.log("Hello Bridgeon");
//    num--;
// }
// while(num>=1)

// for in and for of loops in array

// let arr = ["apple", "banana", "Cherry"];

// for(let i of arr){
//     console.log(i);

// }

// for (let key in arr){
//     console.log(key);

// }

// // Foreach in array
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(double);
// console.log(arr);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// let arr = ["apple", "banana", "cherry", "grapes"];

// arr.forEach(capitalize);
// arr.forEach(display);

// function display(element){
//     console.log(element);

// }

// function upperCase(element,index,array){
//     array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// //Map method

// let fruits = ["Apple","Banana","Mango"];
// let fruitsUpper = fruits.map(upperCase);
// console.log(fruitsUpper);

// let fruitsLower = fruits.map(lowerCase);
// console.log(fruitsLower);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// let num = [2, 4, 6, 8];
// let num2 = num.flatMap(double);

// console.log(num);
// console.log(num2);

// function double(element, index, array){
//     return element * 2;
// }

// let dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// // console.log(dates);

// let result = dates.map(formatedDates);
// console.log(result);

// function formatedDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }

// //Flat map

// let num = [1,2,3,4,5];
// let newNum = num.flatMap(x => [x * 2]);
// console.log("Doubbled the value: ");
// console.log(newNum);

// let num2 = [1,3,5,7,9];
// let newNum2 = num2.flatMap(y => [y * 3]);
// console.log("Trippled the value: ");
// console.log(newNum2);

// // Array filter

// let num = [10,20,30,40,50];
// let result = num.filter(greaterThan);
// console.log(result);

// let result2 = num.filter(lesserThan);
// console.log(result2);

// function greaterThan(element,index,array){
//     return element > 30;
// }

// function lesserThan(element, index, array){
//     return element < 30;
// }

// //Array reduce

// let num = [10,20,30,40,50];
// let result = num.reduce(sum,50);
// console.log(result);

// function sum(total, element){
//     return total + element;
// }

// let cars = ["BMW", "Mercedes", "Porsche"]

// // ADDED VALUES FROM LEFT TO RIGHT
// let result  = cars.reduce(added);
// console.log(result);

// // ADDED VALUES FROM RIGHT TO LEFT
// let result2 = cars.reduceRight(added);
// console.log(result2);

// function added(total, element){
//     return total + element;
// }

//Array every - Checks if every array elements passes the test

// let num = [12,15,55,18,23,43];
// let result = num.every(greaterThan);
// console.log(result);

// function greaterThan(element, index, array){
//     return element > 18;
// }

// //Array some - Checks if some of the array elements passes the test

// let num = [12,34,16,18,24];
// let result = num.some(greaterThan)

// function greaterThan(element, index, array){
//     return element > 18;
// }

// //Array from
// let text = "ABCDEF";

// let result = Array.from(text);
// console.log(result);

// let num = [1,2,3,4,5];
// let result = Array.from(num,(x) => x*2);
// console.log(result);

// //Callback function
// function greet(name,callback){
//     console.log("Hello " +name);
//     callback();
// }

// function sayBye(){
//     console.log("GoodBye!");
// }
// greet("Ashfaq",sayBye);

// //One more examplee for callback function
// function sum(callback, a, b){
//     let result = a + b;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }

// sum(display, 5, 3);

// //Object using Object Constructor
// function Person (name,age,city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// //create multiple objects using the constructor
// let person1 = new Person("Ashfaq",22,"Kasaragod");
// let person2 = new Person("Ibrahim",20,"Mangalore");

// console.log(person1.name);
// console.log(person1.age);

// console.log(person2.city);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.city = "Kasaragod"

// }

// let person1 = new Person("Ashfaq",22);
// console.log(person1);

////****************************************************************************************************************

// // Array destructuring

// //Basic destructuring
// const arr = [1,2,3,4,5];
// const [a,b,c] = arr;

// console.log(a);
// console.log(b);

// //Skip elements in Array destructuring using comma(,)
// const fruits = ["Apple", "Banana", "Mango", "Cherry"];
// const [fruit1, , fruit3, fruit4] = fruits;   //skipped banana using comma(,)

// console.log(fruit1);
// console.log(fruit3);
// console.log(fruit4);

// //Default values in Array destructuring
// const cars = ["BMW", "Mercedes", "LandRover"];
// const [car1, car2, car3, car4="Porche"] = cars;   //Here it searches for car4 in the array first and if it is not available it returns thedefault value that we have given. if i give car3 a default value, it will not return the default value because, car3 already has a value inside the array

// console.log(car1);
// console.log(car2);
// console.log(car4); //prints default value

// //Swapping values in Array destructuring (It's a perfect swapping without a temporary variable)
// let x = 10;
// let y = 20;

// [x,y] = [y,x];  //now x is 20 and y is 10
// console.log(x);
// console.log(y);

////****************************************************************************************************************

// //Object destructuring
// const person = {
//     name : "Ashfaq",
//     age : 22,
//     city : "Ksd"
// }

// const {name:userName, age, city} = person; //here, variable name must match the property name(key),
// //you can also rename the key of here {name : userName, age : personAge, city : place }

// console.log(userName);
// console.log(city);

// //Default values in Object destructuring
// const person = {
//     name : "Ashfaq",
//     age : 22,
// }

// const {name, age, city = "Ksd"} = person;
// //here i gave a default value to 'city' and when the runtime it checks if the object has 'city', if not exist it will return default value 'Ksd'.

// console.log(name);
// console.log(age);
// console.log(city);

// //Nested object destructuring
// const employee = {
//     id : 101,
//     details : {
//         firstName : "Ibrahim",
//         lastName : "Ashfaq"
//     }
// };

// const {details : {firstName, lastName}} = employee;
// console.log(firstName);
// console.log(lastName);

////****************************************************************************************************************

// //Method in JS
// // A function inside an objecvt is known as 'Method'

// const person = {
//     name : "Ashfaq",
//     age : 22,
//     greet : function (){
//         console.log("Hello, " +this.name);
//     }
// }

// person.greet();

// //Adding method after creating the Object
// person.sayBye = function (){
//     console.log("Goodbye, "+this.name);
// }
// person.sayBye();

////****************************************************************************************************************

// //Closure in JS

// function outer(){
//     let message = "Hello Ashfaq!"

//     function inner(){
//         console.log(message);
//     }
//     return inner;
// }
// let greet = outer();
// greet();


// //Higher order functionn

// function greet(name, formatter) {
//   console.log(formatter(name));
// }

// function upperCase(name) {
//   return name.toUpperCase();
// }

// function lowerCase(name){
//   return name.toLowerCase();
// }

// greet("Ashfaq", upperCase); //greet is the higher order function (because greet takes another function as an argument)
// greet("Ibrahim", lowerCase);



// function add(a,b,formatter){
//   console.log(formatter(a,b));
// }

// function addition(a,b){
//   return a + b;
// }

// add(5,3,addition); //add is the higher order function, it takes addition function as a parameter.



//Ex 2 : Function returning another funnction

// function multiplyBy(factor){
//   return function (num){
//     return num * factor;
//   }
// }

// const double = multiplyBy(2);
// console.log(double(5));


// function greet(name){
//   return function (){
//     return name.toUpperCase();
//   }
// }

// const upper = greet("ashfaq");
// console.log(upper());


////****************************************************************************************************************

// //Pure function
// function add(a, b){
//   return a + b;
// }
// console.log(add(5,5));
// console.log(add(5,5));  //This is pure function becasue the result will always the same


// //Impure function
// let total = 0;
// function addToValue(value){
//   total += value; //Changes the external variable value
//   return total;
// }
// console.log(addToValue(5));
// console.log(addToValue(5)); //This is an impure function becasue the result will be different everytime


////****************************************************************************************************************

// //LocalStorage
// let key = prompt("Enter a key that you want to set: ");
// let value = prompt("Enter a value that you want to set to the key");

// localStorage.setItem(key, value);
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// //getItem()
// console.log(localStorage.getItem("name"));


// //removeItem()
// localStorage.removeItem("city");


// //key()
// console.log(localStorage.key(1));


// //length
// console.log(localStorage.length);


// //clear()
// localStorage.clear();


// //SessionStorage
// let key = prompt("Enter a key that you want to set: ");
// let value = prompt("Enter a value that you want to set to the key");

// localStorage.setItem(key, value);


// //storageEvent
// window.onstorage = (a) => {
//   alert("Changed something!")
//   console.log(a);
// }


////****************************************************************************************************************


// //call() 
// let name = {
//   firstname : "Ibrahim",
//   lastname : "Ashfaq"
// }
// let fullName = function(city,state){
//   console.log(this.firstname +" "+ this.lastname +" "+ "from" +" "+ city +", "+ state);
   
// }
// fullName.call(name,"Ksd","Kerala");



//  //apply
// let name2 = {
//   firstname : "Ibrahim",
//   lastname : "Ashfaq"
// }
// let fullName = function(city,state){
//   console.log(this.firstname +" "+ this.lastname +" "+ "from" +" "+ city +", "+ state);
   
// }
// fullName.apply(name2, ["Kjr", "Kerala"]);


// // bind
// let name = {
//   firstname : "Ibrahim",
//   lastname : "Ashfaq"
// }

// let fullName = function(city){
//   console.log(this.firstname + " " + this.lastname +" from "+ city);
// }

// let result = fullName.bind(name, "delhi");
// result();


////****************************************************************************************************************


//Map in Object
let userMap = new Map();

//Setting ket value pairs
userMap.set("name", "Ashfaq");
userMap.set("age", 22);
userMap.set("city", "Kasaragod");




// //Retrieve value
// console.log(userMap.get("name"));

// //Check existence
// console.log(userMap.has("age"));

// //Size of map
// console.log(userMap.size);


// //Remove element from map
// console.log(userMap.delete("city")); //city has been removed

// //clear all
// console.log(userMap.clear()); //clears everything 


////Using for of loop to get key and value
// for(let [key,value] of userMap){
//   console.log([key,value]);
// }



// //Number as key
// let map1 = new Map();
// map1.set(1, "One");
// map1.set(2, "Two");

// console.log(map1.get(1));


// //String as key
// let map2 = new Map();
// map2.set("name", "Ashfaq");

// console.log(map2.get("name"));


// //Boolean as key
// let map3 = new Map();
// map3.set(true, "Yes");
// map3.set(false, "No");

// console.log(map3.get(true));


// //Object as key
// let map4 = new Map();
// let user = {id:1, name:"Ashfaq"};
// map4.set(user,"User details stored");

// console.log(map4.get(user));


// //Arry as key
// let map5 = new Map();
// let arr = [1,2,3];

// map5.set(arr,"Array values stored");
// console.log(map5.get(arr));


// //Function as key
// let map6 = new Map();
// function greet(){
//   return "Hello"
// }

// map6.set(greet, "This is a function")
// console.log(map6.get(greet));


////****************************************************************************************************************

// //Sets in JS

// let set = new Set();

// //Add values
// set.add("Apple");
// set.add("Banana");
// set.add("Mango");
// set.add("Grapes")

// //delete value
// console.log(set.delete("Banana")); //removed banana
// console.log(set);

// //Check existence of a value
// console.log(set.has("Apple"));

// //Size of set
// console.log(set.size); //3 because "banana" has been deleted

// //Clear all elements
// console.log(set.clear());


//Iteration over Set
//Using for..of

// for(let value of set){
//   console.log(value);
// }

// //Using forEach
// set.forEach(function(value){
//   let result = value.toUpperCase();
//   console.log(result);
// });
 

// //values()
// console.log(set.values());


// //keys()
// console.log(set.keys());


// //entries()
// console.log(set.entries());


