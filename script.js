const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector('button');

button.addEventListener('click',addTask); 
function addTask(){
    if(inputBox.value === ''){
        alert("You cannot add an Empty Task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";   //unicode for x
        li.appendChild(span);
    }
    //After adding the task now the inputBox should be empty again
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


//saves the data so that it is not lost after we refresh the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//whenever you reopen the browser it shows you the list exactly where you left it
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();