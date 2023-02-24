let input = document.getElementById("kitchen-input")
let btn = document.getElementById("add-btn")
let itemsList = document.getElementById("kitchen-items-list")
//global scope
let allInputs;

//create an empty array for storing multiple input values
let allInputsArray = []

function setLocalStorage() {
    localStorage.setItem("kitchenInput",JSON.stringify(allInputsArray))
}

function getLocalStorage() {
    if(localStorage.getItem("kitchenInput")){
        allInputsArray = JSON.parse(localStorage.getItem("kitchenInput"))
        buildUI();
    }
}

function buildUI() {

    itemsList.textContent = ""

    //get each item stored in array
    allInputsArray.forEach((item) => {
        //condition is for not display empty li
        if(item != "") {

        //create li element inside ul element
        let li = document.createElement("li")

        //create a span element for edit
        let span = document.createElement("span")
        li.appendChild(span)
        span.innerText = item;

        //li.innerText = allInputs

        //create animation for dislay list items
        li.style.cssText = "animation-name: slideIn;"
        itemsList.appendChild(li)

        //remove the input items which is typed in input box
        input.value = ""

        //focus the cursor automatically in input box after display items
        input.focus()

        //create an i element for delete icon
        let trashBtn = document.createElement("i")
        trashBtn.classList.add("fas","fa-trash")
        li.appendChild(trashBtn)

        //create an i element for edit icon
        let editBtn = document.createElement("i")
        editBtn.classList.add("fas","fa-edit")
        li.appendChild(editBtn)

        }

    });

}

//step 2
//add kitchen items
function addListItems() {
    allInputs = input.value;

    allInputsArray.push(allInputs)

    //add to local storage
    setLocalStorage();

    //get from local storage
    getLocalStorage();
    
}

//delete item from list
function deleteListItems(e) {
    if(e.target.classList[1] === "fa-trash") {
        let item = e.target.parentElement;

        //create animation for delete list items
        item.classList.add("slideOut")
        item.addEventListener("transitionend", function() {
        item.remove();
        })

        //item.remove();
    }
}

//edit items
function editListItems(e) {
    if(e.target.classList[1] === "fa-edit") {
        let editedValue = prompt("Enter New Item:")
        let item = e.target.parentElement;
        let span = item.querySelector("span")
        span.innerText = editedValue;
    }
}

//step 1
//add an event to button additems
btn.addEventListener("click",addListItems)
//add an event to ul element
itemsList.addEventListener("click",deleteListItems)
//add an event to ul element for edit
itemsList.addEventListener("click",editListItems)

getLocalStorage();


// OR ANOTHER WAY.........

//step 1
//add an event to button additems
// btn.addEventListener("click",() => {
//     let allInputs = input.value;

//     //add input items to empty array
//     kitchenItems.push(allInputs)
//     console.log(kitchenItems)

//     //create li element inside ul element
//     let li = document.createElement("li")
//     li.innerText = allInputs
//     li.style.cssText = "animation-name: slideIn;"
//     itemsList.appendChild(li)

//     //remove the input items which is typed in input box
//     input.value = ""

//     //focus the cursor automatically in input box after display items
//     input.focus()
// })