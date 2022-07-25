var container = document.getElementsByClassName("container")[0];
var title = document.getElementsByClassName("title")[0];
container.addEventListener("mouseenter",(e)=>{
    container.classList.toggle("open");
    title.className = title.className.replace("before","after");
})
container.addEventListener("mouseleave",(e)=>{
    container.classList.toggle("open");
    title.className = title.className.replace("after","before");
})