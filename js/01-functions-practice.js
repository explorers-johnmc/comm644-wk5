//STEP 1
// function halfNumber(arg1) {
//     return (arg1 / 2);
// }

// selection1 = prompt("pick a number to be havled");
// let result = halfNumber(selection1).toFixed(3);
// console.log(`Half of ${selection1} is ${result}.`);

//STEP 2
// function squareNumber(arg1) {
//     return (arg1 * arg1);
// }

// selection1 = prompt("pick a number to be squared");
// let result = squareNumber(selection1).toFixed(3);
// console.log(`The result of squaring the number ${selection1} is ${result}.`);

//STEP 3
// function percentOf(arg1, arg2) {
//     return (arg1 / arg2) * 100; //for percentage
// }

// selection1 = prompt("pick two number, finding the what percentage the first is of the second number; Enter 1st number");
// selection2 = prompt("Second number; Enter 2nd number");
// let result = percentOf(selection1, selection2).toFixed(2);
// console.log(`${selection1} is ${result}% of ${selection2}.`);

//STEP 4

// function findModulus(arg1, arg2) {
//     let result = (arg1 % arg2) ; //find the remainder
//     console.log(`${result} is the modulus (remainder) of ${arg1} and ${arg2}.`);
// }
// selection1 = prompt("Find the Modulus (remainder); pick two number, quoticent => Enter 1st number");
// selection2 = prompt("Second number; divisor =>  Enter 2nd number");
// findModulus(selection1, selection2);

//STEP 5
// function sumOfListOfNumber(objectList) {
//     let ourSum = 0;
//     console.log(`objectList.length is ${objectList.length}.`);
//     console.log(`arguments.length is ${arguments.length}.`);
//     for(let idx = 0; idx < objectList.length; idx = idx + 3) {
//         ourSum +=  Number(objectList[idx]);
//     }
//     return ourSum;
// }
// //let tempString = `"2, " + "3, " + "4, " + "20" ';
// //console.log("The sum is: " + sumOfListOfNumber( 2, 2, 3, 4, 20 ) );
// let stringList = prompt(" create your list of numbers; 0-9, sepearted by a comma each time aka 1, 2, 3 etc /n Create your list:");
// let myArray = [];
// myArray = stringList;
// console.log(`The stringList is; ${stringList}` );
// console.log(`The myArray is; ${myArray}` );
// console.log("The sum is: " + sumOfListOfNumber( `${myArray}` ) );
