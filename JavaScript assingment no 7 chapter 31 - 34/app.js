// 1.
var today = new Date();
// document.write(today);

// 2.
// var theMonth = today.getMonth();
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = month[theMonth];
// alert("Curent Month : " + currentMonth);

// 3.
// var theDate = today.getDay();
// var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fir", "Sat"];
// var CurrentDay = daysName[theDate];
// alert(CurrentDay);

// 4.
// var theDate = today.getDay();
// var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fir", "Sat"];
// var CurrentDay = daysName[theDate];
// if (CurrentDay == "Sat" || CurrentDay == "Sun") {
//     alert("it's a Fun day");
// }

// 5.
// var date = today.getDate();
// if (date <= 15) {
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month.")
// }

// 6.
// var time = today.getTime();
// var minutesTime = time/(1000*60);
// document.write(
//     "Current Date : " + today + "<br>" + 
//     "Elapsed milliseconds since january 1 , 1970 : " + time + "<br>" + 
//     "Elapsed minutes since january 1 , 1970 : " + minutesTime
// )

// 7.
// var hours = today.getHours();
// if (hours <= 12) {
//     alert("it's AM");
// } else {
//     alert("it's PM");
// }

// 8.
// var dateObject = new Date("12 31 2020");
// document.write(dateObject);

// 9.
// var ramdan1st = new Date("3 10 2024");
// var pastDates = today.getTime() - ramdan1st.getTime();
// var inDates = pastDates / (1000 * 60 * 60 * 24);
// document.write(Math.round(inDates));

// 10.
// var year = new Date("2015");
// var pastSec = today.getTime() - year.getTime();
// var inSec = pastSec/(1000*60);
// document.write(Math.round(inSec));

// 11.
// document.write("Curret Date : " + today + "<br>" ); 
// var currentHour = today.getHours();
// var setHour =  new Date(today.setHours(currentHour-1));
// document.write("1 hour ago : " + setHour);

// 12.
// document.write("Curret Date : " + today + "<br>" ); 
// var currentYear = today.getFullYear();
// var setYear =  new Date(today.setFullYear(currentYear-100));
// document.write("100 year ago" + setYear);

// 13.
// var birthDay = new Date("8 24 2008");
// var age = today.getTime() - birthDay.getTime();
// var inYear = Math.round(age/(1000*60*60*24*30*12));
// document.write("Your age is : " + inYear + "<br>" + "Your birth year is : 2008");

// 14.
var theMonth = today.getMonth();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = month[theMonth];
var numberOfUnit = 410;
var chargePerUnit = 16;
var netAmount = numberOfUnit * chargePerUnit;
var afterDueDate = netAmount + 350;
document.write("<h1> K-Electric Bill </h1> <br> Customer Name: <b>ABC Customer</b> <br> Month:<b> " +currentMonth + "</b><br> Number of units: <b>410</b> <br> Charge per unit: <b>16</b> <br><br> Net Amount payable (WithinDue Date): <b>" + netAmount + "</b> <br> Late payment surcharge: <b>350</b> <br> Gross Amount payable (After Due Date) : <b>" + afterDueDate + "</b>"  )