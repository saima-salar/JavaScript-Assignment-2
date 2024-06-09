// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let cityName = prompt(`Enter Your City Name`);
// alert("Welcome to city of lights " + cityName);

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// const gender = prompt(`Enter Your Gender in TitleCase`);
// if (gender === "Male") {
//   alert(" Good Morning Sir.");
// } else if (gender === "Female") {
//   alert(" Good Morning Ma’am.");
// }

// 3.Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// const trafficSignal = prompt(`Enter the color of road traffic signal in TitleCase`);

// if (trafficSignal === "Red") {
//   alert(" Must Stop.");
// } else if (trafficSignal === "Yellow") {
//   alert(" Ready to move.");
// } else if (trafficSignal === "Green") {
//   alert(" Move now.");
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// const currentFuel = prompt(`Remaining fuel in Car (in litres)`);
// if (currentFuel < "0.25") {
//   alert(" Please refill the fuel in your car.");
// } else {
//   alert("Enjoy your Drive");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Output: Alert with message "given condition for variable a is true"

// b.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// Output: No alert

// c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// Output:
// Alert with message "condition 2 is true"
// Alert with message "condition 4 is true"

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// Output: Alert with message "The cost equals"

// e.
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//     Output: Alert with message "True"

// f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Output: Alert with message "car is smaller than cat"

// 6.Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// const obtainedMarksinmath = prompt(`enter your obtained marks in Math`);                    incomplete
// const obtainedMarksinenglish = prompt(`enter your obtained marks in English`);
// const obtainedMarksinurdu = prompt(`enter your obtained marks in Urdu`);
// const totalObtainedmarks =
// obtainedMarksinmath + obtainedMarksinenglish + obtainedMarksinurdu;
// const totalMarks = 300;
// const percentage = (totalObtainedmarks / totalMarks) * 100;

// if (totalObtainedmarks >= "80") {
//   alert(" Grade " + " Aone " + " Excellent ");
// } else if (totalObtainedmarks >= "70") {
//   alert(" Grade " + " A " + " Good ");
// } else if (totalObtainedmarks >= "60") {
//   alert(" Grade " + " B " + " You need to improve ");
// } else if (totalObtainedmarks < "60") {
//   alert(" Grade " + " Fail " + "Sorry");
// }else{
//   alert("Invalid marks entered.");
// }

// document.write("<h1>Marks Sheet</h1>");
// document.write("<h3>Total Marks : " + totalMarks + "</h3>");
// document.write("<h3>Marks Obtained : " + totalObtainedmarks+ "</h3>");
// document.write("<h3>Grade: " + grade + "</h3>");
// document.write("<h3>Remarksage: " + message + "</h3>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// const secretNum = 7;
// const userGuess = parseInt(prompt("Guess the secret number (between 1 to 10):"));

// if (userGuess ===secretNum) {
//   alert("Bingo! Correct answer");
// } else if (userGuess === secretNum + 1 || userGuess === secretNum - 1) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Try again!");
// }

// 8. write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// const userNumber = parseInt(
//   prompt("Enter a number to check if it is divisible by 3:")
// );

// if (userNumber % 3 === 0) {
//   alert("The number " + userNumber + " is divisible by 3.");
// } else {
//   alert("The number " + userNumber + " is not divisible by 3.");
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// const digit = prompt(`Enter any number`);
// if (digit % 2 == 0) {
//   alert("Even number");
// } else{
// alert("Odd number");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// const temperature = prompt(`Enter any number`);
// if (temperature>40) {
//   alert(" “It is too hot outside.”");
// } else if (temperature>30){
// alert("“The Weather today is Normal.”");
// }else if (temperature>20){
//   alert("“Today’s Weather is cool.”");
//   }else if(temperature>10){
//     alert("“OMG! Today’s weather is so Cool.”");
//   }else {
//     alert("It's very cold outside.");
//   }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)

// const firstNumber = parseInt(prompt(`Enter First Number`));
// const operation = prompt("Enter the operation (+, -, *, /, %):");
// const secondNumber = parseInt(prompt(`Enter First Number`));

// if (operation === "+") {
//   alert(firstNumber + secondNumber);
// } else if (operation === "-") {
//   alert(firstNumber - secondNumber);
// } else if (operation === "*") {
//   alert(firstNumber * secondNumber);
// } else if (operation === "/") {
//   alert(firstNumber / secondNumber);
//  } else if (operation === "%") {
//     alert(firstNumber % secondNumber);
// } else {
//   console.log("please select valid operator");
// }
