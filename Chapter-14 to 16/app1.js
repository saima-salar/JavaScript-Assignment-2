// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let studentsName = [];

// 2.Declare an empty array using JS object notation to store
// student names in future.

// let students = [ {

// }];

// 3. Declare and initialize a strings array.

// let vegetablesNames=["Tomato","Potato","Onion","Pumpkin"];

// 4. Declare and initialize a numbers array.

// let rollNumbers=[324,325,326,327];

// 5. Declare and initialize a boolean array.

// let result=[true,false,true,false];

// 6. Declare and initialize a mixed array.

// let bioData=[324,"Ahmed",true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// const numbers = [, 1, 2, 3, 4, 5, 6, 7, 8];
// const qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];
// console.log("Qualifications:")
// for (let i = 1; i < numbers.length; i++) {
//   console.log(numbers[i] + " " + qualifications[i - 1]);
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// const studentsName = ["","Ali","Ahmed","Umar"];
// const studentsScore = [
//      ,
//   320,
//   230,
//   480
// ];

// for (let i = 1; i < studentsName.length; i++) {
//   console.log("Score of "+ studentsName[i]+" is "+studentsScore[i] +"."+" "+"Percentage: "+ studentsScore[i]/500*100+"%");
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// let colors=[];

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

// let userChoice1=prompt("Enter one color name you want to add in the beginning of the array");

// colors.unshift(userChoice1);
// console.log(colors);
// document.write(colors);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// let userChoice2=prompt("Enter one color name you want to add in the end of the array");

// colors.push(userChoice2);
// console.log(colors);
// document.write(colors);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// colors.unshift("Pink","blue");
// console.log(colors);
// document.write(colors);

// d.Delete the first color in the array. Display the updated
// array in your browser.

// colors.shift();
// console.log(colors);
// document.write(colors);

// e. Delete the last color in the array. Display the updated
// array in your browser.

// colors.pop();
// console.log(colors);
// document.write(colors);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// let index=prompt("Enter the index at which you want to start deleting colors:");

// let deleteCount=prompt("Enter the number of colors you want to delete:");

// colors.splice(index, deleteCount);
// console.log(colors);
// document.write(colors);
// alert(colors);
// alert("Updated colors array: " + colors.join(", "));

// g.Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let students_Score =[320,230,480,120];
// console.log(students_Score.sort());
// document.write(students_Score.sort());
// alert(students_Score.sort());

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array.

// let city_Names=["Karachi","Lahore","Islamabad","Peshawer","Quetta","Hyderabad"];
//  let selectedCitiesList=city_Name.slice(2,5);
//  console.log(selectedCitiesList);
//  document.write(selectedCitiesList);
//  alert(selectedCitiesList);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let array=[" This " , " is " , " my  " ," Cat "];

// console.log(array.join());
// document.write(array.join());
// alert(array.join());

// let singleString = array.join('');
// console.log(singleString);
// document.write(singleString);
// alert(singleString);

// 13.Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let devices = ["keyboard", "mouse", "printer", "monitor"];

// devices.shift();
// console.log(devices);
// alert(devices);

// devices.shift();
// console.log(devices);
// alert(devices);

// devices.shift();
// console.log(devices);
// alert(devices);

// devices.shift();
// console.log(devices);
// alert(devices);


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

//  devices = ["keyboard", "mouse", "printer", "monitor"];

//  console.log(devices.reverse());
//  devices.shift();
//  console.log(devices);
//  devices.shift();
//  console.log(devices);
//  devices.shift();
//  console.log(devices);
//  devices.shift();
//  console.log(devices);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


//     let phone_Manufacturers =["Apple",
//         "Samsung", "Motorola", "Nokia", "Sony ", "Haier"];
// for(let i=0; i<phone_Manufacturers.length; i++){
//     document.write(phone_Manufacturers[i ] +"<br>");
// }
