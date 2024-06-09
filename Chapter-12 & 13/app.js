// 1. Write a program that takes a character (number or string)                        
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let input = prompt("Enter a character: ");

// if (input >= '0' && input <= '9') {
//   console.log("The input is a number.");
// } else if (input >= 'A' && input <= 'Z') {
//   console.log("The input is an uppercase letter.");
// } else if (input >= 'a' && input <= 'z') {
//   console.log("The input is a lowercase letter.");
// } else {
//   console.log("The input is not a number or letter.");
// }

// 2. Write a JavaScript program that accept two integers and                             
// display the larger. Also show if the two integers are equal.

// let num1 = parseInt(prompt("Enter the first integer: "));
// let num2 = parseInt(prompt("Enter the second integer: "));

// if (num1 === num2) {
//   console.log("Both integers are equal.");
// } else {
//   console.log("The larger integer is: " + Math.max(num1, num2));
// }


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// let result=prompt('Enter a number');

// if (result > 0) {

//    alert ('The number is positive.');

// } else if (result < 0) {

//     alert ('The number is negative.');

// } else {

//    alert  ('The number is zero.');
// }

// 4.Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// let vowel = prompt('Enter a character:');

// if (vowel.length !== 1) {
//     alert('Please enter a single character');
// } else {
//     let vowels = 'aeiouAEIOU';
//     if (vowels.includes(vowel)) {
//         alert('True, the character is a vowel.');
//     } else {
//         alert('False, the character is not a vowel.');
//     }
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// let userPassword = '12345';
// let password = prompt("Enter Your Password");

// if (password === null || password === "") {
//     alert("Please enter your password");
// } else if (password === userPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// 6.This if/else statement does not work. Try to fix it:



// let hour = prompt("Please enter the time in 24 hours clock format like:15");
// if (hour <18) {
//     alert("Good day");
// } else {
//     alert("Good evening");
// }


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements




// let time = prompt("Please enter the time in 24-hour format (e.g., 1900 for 7pm):");

// if (time >= 0 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2200) {
//     alert("Good evening!");
// } else if (time >= 2200 && time <= 2359) {
//     alert("Good night!");
// } else {
//     alert("Invalid input!");
// }