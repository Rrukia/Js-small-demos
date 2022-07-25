var imgIndex = 0;
var canvas = document.getElementsByClassName("lightbox-canvas")[0];
var imgs = document.getElementsByClassName("thumbnails");
var lightboxImgs = document.getElementsByClassName("lightbox-thumbnails");
var mainImg = document.getElementsByClassName("lightbox-img")[0];
// 绑定事件
    // 左右切图
document.getElementsByClassName("prev")[0].addEventListener("click",()=>{showImg(--imgIndex);});
document.getElementsByClassName("next")[0].addEventListener("click",()=>{showImg(++imgIndex);});
    // 点击略缩图切图
for(let i = 0; i<imgs.length; i++){
    imgs[i].addEventListener("click",()=>{showImg(i)});
    lightboxImgs[i].addEventListener("click",()=>{showImg(i)});
}

// showImg function
function showImg(n){
    // 初始化所有略缩图，处理接收到的imgIndex防止溢出
    for(let i = 0; i < lightboxImgs.length; i++){
        lightboxImgs[i].classList.remove("active");
    }
    if(n >= lightboxImgs.length){ n = n % lightboxImgs.length; }
    while(n < 0){ n += lightboxImgs.length }
    // 主图 mainImg 赋值，更新imgIndex并展示
    mainImg.src = imgs[n].src;
    mainImg.alt = imgs[n].alt;
    mainImg.classList.remove("scale-out");
    lightboxImgs[n].classList.add("active");
    canvas.style.display = "block";
    imgIndex = n;
}

// close canvas function
document.getElementsByClassName("close")[0].addEventListener("click",close);
window.onclick = function(event){
    if(event.target == canvas){
        close();
    }
}
function close(){
    mainImg.classList.add("scale-out");
    setTimeout(() => {
        canvas.style.display = "none"; 
    }, 150);
}