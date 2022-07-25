var myNodelist = document.getElementsByClassName("list");
var ul = document.getElementsByClassName("myul")[0];

// Create close span for every list
createClose();
function createClose(){
    for(let i = 0; i < myNodelist.length; i++){
        var span = document.createElement("span");
        span.className = "delete";
        span.innerHTML = "X"
        myNodelist[i].appendChild(span)
    }
}

//Add classname "checked" when clicking on a list item; Dlete a item when clicking a "X span";
ul.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    if(e.target.tagName == "SPAN"){
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
})

//Create a new list item when clicking on the "Add" button
function addList(){
    var list = document.createElement("li");
    var input = document.getElementById("newListInput");
    var span = document.createElement("span");
    if(input.value != ""){
        //create new list
        list.className = "list";
        list.innerHTML = input.value;
        document.getElementsByClassName("myul")[0].appendChild(list);
        //create close button for this list
        span.className = "delete";
        span.innerHTML = "X"
        list.appendChild(span);
        //reset input
        input.value = "";
        input.focus();
    }
}
document.getElementsByClassName("addbtn")[0].addEventListener("click",()=>{
    addList();
})