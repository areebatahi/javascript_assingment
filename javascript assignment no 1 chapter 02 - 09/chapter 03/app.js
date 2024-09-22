// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = "I am 16 years old";
alert(age);

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

alert("You have visited this site " +  1  + " times")

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
document.write(
"My birth year is 2008" + "<br>" + "Date type of my declared  variable in number" + "<br>"
)

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:

// a. Visitor’s name
var Visitors_name = prompt("Enter your name")

// b. Product title
var Product_name = prompt("Enter your ordered product name")

// c. Quantity i.e. how many products a visitor wants to order
var Product_quantity = prompt("Enter your product quantity")

// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
document.write("<br>" + Visitors_name + " ordered " + Product_quantity + " " + Product_name + " on XYZ Clothing store")