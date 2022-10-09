var width = 0;
var timer,timerLock;
var current = document.getElementsByClassName("current-progress")[0];
var btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click",()=>{
    timer = setInterval(() => {
        frame();
        if(width == 100){
            clearInterval(timer);
        }
    }, 20);
})
function frame(){
    if(width < 100){
        width ++;
    }
    current.style.width = width + "%";
    current.innerHTML = width + "%";
}