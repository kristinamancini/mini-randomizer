//array to put data in
let myData = [];

//press 'Enter' key after input, default to click add button
var keyInput = document.getElementById("inputId");
keyInput.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        document.getElementById("add-item-button").click();
    }
});

//push item onto list, does not display item yet
function itemList(){
    if (document.getElementById("inputId").value.trim() == "")
        alert("Your input is empty!");

    else if (myData.length < 15){
        myData.push(document.getElementById("inputId").value);
        addItem();
    }
    else
        alert("No more items to add! You can only add 15 items.");
}

//add item and checkbox x to the list, displays item
function addItem(){
    //get elements by ID
    let myDiv = document.getElementById("myDiv");
    //get the value of the input
    var inputVal = document.getElementById("inputId").value;

    //for checkboxes
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.classList.add("checkbox");

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(inputVal));
    label.appendChild(checkbox);
    myDiv.appendChild(label);
    
    //clear the text field after each input
    document.getElementById("inputId").value = "";
}

//delete item in list by clicking x
function remove(){
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    myData.forEach.call(checkboxes, function(checkbox){
        checkbox.closest("label").remove();
        myData.splice(myData.indexOf(checkbox.closest("label").textContent), 1);
        });
}

//clear all items on list and array
function clearItems(){
    document.getElementById("myDiv").innerText = "";
    document.getElementById("inputId").value = "";
    myData = [];

    //clear picked item
    let randomItemLabel = document.getElementById("random-item");
    randomItemLabel.innerText = "";
}

//pick a random item and display
function pickRandomItem(){
    if (myData.length == 0)
        alert("There are no items to pick from!")
    else{
    let randomItemLabel = document.getElementById("random-item");
    const randomElement = Math.floor(Math.random() * myData.length);
    randomItemLabel.innerText = myData[randomElement];
    }
}