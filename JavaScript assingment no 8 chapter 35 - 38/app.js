// 1.
// function date(){
//     var toady = new Date();
//     return toady
// }
// console.log(date());

// 2.
// function user_name() {
//     var userFirstName = prompt("Enter your First name:");
//     var userLastName = prompt("Enter your Last name:");
//     var fullName = userFirstName.toUpperCase() + " " + userLastName.toUpperCase();
//     alert("Hi! " + fullName);
// }
// user_name();

// 3.
// function sum() {
//     var num1 = +prompt("Enter a number 01");
//     var num2 = +prompt("Enter a number 02");
//     var add = num1 + num2;
//     return add
// }
// alert(sum());

// 4.
// function culculator() {
//     var num1 = +prompt("Enter number 1");
//     var num2 = +prompt("Enter number 2");
//     var operator = prompt("Enter any Operation (+, -, *, /, %)")

//     if("+" == operator){
//         console.log(num1 + num2);
//     }
//     else if("-" == operator){
//         console.log(num1 - num2);
//     }
//     else if("*" == operator){
//         console.log(num1 * num2);
//     }
//     else if("/" == operator){
//         console.log(num1 / num2);
//     }
//     else if("%" == operator){
//         console.log(num1 % num2);
//     }
// }
// console.log(culculator());

// 5.
// function numOfSquare() {
//     var num = 5;
//     var squareOfNum = num * num;
//     return squareOfNum
// }
// document.write(numOfSquare());

// 6.
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers"
//     } else {
//         var result = 1;
//         for (var i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// console.log(factorial(4));

// 7.
// function counting() {
//     var startNum = +prompt("Enter a starting number");
//     var endNum = +prompt("Enter a ending number");
//     for (var i = startNum; i <= endNum; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting();

// 8.
// function calculatehypotenuse() {
//     function calculateSquare(x) {
//         return x * x;
//     }
//     var base = +prompt("Enter the base of a right angle triangle:");
//     var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:");
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     alert("The hypoteneus of right angle triangle with base " + base + " and perpendicular " + perpendicular + " is " + hypotenuse)
// }
// calculatehypotenuse();

// 9.
// Method 1:
// function culculateArea(width , height){
// return width * height;
// }
// document.write(culculateArea(5,10));

// Method 2:
// function culculateArea(){
//     var widht = 5;
//     var height = 10;
//     return widht*height;
// }
// document.write(culculateArea());

// 10.
// function isPalindrome(str){
//     var cleanedStr = str.toLowerCase();
//     var reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("Madam"));

// 11.
// function capitalizeLetter() {
//     var sentence = "the quick brown fox";
//     var splitSentence = sentence.split(" ");
//     for (var i = 0; i < splitSentence.length; i++) {
//         splitSentence[i] = splitSentence[i][0].toUpperCase() + splitSentence[i].substr(1);
//     }
//     var mySentencce = splitSentence.join(" ")
//     return mySentencce;
// }
// document.write(capitalizeLetter());

// 12.
// function longestWord(str) {
//     var strSplit = str.split(" ");
//     var longest = " ";
//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longest.length) {
//             longest = strSplit[i];
//         }
//     }

//     return longest;
// }
// var exampleStr ="Web Development Tutorial";
// longest = longestWord(exampleStr);
// document.write(longest);

// 13.
// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// document.write(countLetterOccurrences("JSResourceS.com", "o"));

// 14.
// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     return "The circumference is " + circumference.toFixed(2);
// }
// document.write(calcCircumference(5)); // The circumference is 31.42
// document.write("<br>");
// function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     return "The area is" + area.toFixed(2);
// }

// document.write(calcArea(5)); // The area is 78.54
