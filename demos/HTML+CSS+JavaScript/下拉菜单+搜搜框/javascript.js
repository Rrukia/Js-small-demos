var timer;
document.getElementsByClassName("dropdown")[0].addEventListener("mouseenter",apear);
document.getElementsByClassName("dropdown")[0].addEventListener("mouseleave",hide);

function apear(){
    clearTimeout(timer);
    document.getElementsByClassName("dropdown")[0].style.animation = "apear 0.6s";
    document.getElementsByClassName("dropdown")[0].style.display = "block";
}
function hide(){
    document.getElementsByClassName("dropdown")[0].style.animation = "hide 0.6s";
    timer = setTimeout(() => {
        document.getElementsByClassName("dropdown")[0].style.display = "none";
    }, 500);
}

function search() {
    var value = document.getElementById("search").value.toUpperCase();
    var lists = document.getElementsByClassName("list");
    for(let i = 0; i < lists.length; i++){
        if(lists[i].innerHTML.toUpperCase().indexOf(value) !== -1){
            lists[i].style.display = "block";
        }else{
            lists[i].style.display = "none";
        }
    }
}