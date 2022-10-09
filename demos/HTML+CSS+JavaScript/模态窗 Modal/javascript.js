document.getElementsByClassName("btn")[0].addEventListener("click",showModal);
document.getElementsByClassName("closeBtn")[0].addEventListener("click",close);
var modal = document.getElementsByClassName("modal")[0];
var container = document.getElementsByClassName("modal-container")[0];

function showModal(){
    document.getElementsByClassName("modal-container")[0].classList.remove("animation-out");
    document.getElementsByClassName("modal")[0].style.display = "block";
    // console.log(document.getElementsByClassName("modal-container")[0].classList);
}

function close(){
    document.getElementsByClassName("modal-container")[0].classList.add("animation-out");
    setTimeout(() => {
        document.getElementsByClassName("modal")[0].style.display = "none";
    }, 500);
    // console.log(document.getElementsByClassName("modal-container")[0].classList);
}

window.onclick = function(event){
    if(event.target == modal){
        close();
    }
}