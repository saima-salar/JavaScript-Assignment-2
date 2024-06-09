// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let array=[[]];

// Declare and initialize a multidimensional array
// representing the following matrix:

                                           
// let matrix = [                                                               
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// console.log(matrix)

// 3. Write a program to print numeric counting from 1 to 10.

// let counting=[ 1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9 ,10];
// for(let i=0; i<counting.length;i++){
//     console.log(counting[i])
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let num=prompt("Enter a number to show its multiplication table");
// let length=prompt("Enter length multiplication table");

// for (let i = 1; i <= length; i++) {
//   document.write("<div>");
//   document.write(num + " x " + i + " = " + i * num);
//   document.write("</div>");
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["apple"," banana", "mango", "orange",
//     "strawberry"]

//     for (let i = 0; i <fruits.length; i++) {
//         console.log(fruits[i])
//     }
// console.log(`Element at index 0  is ` + fruits[0] );
// console.log(`Element at index 1  is ` + fruits[1] );
// console.log(`Element at index 2  is ` + fruits[2] );
// console.log(`Element at index 3  is ` + fruits[3] );
// console.log(`Element at index 4  is ` + fruits[4] );
    
            
// 6. Generate the following series in your browser. See
// example output.


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// let counting=[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15];
// document.write("<h1>Counting:</h1>");
// document.write(counting +",");


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// let reverse_Counting=[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// document.write("<h1>Reverse Counting:</h1>");
// document.write(reverse_Counting.reverse() +",");


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,

// document.write("<h1>Even:</h1>");
// for (let i = 0; i <= 18; i += 2) {
//     document.write(i + ", ");
//   }


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17,19


// document.write("<h1>Odd:</h1>");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
//   }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h1>Series:</h1>");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + "k "+",");
//   }


// 7.You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter item to search:").toLowerCase();

// let lowerCaseArray = A.map(item => item.toLowerCase());

// let index = lowerCaseArray.indexOf(userInput);

// if (index !== -1) {
//     console.log(`${A[index]} is available at index ${index} in our bakery.`);
// } else {
//     console.log(`We are sorry. ${userInput} is not available in our bakery.`);
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// let num = [24, 53, 78, 91, 12];
// let largestNumber = Math.max(...num);
// console.log("The largest number is:", largestNumber);


// 9.Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


// let num1 = [24, 53, 78, 91, 12];
// let smallestNumber = Math.min(...num1);
// console.log("The smallest number is:", smallestNumber);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 0; i <= 100; i += 5) {
//     document.write(i + ", ");
//     console.log(i + ", ");
//   }

