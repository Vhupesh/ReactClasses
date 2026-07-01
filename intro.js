//let fruits=["apple","orange"];
//fruits.push("mango");
//console.log(fruits[0]);

// const { response } = require("express");

// let stack=[];
// stack.push(1);
// stack.push(5);
// stack.push(99);
// console.log(stack);
// stack.pop();
// console.log(stack);


// let queue=[];
// queue.push("Apple");
// queue.push("orange");
// queue.push("Guava");
// console.log(queue);
// queue.shift();
// console.log(queue);

// let a=Number("jnk");
// console.log(a,typeof a);

// function add(a,b){
//     return a+b;
// }

// let a=add(25,25);
// console.log("The sum is: " + a);

// const mul=(a,b,c)=>{
//     return a*b*c;
// }

// console.log(mul(2,5,1));


// const person = {
//   name: "Bhupesh",
//   age: 21
// };
// console.log(person);
// console.log(person.name);

// hoisting
// console.log(a);
// //var a=90;
// // let a=55;
// const a=25;

//Global scope 
// let college="Nagarjuna";

// function display(){
//   console.log(college);

// }
// display();

//BlockScope
// {
//   let city="Janakpur";
//   // console.log(city);
// }
//  console.log(city);

//Local scope
// function display(){
//   let Name="Bhupesh";
//   console.log(Name);
// }
// display();

//Parameter and argument using arrow function
//  let sum=(a,b,c)=>{
//   console.log(a+b+c);

//  };

//  sum(25,65,50);

//closure

// function outer(){
//   let count=0;

//   function inner(){
//     count++
//     console.log(count)
//   }
//   return inner;

// }

// const counter=outer();
// counter();
// counter();
// counter();

// //Asynchronous Task
// console.log("Bhupesh");
// setTimeout(()=>{
//   console.log("Yadav");
// },10000);
// //console.log(2);
// console.log("Kumar");


// //Global Execution Phase:Memory creation Phase,Execution Phase
// let display=(a,b,c)=>{
//   return a*b*c;

// }

// console.log(display(25,1,4));

// //Memory Creation Phase
// //a-undefined
// //b-undefined
// //c-undefined
// //display()-function

// //Execution Phase
// //a=25 //b-1 //c-4
// //multiply-display()

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response=>response.json())
//   .then(data=>console.log(data));


// function college(){
//   let clgName="Nagarjuna college of IT";

//   function Name(){
//     let name="Bhupesh Kumar Yadav";
//     console.log("Name is:" +name + " Clg is "+ clgName);

//   }
//   return Name();

// }

// college();

// //Arrow Function
// let Display=(Name,Age)=>{
//   console.log("Name of the student is "+ Name);
//   console.log("Age is "+Age);

// }

// Display("Bhupesh Kumar Yadav",21);


//Palindrome using arrow function
//let string


// let display=(name,addresss)=>{
//    // name="Bhupesh";
//    // addresss="janakpur";
//     console.log("My name is "+name+" Address is "+ addresss);
// }
// display("Bhupesh","Janakpur")



 //IIFE:Immediately invoked Function Expression
//  (Function)({
//     console.log("object");
//  })();
 
//Anonymous:A function without Name

// const greet=function(){
//     let name="Bhupesh";
//     console.log("Good Morning "+name)
// };
// greet();


// let diff=function(a,b,c){
//     return a*b*c;
    
// }
// console.log(diff(25,50,9));


//callback function:A Function passed as argument

// let parent=(func)=>{
//     console.log("parent Mode");
//     func("function");

//     let child=(a)=>{
//         console.log("Child mode",a)
//     }

// };
// parent(child);

// let addition=(a,b,c)=>{
//     console.log("This is outer function");

//     let display=()=>{
//         return a*b*c;
//     }

//     l
// }
// console.log(addition(25,2,1,display()));

// let addition = (a, b, c) => {
//     console.log("This is outer function");

//     let display = () => {
//         return a * b * c;
//     };

//     return display();
// };

// console.log(addition(25, 2, 1));

// let addition = (a, b, c, callback) => {
//     console.log("This is outer function");

//     let result = a * b * c;

//     callback(result);
// };

// let display = (value) => {
//     console.log("Result =", value);
// };

// addition(25, 2, 1, display);

//Higher order function
//1.Take function as input
//2.return function as output
//3.both at the same time

// let addition = (a, b, c) => {
//     console.log("This is outer function");

//     let display = () => {
//         return a * b * c;
//     };

//    return display();
// };

// const parent=()=>{
//     console.log("parent");
//     const child=()=>{
//         console.log("This is child function");

//     };
//     return child;
// };
// const result=parent();
// result();


//  let addition = (a, b, c) => {
//     //console.log("This is Higher function");

//     let display = () => {
//         return a * b * c;
//     };

//    return display();
// };

// console.log(addition(25,25,1));
// //result(10,20,30);


console.log("Hello Bhupesh");
