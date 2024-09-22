// 1. 

// var userFirstName = prompt("Enter your First Name ");
// var userLastName = prompt("Enter your Last Name ");
// var userFullName = userFirstName.slice(0, 1).toUpperCase() + userFirstName.slice(1).toLowerCase() + " " + userLastName.slice(0, 1).toUpperCase() + userLastName.slice(1).toLowerCase();
// document.write(
//     "<h4>Full Name</h4>" + userFullName.toLocaleUpperCase()
// )


// 2.

// var userMobile = prompt("Enter your favorite mobile phone model.");
// var inputArrange = userMobile.slice(0, 1).toUpperCase() + userMobile.slice(1).toLowerCase();
// var mobileModel = ["Apple", "Oppo", "Sumsung", "Vivo", "Infinix", "Iphone"];
// document.write("My Favorite Phone is :" + inputArrange + "<br>");

// for (var i = 0; i < mobileModel.length; i++) {
//     if (inputArrange == mobileModel[i]) {
//         document.write(
//             "Lenght of  string: " + mobileModel.indexOf(inputArrange)
//         )
//     }
// }


// 3.

// var word = "Paskitani";
// var finder = word.indexOf("n");
// document.write("String : Pakistani <br> Index of 'n' : " + finder);


// 4 .

// var word = "Hello World";
// var lastFinder = word.lastIndexOf("l");
// document.write("String : Hello World <br> Last Index of 'l' : " + lastFinder);


// 5.

// var countryName = "Pakistani";
// var wordFind = countryName.charAt(3);
// document.write("String : Pakistani <br> Charater at index 3 : " + wordFind);


// 6.

// var userFirstName = prompt("Enter your First Name ");
// var userFirstStandard = userFirstName.slice(0,1).toUpperCase() + userFirstName.slice(1).toLowerCase();
// var userLastName = prompt("Enter your Last Name ");
// var userLastStandard = userLastName.slice(0,1).toUpperCase() + userLastName.slice(1).toLowerCase();
// var fullName = userFirstStandard.concat(" " + userLastStandard);
// document.write(fullName);




// 7.

// var city = "Hyderabad";
// document.write(
//     "City : " + city + "<br>" + "After Replacement : " + city.replace("Hyderabad","Islamabad")
// );


// 8.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g, "&"));


// 9.

// var string = "472";
// document.write("Value : " + string + "<br>" + "Type : " + typeof string);
// document.write("<br>")
// var num = Number(string);
// document.write("Value : " + num + "<br>" + "Type : " + typeof num);


// 10.

// var userInput = prompt("Enter any word");
// var userUppercase = userInput.toUpperCase();
// document.write(userUppercase);


// 11.

// var userInput = prompt("Enter any word");
// var userUppercase = userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write(userUppercase);


// 12.

// var num = 35.36;
// var str = num.toString();
// var decimalRemove = str.replace(".", "");
// document.write(decimalRemove);


// 13.

// var userName = prompt("Enter Your Name");
// var specialSymbol = ["@", ",", "!", "."];
// for (var i = 0; i < specialSymbol.length; i++) {
//     for (var j = 0; j < userName.length; j++) {
//         if (specialSymbol[i] == userName[j]) {
//             alert("Enter Valid username ")
//         }
//     }
// }


// 14.

// var Arrays = ["Cake", "Apple pie", 'Cookie', "Chips", "Patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var pro1 = userInput.slice(0, 1).toUpperCase();
// var pro2 = userInput.slice(1).toLowerCase();
// var userInput = pro1 + pro2;
// var flag = false;
// for (var i = 0; i < Arrays.length; i++) {
//     if (Arrays[i] == userInput) {
//         flag = true;
//         document.write(userInput + " is <b> available </b> at index " + Arrays[i].indexOf(userInput) + " in our input");
//     }
// }
// if (flag == false) {
//     document.write("We our Sorry. " + userInput + " is <b> Not available </b> in our bakery");
// }



// 15.

// var userPassword = prompt("Enter your any passward: ");
// var passwardLenght = false;
// var passwardChar = false;
// var passwardInt = false;
// var passwardStart = false;

// for (var i = 0; i < userPassword.length; i++) {
//     var charValue = userPassword[i].charCodeAt();
//     if (charValue >= 65 && charValue <= 90) {
//         passwardChar = true;
//     }
//     else if (charValue >= 97 && charValue <= 122) {
//         passwardChar = true;
//     }
// }

// for (var i = 0; i < userPassword.length; i++) {
//     var numValue = userPassword[i].charCodeAt();
//     if (numValue >= 48 && numValue <= 57) {
//         passwardInt = true;
//     }
// }

// for (var i = 0; i < userPassword.length; i++) {
// var startValue = userPassword[i].charCodeAt();
// if (startValue >= 48 && startValue <= 57) {
//     passwardInt = false;
// }
// }

// for (var i = 0; i < userPassword.length; i++) {
// if(passward.length>=6){
//     passwardLenght = true;
// }
// }

// if(passwardChar == true || passwardInt == true || passwardLenght == true || passwardStart== true){
//     alert("passward approved ");
// }
// else{
//     alert("plz enetr valid passward ");
// }


// 16.

// var str = "University of karachi";
// var arr = str.split("");
// for(var i = 0;i<arr.length;i++){
//     document.write(arr[i] + "<br>")
// }


// 17.

// var input = "pakistan";
// var lastCharacter = input.charAt(7);
// document.write("User Input : pakistan <br>" + "Last Character of input : " + lastCharacter);


// 18.
// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g)).length;
// document.write(
//     "Text: " + str + "<br>" +"There are " + count + " occurrences of word 'the'."
// )
