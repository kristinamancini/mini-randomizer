let myData = [];

function itemList(){
    if (myData.length < 7){
        myData.push(document.getElementById("inputId").value);
        addItem();
    }
    else
        alert("No more items to add! You can only add 7 items.");
}

function addItem(){
    //add to list
    let data = [""];
    let list = document.getElementById("myList");
    let myDiv = document.getElementById("myItems");
    var inputVal = document.getElementById("inputId").value;

    //for checkboxes
    let checkbox = document.createElement("input");
    checkbox.id = "itemBox";
    checkbox.type = "checkbox";
    
    for (i = 0; i < data.length; i++){
        let label = document.createElement("label");
        data[i] = inputVal;
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
    //document.getElementById("myList").innerHTML = "";
    myData.length = 0;
}


