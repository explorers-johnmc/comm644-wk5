"use strict"


let randomResult = 0;
let userSelection = 0;

do{
//console.log(`${userSelection}`);
userSelection = parseInt(prompt("Rock, Paper Sissors; what you're choice? \n Rock => enter 1,\n Paper => enter 2,\n Sissors => enter 3") );

console.log(`${userSelection}`);


if (  (userSelection === 1) || (userSelection === 2) || (userSelection === 3) ) {break}; 
}
while (true)

console.log(`${userSelection}`);

randomResult = (Math.round(Math.random()  * 9 ) % 3) + 1; //output 1, 2, 3 randomly
console.log(`${randomResult}`)

if (userSelection == randomResult) {
     alert(".... Tie, you both choose the same object.")
   }
switch (userSelection) {
case 1:  { //Rock
    if (randomResult == 2) {
        alert("Sorry.... The Computer Won");
    }
    else if (randomResult == 3) {
        alert("Horray .... You Won!!!"); 
    }
    break;
    }
case 2:  {  //paper
    if (randomResult == 3) {
        alert("Sorry.... The Computer Won");
    }
    else if (randomResult == 1) {
        alert("Horray .... You Won!!!"); 
    }
    break;
    }
case 3:  {  //sissors
    if (randomResult == 1) {
        alert("Sorry.... The Computer Won");
    }
    else if (randomResult == 2) {
    alert("Horray .... You Won!!!"); 
    }
    break;
    }
default: {
    alert("Where's the need for Functions? Try again by clicking web page refresh"); 
    }

}