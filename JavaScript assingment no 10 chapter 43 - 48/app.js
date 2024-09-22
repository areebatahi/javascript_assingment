// 3.
function deleteRow() {
    var table = document.getElementById("table");
    return table.deleteRow(1);
}

// 5.
var counter = 0;
function updateCounter() {
    document.getElementById('counter').innerText = counter;
}
function increaseCounter() {
    counter++;
    updateCounter();
}
function decreaseCounter() {
    counter--;
    updateCounter();
}