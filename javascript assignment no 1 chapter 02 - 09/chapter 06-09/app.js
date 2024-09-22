// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = 10;

document.write(
"Result " + "<br>" + "The value of a is : 10" + "<br>" +
".................................." + "<br>" + "<br>" + 
"The value of ++a is : " + ++a + "<br>" + 
"Now the value of a is : " + a + "<br>" + "<br>" + 
"The value of a++ is : " + a++ + "<br>" + 
"Now the value of a is : " + a + "<br>" + "<br>" + 
"The value of --a is : " + --a + "<br>" + 
"Now the value of a is : " + a + "<br>" + "<br>" +
"The value of a-- is : " + a-- + "<br>" + 
"Now the value of a is : " + a + "<br>" + "<br>"
);

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
var a = 2;
var b = 1;

var result = --a - --b + ++b + b--; //1 - 0 + 1 + 1 = 3
document.write(
  "a is : " + a + "<br>" +
  "b is : " + b + "<br>" + 
  "Result is : " + result + "<br>"
);

// Explain the output at each stage:
// --a;
//  1 

// --a - --b;
// 1 - 0 = 1

// --a - --b + ++b;
// 1 - 0 + 1 = 2

// --a - --b + ++b + b--;
// 1 - 0 + 1 + 1 = 3


// 3. Write a program that takes input a name from user & greet the user.

var username = prompt("Enter Your Name");
alert("Assalamualaikum " + username);

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var multiple_num = +prompt("Enter table number");
var num_value = 5;
var empty = ""

if(multiple_num = empty ){
var fixed_value01 = num_value * 1;
var fixed_value02 = num_value * 2;
var fixed_value03 = num_value * 3;
var fixed_value04 = num_value * 4;
var fixed_value05 = num_value * 5;
var fixed_value06 = num_value * 6;
var fixed_value07 = num_value * 7;
var fixed_value08 = num_value * 8;
var fixed_value09 = num_value * 9;
var fixed_value10 = num_value * 10;

document.write(
    "<br>" + "<br>" + "table of " + num_value + "<br>" + "<br>" +
    num_value + " X 1 = " + fixed_value01 + "<br>" +    
    num_value + " X 2 = " + fixed_value02 + "<br>" +    
    num_value + " X 3 = " + fixed_value03 + "<br>" +    
    num_value + " X 4 = " + fixed_value04 + "<br>" +    
    num_value + " X 5 = " + fixed_value05 + "<br>" +    
    num_value + " X 6 = " + fixed_value06 + "<br>" +    
    num_value + " X 7 = " + fixed_value07 + "<br>" +    
    num_value + " X 8 = " + fixed_value08 + "<br>" +    
    num_value + " X 9 = " + fixed_value09 + "<br>" +    
    num_value + " X 10 = " + fixed_value10 + "<br>"     
);
}
else{
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
}


// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
var user_subject_01 = prompt("Enter your any subject 01");
var user_subject_02 = prompt("Enter your any subject 02");
var user_subject_03 = prompt("Enter your any subject 03");

// b) Total marks for each subject is 100, store it in another variable.
var marks_of_each_subject = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
var obtained_marks_01 = +prompt("Enter your marks obtained in subject 01");
var obtained_marks_02 = +prompt("Enter your marks obtained in subject 02");
var obtained_marks_03 = +prompt("Enter your marks obtained in subject 03");

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var total_marks = marks_of_each_subject + marks_of_each_subject + marks_of_each_subject;
var obtained_marks = obtained_marks_01 + obtained_marks_02 + obtained_marks_03;

//                        precentage of each subject 
var percentage_of_subject_01 = (obtained_marks_01 * 100) / marks_of_each_subject;
var percentage_of_subject_02 = (obtained_marks_02 * 100) / marks_of_each_subject;
var percentage_of_subject_03 = (obtained_marks_03 * 100) / marks_of_each_subject;

var final_percentage = (obtained_marks * 100) / total_marks;

document.write(
    "<br>" + "<table border = 1px>" +
    "<tr>" +
      "<th>" + "<b>" + " Subject " + "</b>" + "</th>" + 
      "<th>" + "<b>" + " Total Marks " + "</b>" + "</th>" + 
      "<th>" + "<b>" + " Obtained Marks " + "</b>" + "</th>" + 
      "<th>" + "<b>" + " Percentage " + "</b>" + "</th>" + 
    "</tr>" + 
    "<tr>" +
      "<th>" + user_subject_01 + "</th>" + 
      "<th>" + marks_of_each_subject + "</th>" + 
      "<th>" + obtained_marks_01 + "</th>" + 
      "<th>" + percentage_of_subject_01 + "%" + "</th>" + 
    "</tr>" + 
    "<tr>" +
      "<th>" + user_subject_02 + "</th>" + 
      "<th>" + marks_of_each_subject + "</th>" + 
      "<th>" + obtained_marks_02 + "</th>" + 
      "<th>" + percentage_of_subject_02 + "%" + "</th>" + 
    "</tr>" + 
    "<tr>" +
      "<th>" + user_subject_03 + "</th>" + 
      "<th>" + marks_of_each_subject + "</th>" + 
      "<th>" + obtained_marks_03 + "</th>" + 
      "<th>" + percentage_of_subject_03 + "%" + "</th>" + 
    "</tr>" + 
    "<tr>" +
    "<th>" + "<b>" + " " + "</b>" + "</th>" + 
    "<th>" + "<b>" + total_marks + "</b>" + "</th>" + 
    "<th>" + "<b>" + obtained_marks + "</b>" + "</th>" + 
    "<th>" + "<b>" + final_percentage + "%" + "</b>" + "</th>" + 
  "</tr>" + 
    "</table>"
);
