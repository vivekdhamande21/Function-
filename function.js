//Qs. Create a function to print a poem

function printPoem(){
    console.log('Twiankle Twinkle little star how are wonder what you are up above the world so high like a dimond in the sky ');
}
printPoem();


//Qs. Create a Function to roll a dice & always displays the value of the dice (1 to 6) 

function rollDice (){
    let random = Math.floor(Math.random()*6)+1; 
    console.log(random);
}
rollDice();
rollDice();
rollDice();


//Passing Arguments 
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("Vivek",21);
printInfo(21,"Vivek",);
printInfo("Vivek");
printInfo(21);


//Sum of two numbers
function sum(a,b){
    console.log(a+b);
    console.log(a,b);
}
sum(1,2);
sum(45555,677777);


//Qs. Create a Function that gives us the average of 3 numbers.
function average(a,b,c){
    let avg =( a+b+c)/3;
    console.log(avg);
}
average(1,2,3);


//Qs. Create a Function that prints the multiplication table of a number

function table(n){
  for (let index = 1; index < 11; index++) {
        console.log(index*n); 
  }
}
table(2);
table(14);


//Return Keyword
// return keyword is used to return some value from the function.

function  summation(a,b){
    return a+b;
}
summation(1,2);
console.log(summation(summation(1,2),3));

function isAdult(age){
    if(age>=18){
        return "adult";
    }else{
        return "Not adult"
    }
    console.log("Bye Bye");
}
isAdult(19);


//Qs. Create a function that returns the sum of numbers from 1 to n.

function returnSum(n){
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        sum = sum+n;
    }
    return sum;
}
returnSum(3);