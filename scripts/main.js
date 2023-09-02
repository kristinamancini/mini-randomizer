// const myButton = document.getElementById("add-item-button");
// myButton.onclick = () => {
//     alert("The add button was pressed");
       
// };

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
    let data = [""];
    let list = document.getElementById("myList");
    var inputVal = document.getElementById("inputId").value;
    for (i = 0; i < data.length; i++){
        let li = document.createElement("li");
        data[i] = inputVal;
        li.innerText = data[i];
        list.appendChild(li);                
    }  
}

function clearItems(){
    document.getElementById("myList").innerHTML = "";
    myData.length = 0;
}


