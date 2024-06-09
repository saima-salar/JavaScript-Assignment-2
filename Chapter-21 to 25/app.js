//1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt(`Enter your first name`);
// let lastName = prompt(`Enter your last name`);
// let fullName = firstName +" "+ lastName;
// alert("nice to meet you " + fullName);
// // console.log("nice to meet you " + fullName);

// 2.Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let favorite_Mobile=prompt("Enter your favourite mobile phone model");
// alert("my favourite phone is " + favorite_Mobile);
// console.log("my favourite phone is " + favorite_Mobile);
// document.write("<h1>My favourite phone is " + favorite_Mobile + "<br></h1>");
// alert("Length of string" + favorite_Mobile.length);
// console.log("Length of string : " + favorite_Mobile.length);
// document.write("<h1>Length of string : " + favorite_Mobile.length+"</h1>");

// 3.Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

//  let nationality="Pakistani";
//  let index = nationality.indexOf('n');
//  document.write("<h1>String : " + nationality + "<br></h1>");
//  document.write("<h1>Index of 'n' : " +index +"</h1>");

// 4.Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// //
//  let greet="Hello World";
//  let lastIndex = greet.lastIndexOf('l');
//  document.write("<h1>String : " + greet + "<br></h1>");
//  document.write("<h1>Index of 'l' : " + lastIndex +"</h1>");

//  5.Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let text="Pakistani";
// let myText=text.charAt(3);
// document.write("<h1>String : " + text + "<br></h1>");
// document.write("<h1>Character at index '3' : " + myText +"</h1>");

// 6. Repeat Q1 using string concat() method.
//   Write a program that takes two user inputs for first and
//  last name using prompt and merge them in a new variable
//  titled fullName. Greet the user using his full name .

// let firstName = prompt(`Enter your first name`);
// let lastName = prompt(`Enter your last name`);
// let fullName = firstName +" "+ lastName;
// alert("nice to meet you " + fullName);
// console.log("nice to meet you " + fullName);

// 7.Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let city="Hyderabad";
// let cityName=city.replace("Hyder","Islam");
// document.write("<h1>String : " + city + "<br></h1>");
// document.write("<h1>After replacement : " + cityName +"</h1>");

// 8.Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let text=message.replace(/and/g,"&");
// document.write("<h1>After replacement : " + text +"</h1>");

// 9.Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let value1 = "472";
// document.write("<h3>Value : " + value1 + "<br>" + "Type : String</h3> ");

// let value2 = 472;
// document.write("<h3>Value : " + value2 + "<br>" + "Type : number</h3> ");


// 10.Write a program that takes user input. Convert and
// show the input in capital letters.

// let dryFruit = prompt(`Enter dryfruit name`);
// alert(dryFruit.toUpperCase());
// document.write("<h3>User input : "+ dryFruit + "<br></h3>");
// document.write("<h3>Uper case : "+ dryFruit.toUpperCase()+"</h3>");


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// const program = prompt(`Enter program name`);
// const new_program=program[0].toUpperCase()+program.slice(1).toLowerCase()
// alert(new_program);
// document.write("<h3>User input : "+ program + "<br></h3>");
// document.write("<h3>Title case : "+ new_program + "</h3>");

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// let num = 35.36;
// // Convert the number to a string
// let numString = num.toString();
// // Remove the dot from the string
// let result = numString.replace(".", "");
// document.write("<h1>Number: " + num + "</h1>");
// document.write("<h1>Result: " + result + "</h1>");

// 13.Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// let userName = prompt("Enter your username:");
//   if (/[@.,!]/.test(userName)) {
//     alert("Invalid username. Please avoid using '@', '.', ',', '!'.");
//   }
//  else {
//     console.log("Your valid username is:", userName);
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter item to search:").toLowerCase();

// let lowerCaseArray = A.map(item => item.toLowerCase());

// let index = lowerCaseArray.indexOf(userInput);

// if (index !== -1) {
//     console.log(`${A[index]} is available at index ${index} in our bakery.`);
// } else {
//     console.log(`We are sorry. ${userInput} is not available in our bakery.`);
// }


// 15.Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let userInput = prompt("Enter your password: ");
// let containsAlphabets = false;
// let containsNumbers = false;

// for (let i = 0; i < userInput.length; i++) {
//   const charCode = userInput.charCodeAt(i);
//   if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     containsAlphabets = true;
//   } else if (charCode >= 48 && charCode <= 57) {
//     containsNumbers = true;
//   }
// }
// console.log("Contains alphabets:", containsAlphabets);
// console.log("Contains numbers:", containsNumbers);


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// let university = "University of Karachi";

// for(let i = 0; i < university.length; i++) {
//     console.log(university[i]);
// }

// 17. Write a program to display the last character of a user
// input.

// let userInput = prompt("Enter some text:");
// if (userInput && userInput.length > 0) {
//     let lastChar = userInput[userInput.length - 1];
//     console.log(`The last character is: ${lastChar}`);
// } else {
//     console.log("Please enter a string.");
// }


//  18. You have a string “The quick brown fox jumps over the
//  lazy dog”. Write a program to count number of
//  occurrences of word “the” in given string.

//  let string = "The quick brown fox jumps over the lazy dog";
//  let lowerCaseStr = string.toLowerCase();
 
//  let words = lowerCaseStr.split(" ");
//  let count = words.filter(word => word === "the").length;
 
//  console.log(`Text:The quick brown fox jumps over the lazy dog \n There are 2 occurrences(s) of word "the"`);