let myData = [];

//press 'Enter' key after input
var keyInput = document.getElementById("inputId");
keyInput.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        document.getElementById("add-item-button").click();
    }
});

function addItem(){
    //add data list array
    let data = [""];

    //get elements by ID
    let myDiv = document.getElementById("myDiv");
    //get the value of the input
    var inputVal = document.getElementById("inputId").value;

    //for checkboxes
    var checkbox = document.createElement("input");

    //test
    var im = document.createElement("input");
    im.type = "image";
    im.name = "name";
    im.value = "value";
    im.classList.add("image");



    if (inputVal === "")
        alert("Input empty");
    else
        document.getElementById("myUL").appendChild(checkbox);

    
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.classList.add("checkbox");

    var label = document.createElement("label");

    label.appendChild(document.createTextNode(inputVal));
    label.appendChild(checkbox);

    myDiv.appendChild(label);

    //let lineBreak = document.createElement("br");
    //myDiv.appendChild(lineBreak);

    
    //clear the text field after each input
    document.getElementById("inputId").value = "";
    
    for (i = 0; i < data.length; i++){
        data[i] = inputVal;
    } 
}

//test FIX trying to figure out how to just grab checkbox to remove

// const checkboxes = document.querySelectorAll(".checkbox:checked");
// myData.forEach.call(checkboxes, function(checkbox){
//     checkbox.addEventListener('change', function() {
//         alert("CHECK");

//     });
//     });

// var checkboxes = document.querySelectorAll(".checkbox:checked");

// let enabledSettings = [];

// checkboxes.forEach(function(checkbox){
//     checkbox.addEventListener('change', function() {
//         enabledSettings = Array.from(checkboxes).filter(i => i.checked).map(i => i.value);
          
//         alert("CLICKED" + enabledSettings);
//       })
//     });


// cb.addEventListener('change', function() {
//   if (this.checked) 
//     alert("Checkbox is checked..");
// });

//test


function remove(){
    const checkboxes = document.querySelectorAll(".checkbox:checked");
    myData.forEach.call(checkboxes, function(checkbox){
        checkbox.closest("label").remove();
        myData.splice(myData.indexOf(checkbox.closest("label").textContent), 1);
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

function clearItems(){
    document.getElementById("myDiv").innerText = "";
    document.getElementById("inputId").value = "";
    myData = [];

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
    //var checkboxes = document.querySelectorAll(".checkbox:checked");
    //myTest.innerText = checkboxes;

    //randomItemLabel.appendChild(myData[randomElement]);
    }
}