var modal = document.getElementsByClassName("modal")[0];
function modalClose() {
    modal.style.display = "none";
}

function modalShow() {
    modal.style.display = "block";
}

window.onclick = (e)=>{
    if(e.target == modal){
        modalClose();
    }
}