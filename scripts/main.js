let myData = [];

//press 'Enter' key after input

var keyInput = document.getElementById("inputId");
keyInput.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        document.getElementById("add-item-button").click();
    }
});

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

function addItem(){
    //data list array
    let data = [""];
    //get elements by ID
    let list = document.getElementById("myList");
    let myDiv = document.getElementById("myItems");
    //get the value of the input
    var inputVal = document.getElementById("inputId").value;

    //for checkboxes
    let checkbox = document.createElement("input");
    checkbox.id = "itemBox";
    checkbox.type = "checkbox";

    //clear the text field
    document.getElementById("inputId").value = "";
    
    for (i = 0; i < data.length; i++){
        //creates new element
        let label = document.createElement("label");

        //sets index to the value
        data[i] = inputVal;

        //displays the value on screen
        label.innerText = data[i];
        myDiv.appendChild(label);
        myDiv.appendChild(checkbox);
        myDiv.appendChild(br);
    }  
}


// function addItem(){
//     //add to list
//     let data = [""];
//     let list = document.getElementById("myList");
//     var inputVal = document.getElementById("inputId").value;

//     //for checkboxes
//     //let myDiv = document.getElementById("items-list");
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";

//     for (i = 0; i < data.length; i++){
//         let li = document.createElement("li");
//         data[i] = inputVal;
//         li.innerText = data[i];
//         list.appendChild(li); 
//         //add checkbox
//         list.appendChild(checkbox);               
//     }  
// }

function clearItems(){
    document.getElementById("myItems").innerHTML = "";
    document.getElementById("inputId").value = "";
    //document.getElementById("myList").innerHTML = "";
    myData.length = 0;
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
    randomItemLabel.appendChild(myData[randomElement]);
    }
}