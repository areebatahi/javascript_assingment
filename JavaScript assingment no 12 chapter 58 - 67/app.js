// Task 01 
// Part 1 
var maiContent = document.getElementById('main-content');

//Part 2
console.log(maiContent.childNodes)

// Part 3
var render = document.getElementsByClassName('render')
for (var i = 0; i < render.length; i++) {
    console.log(render[i].innerHTML);
}

// Part 4
document.getElementById('first-name').value = "Alex";

// Part 5
document.getElementById('last-name').value = "Bank";
document.getElementById('email').value = "alexbank@example.com";

// Task 02
// Part 1
var formContent = document.getElementById("form-content");
console.log(formContent.nodeType);

// Part 2
var lastName = document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.childNodes[0].nodeType);

// Part 3
console.log(maiContent.firstChild);
console.log(maiContent.lastChild);

// Part 4
console.log(lastName.nextSibling);
console.log(lastName.previousSibling);

// Part 5
var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);