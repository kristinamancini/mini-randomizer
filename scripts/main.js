let myData = [];

//press 'Enter' key after input
var keyInput = document.getElementById("inputId");
keyInput.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        document.getElementById("add-item-button").click();
    }
});

//FIX
function addItem(){
    //add data list array
    let data = [""];

    //get elements by ID
    let myDiv = document.getElementById("myDiv");
    //get the value of the input
    var inputVal = document.getElementById("inputId").value;

    //for checkboxes
    var checkbox = document.createElement("input");

    if (inputVal === "")
        alert("Input empty");
    else
        document.getElementById("myUL").appendChild(checkbox);

    
    //checkbox.id = "itemBox";
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
    
    for (i = 0; i < data.length; i++){
        data[i] = inputVal;

    } 

}

//FIXED, need to clean up
function remove(){
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    // Array.from(checkboxes).forEach(element =>
    //     element.remove()
        
    // );
    //myData.splice(,1);
    // Array.prototype.forEach.call(checkboxes, function(checkbox){
    //     checkbox.closest("label").remove();
    //     myData.splice(myData.indexOf(checkbox),1);
    //     //myData.length--;
    // });

    myData.forEach.call(checkboxes, function(checkbox){
        checkbox.closest("label").remove(); //FIX, might need to connect wtih id in html
        myData.splice(myData.indexOf(checkbox.closest("label").textContent), 1);
        //myData.splice(myData.indexOf(checkbox.closest("label")), 1); //FIX..all the elements are strings
        });
}

function itemList(){
    if (document.getElementById("inputId").value.trim() == "")
        alert("Your input is empty!");

    else if (myData.length < 7){
        myData.push(document.getElementById("inputId").value);
        addItem();
    }
    else
        alert("No more items to add! You can only add 7 items.");
}

//FIX
function clearItems(){
    document.getElementById("myUL").innerHTML = "";
    document.getElementById("inputId").value = "";
    myData.length = 0;

    //clear picked item
    let randomItemLabel = document.getElementById("random-item");
    randomItemLabel.innerText = "";
}

function pickRandomItem(){
    if (myData.length == 0)
        alert("There are no items to pick from!")
    else{
    let randomItemLabel = document.getElementById("random-item");
    const randomElement = Math.floor(Math.random() * myData.length);

    randomItemLabel.innerText = myData[randomElement];
    
    //test
    //let myTest = document.getElementById("test");
    //myTest.innerText = "my array now has " + myData;

    //randomItemLabel.appendChild(myData[randomElement]);
    }
}