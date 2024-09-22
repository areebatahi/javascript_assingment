// 1.
// var multidimensionalArray = [["Areeba", 1], ["Umra", 25], ["pakistan", 5]];


// 2.
// var numbers = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// for (var i = 0; i < numbers.length; i++) {
//     for (var j = 0; j < numbers[i].length; j++) {
//         // document.write(numbers[i])
//         document.write(numbers[i][j] + " ")
//     }
//     document.write("<br>")
// }

// 3.
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }



// 4.
// var userTable = +prompt("Enter a number to show its multication table");
// var tableLenght = +prompt("Enter lenght multipication table");

// for (var i = 1; i <= tableLenght; i++) {
//     document.write(userTable + " X " + i + " = " + i * userTable + "<br>");
// }



// 5.
// var fruitsName = ["Apple", "Banana", "Mango", "orange", "strawberry"];

// for (var i = 0; i < fruitsName.length; i++) {
//     document.write(fruitsName[i] + "<br>");
// }

// for (var i = 0; i < fruitsName.length; i++) {
//     document.write("Element at index " + i + " is " + fruitsName[i] + "<br>")
// }



// 6.
// document.write("<h4> Counting: </h4>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h4> Reverse counting: </h4>");
// for (var i = 10; i >= 0; i--) {
//     document.write(i + ", ");
// }

// document.write("<h4> Even: </h4>");
// for (var i = 0; i <= 20; i++) {
//     document.write(i++ + ", ");
// }

// document.write("<h4> Odd: </h4>");
// for (var i = 1; i <= 20; i++) {
//     document.write(i++ + ", ");
// }

// document.write("<h4> Series: </h4>");
// for (var i = 0; i <= 20; i++) {
//     document.write(i++ + "k, ");
// }



// 7.
// var Itemslist = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome ABC bakery, What do you want to order Sir/Madam?")
// var matchFound = false

// for (var i = 0; i < Itemslist.length; i++) {
//     if (Itemslist[i] === userInput) {
//         matchFound = true
//         document.write(userInput + " is <b> avaible </b> at index " + i + " in our bakery");
//         break
//     }
// }
// if (matchFound === false) {
//     document.write(userInput + " is <b>not  avaible </b> " + " in our bakery");
// }



// 8.
// var numberList = [24, 56, 91, 85, 100, 250, 1000];
// var max = 0;
// for (var i = 0; i < numberList.length; i++) {
//     if (max < numberList[i]) {
//         max = numberList[i]
//     }
//     max;
// }
// document.write("The largest number : " + max);


// 9.
// var numberList = [24, 56, 91, 12, 100, 20];
// var min = numberList[0];
// for (var i = 0; i < numberList.length; i++) {
//     if (min > numberList[i]) {
//         min = numberList[i]
//     }
//     min;
// }
// document.write("The smallest number : "+ min);



// 10.
// for (var i = 1; i < 100; i++) {
//     i = i + 4;
//     document.write(i + " ")
// }