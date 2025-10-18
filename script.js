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



function Person(name, age){
    this.name = name;
    this.age = age;
    this.city = "Kasaragod"
    
}

let person1 = new Person("Ashfaq",22);
console.log(person1);
