// 1. 
// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
// ];
// var totalPrice = 0;
// for (var key in itemsArray) {
//     var item = itemsArray[key];
//     var price = item.price * item.quantity;
//     console.log(`The Price of ${item.name} is Rs. ${price}`);
//     totalPrice += price;

// }
// console.log(`Total price of all items is: ${totalPrice}`);

// 2.
// var studentImformation = {
//     fname: "Areeba",
//     lname: "Khan",
//     email: "areeba323@gmail.com",
//     passward: "areebjhsd",
//     age: 20,
//     gender: "Female",
//     city: "karachi",
//     country: "Pakistan"
// }

// console.log("city" in studentImformation);
// console.log("country" in studentImformation);
// console.log("fname" in studentImformation);
// console.log("lname" in studentImformation);


// 3.
// function Student(fanme, lname, rollNo){
// this.fanme = fanme;
// this.lname = lname;
// this.rollNo = rollNo;
// }
// var student1 = new Student("Areeba", "Tahir",1001);
// var student2 = new Student("Fatima", "Khalid",1002);
// var student3 = new Student("Amna", "Bibi",1003);
// var student4 = new Student("Hani", "Irfan",1004);
// console.log(student1,student2,student3,student4);



// 4.
// Constructor function for population record
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save record to localStorage
function saveRecord(record) {
    var records = JSON.parse(localStorage.getItem("populationRecords")) || [];
    records.push(record);
    localStorage.setItem("populationRecords", JSON.stringify(records));
    displayRecords();
}

// Function to display records from localStorage
function displayRecords() {
    var recordsList = document.getElementById("recordsList");
    var records = JSON.parse(localStorage.getItem("populationRecords")) || [];

    recordsList.innerHTML = "";
    records.forEach((record, index) => {
        var listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
        recordsList.appendChild(listItem);
    });
}

// Event listener for form submission
document.getElementById("populationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    var newRecord = new PopulationRecord(name, gender, address, education, profession);
    saveRecord(newRecord);

    // Clear the form after submission
    document.getElementById("populationForm").reset();
});

// Display saved records on page load
window.onload = displayRecords;