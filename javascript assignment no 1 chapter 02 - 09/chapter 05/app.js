// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = +prompt("Enter number 1 in addition");
var num2 = +prompt("Enter number 2 in addition");

var sum = num1 + num2 ;
var sub = num1 - num2 ;
var product = num1 * num2 ;
var divide = num1 / num2 ;
var modulus = num1 % num2 ;

document.write(
    "Sum of " + num1 + " and " + num2 + " is " + sum +"<br>"+
    "sub of " + num1 + " and " + num2 + " is " + sub +"<br>"+
    "product of " + num1 + " and " + num2 + " is " + product +"<br>"+
    "divide of " + num1 + " and " + num2 + " is " + divide +"<br>"+
    "modulus of " + num1 + " and " + num2 + " is " + modulus +"<br>"
);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write(
    "<br>" + "Value after variable declaration is"
);

// c. Initialize the variable with some number.
var value_01 = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write(
    "<br>" + "Initial value: " + value_01
);

// e. Increment the variable.
var increment = ++value_01;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write(
    "<br>" + "Value after increment is: " + increment
);

// g. Add 7 to the variable.
var add_new_num = 7;
var new_value = increment + add_new_num;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write(
    "<br>" + "Value after addition is: " + new_value
);

// i. Decrement the variable.
var decrement = --new_value;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write(
    "<br>" + "Value after decrement is: " + decrement
);

// k. Show the remainder after dividing the variable’s value by 3.
var division = decrement % 3

// l. Output : “The remainder is : 0”.
document.write(
    "<br>" + "The remainder is : " + division + "<br>"
)



// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var one_movie_ticket = 600;
var ticket_quantity = 5;
var total_ticket_price = one_movie_ticket * ticket_quantity;

document.write("<br>" + "Total cost to buy 5 tickets to a movie is " + total_ticket_price + "PKR");


// 5. Write a script to display multiplication table of any number in your browser. E.g
var multiple_num = +prompt("Enter table number");

var multi1 = multiple_num * 1;
var multi2 = multiple_num * 2;
var multi3 = multiple_num * 3;
var multi4 = multiple_num * 4;
var multi5 = multiple_num * 5;
var multi6 = multiple_num * 6;
var multi7 = multiple_num * 7;
var multi8 = multiple_num * 8;
var multi9 = multiple_num * 9;
var multi10 = multiple_num * 10;

document.write(
    "<br>" + "<br>" + "table of " + multiple_num + "<br>" + "<br>" +
    multiple_num + " * 1 = " + multi1 + "<br>" +    
    multiple_num + " * 2 = " + multi2 + "<br>" +    
    multiple_num + " * 3 = " + multi3 + "<br>" +    
    multiple_num + " * 4 = " + multi4 + "<br>" +    
    multiple_num + " * 5 = " + multi5 + "<br>" +    
    multiple_num + " * 6 = " + multi6 + "<br>" +    
    multiple_num + " * 7 = " + multi7 + "<br>" +    
    multiple_num + " * 8 = " + multi8 + "<br>" +    
    multiple_num + " * 9 = " + multi9 + "<br>" +    
    multiple_num + " * 10 = " + multi10 + "<br>"     
);


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var C = 25

// c. Now store a Fahrenheit temperature into a variable.
var F = 70

// d. Convert it to Celsius & output “NNoF is NNoC”.
var Fahrenheit = ( C * 9 / 5) + 32;
document.write("<br>" + "<br>" + "70°C is " + Fahrenheit + "°C");

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var Celsius = ( F - 32) * 5 / 9;
document.write("<br>" + "25°C is " + Celsius + "°F");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
var price_of_item_no1 = 650;

// c. Ordered quantity of item 1
var quantity_of_item_1 = +prompt("quantity_of_item no 1");

// total amount of no 1
var total_amount_no_1 = price_of_item_no1 * quantity_of_item_1;

// b. Price of item 2
var price_of_item_no2 = 100;

