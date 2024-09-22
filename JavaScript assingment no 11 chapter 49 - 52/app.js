// 01
// function submit(){
//     var email = document.getElementById('email').value;
//     var passward = document.getElementById('Passward').value;
//     document.write(email + "<br>" + passward);
// }


// 02
// function expand() {
//     var link = document.getElementById('link');
//     var moreText = document.getElementById('moreText');

//     if (link.innerHTML === "Read more") {
//         link.innerHTML = "show less";
//         moreText.style.display = "inline";
//     } else {
//         link.innerHTML = "Read more";
//         moreText.style.display = "none";
//     }

// }



// 03
document.getElementById("studentForm").addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var className = document.getElementById("class").value

    var table = document.getElementById("studentTable").querySelector("tbody")
    var newTr = table.insertRow();

    var td1 = newTr.insertCell(0)
    var td2 = newTr.insertCell(1)
    var td3 = newTr.insertCell(2)
    var td4 = newTr.insertCell(3)

    td1.innerHTML = name
    td2.innerHTML = age
    td3.innerHTML = className
    td4.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`

    document.getElementById("studentForm").reset()
})

function deleteRow(button) {
    var tr = button.parentNode.parentNode
    tr.parentNode.removeChild(tr)
}

function editRow(button) {
    var tr = button.parentNode.parentNode

    var index = tr.rowIndex - 1
    var name = tr.cells[0].innerHTML
    var age = tr.cells[1].innerHTML
    var className = tr.cells[2].innerHTML

    document.getElementById('editForm').value = index
    document.getElementById('editName').value = name
    document.getElementById('editAge').value = age
    document.getElementById('editClass').value = className

    document.getElementById('editFormContent').classList.remove("hidden")
}

document.getElementById('editForm').addEventListener("submit", function (e) {
    e.preventDefault();

    var index = document.getElementById("editForm").value
    var editName = document.getElementById("editName").value
    var editAge = document.getElementById("editAge").value
    var editClass = document.getElementById("editClass").value

    var table = document.getElementById('studentTable').querySelector("tbody");
    var tr = table.rows[index];

    tr.cells[0].innerHTML = editName
    tr.cells[1].innerHTML = editAge
    tr.cells[2].innerHTML = editClass

    document.getElementById('editFormContent').classList.add("hidden")
})