// d. Ordered Quantity of item 2
var quantity_of_item_2 = +prompt("quantity_of_item no 2");

// total amount of no 2
var total_amount_no_2 = price_of_item_no2 * quantity_of_item_2;

// e. Shopping charges
var shopping_charges = 100;

// Compute the total cost & show the receipt in your browser.
var total_cost = total_amount_no_1 + total_amount_no_2 + shopping_charges;

// show document
document.write(
    "<br>" + "<h1>" + "Shopping Cart" + "</h1>" + 
    "Price of item 1 is 650" + "<br>" + 
    "Ordered quantity of item 1 is " + quantity_of_item_1 + "<br>" + 
    "Price of item 2 is 100" + "<br>" + 
    "Ordered quantity of item 2 is " + quantity_of_item_2 + "<br>" + 
    "Shopping charges is 100" + "<br>" + "<br>" + 
    "Total cost of your order is " + "<b>" + total_cost + "</b>"
);


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var total_marks = 980;
var obtained_marks = +prompt("Enter your Obtained marks in exam");
var student_percentage = total_marks * 100 / obtained_marks ;
document.write(  
    "<br>" + "<h1>" + "Mark Sheet" + "</h1>" + 
    "<br>" + "Total Marks : 980" + 
    "<br>" + "Marks Obtained: " + obtained_marks + 
    "<br>" + "Percentage : "+ student_percentage
);


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var US_dollar = 10;
var US_dollar_1 = 104.80;
var total_US_dollar = US_dollar * US_dollar_1

var saudi_riyals = 25;
var saudi_riyals_1 = 28;
var total_saudi_riyals = saudi_riyals * saudi_riyals_1

var pakistan_currency = total_US_dollar + total_saudi_riyals

document.write(  
    "<br>" + "<h1>" + "Currency in PKR" + "</h1>" + 
    "Total Currency in PKR: " + pakistan_currency
);


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var arithmetic = (5 + 10) * 2  ;


// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
var current_year = 2024;
var birth_year = 2008;
var calculate_age = current_year - birth_year;

// Output them to the screen like so: “They are either NN or NN years old”.
document.write(
    "<br>" + "<h1>" + "Age Calculator" + "</h1>" + 
    "<br>" + "current year : " + current_year + 
    "<br>" + "Birth year : " + birth_year + 
    "<br>" + "Your Age is : " + calculate_age
);


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
var radius_value = 20;

// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//    (Hint : Circumference of a circle = 2 π r , π = 3.142)
//    Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var circumference_of_a_circle = 2 * 3.142 * radius_value;
var the_area_is = 3.142 * (radius_value ** 2);

document.write(
    "<br>" + "<h1>" + "The Geometrizer" + "</h1>" + 
    "<br>" + "Radius of a circle : " + radius_value +
    "<br>" + "The Circumference is : " + circumference_of_a_circle +
    "<br>" + "The area is : " + the_area_is 
);


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
var favorite_snak = "Chocolate Chip";

// b. Store your current age into a variable.
var current_age = 15;

// c. Store a maximum age into a variable.
var maximum_age = 65;

// d. Store an estimated amount per day (as a number).
var estimated_amount_per_day = 3;

// e. Calculate how many would you eat total for the rest of your life.
var multile_current_age_estimated_amount = current_age * estimated_amount_per_day;
var multile_maximum_age_estimated_amount = maximum_age * estimated_amount_per_day;
var total_calculate_rest_of_life = multile_maximum_age_estimated_amount - multile_current_age_estimated_amount;

// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
document.write(
    "<br>" + "<h1>" + "The Lifetime Supply Calculator" + "</h1>" + "<br>" + "Favorite snack : " + favorite_snak + "<br>" + "Current age" + current_age + "<br>" + "Estimated Maximum Age : " + maximum_age + "<br>" + "Amount of snacks per day : " + estimated_amount_per_day + "<br>" + "<br>" + "You will need " + total_calculate_rest_of_life + " Chocolate Chip to last you until the ripe old age of " + maximum_age
);
