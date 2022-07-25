var canvas = document.getElementsByClassName("img-canvas")[0];
// 绑定显示大图 退出按钮
document.getElementsByClassName("img")[0].addEventListener("click",showImg);
document.getElementsByClassName("closeBtn")[0].addEventListener("click",()=>{canvas.style.display = "none";});

// 弹出大图 showImg()
function showImg(){
    var img = document.getElementsByClassName("img")[0];
    var imgPlus = document.getElementsByClassName("img-plus")[0];
    var text =document.getElementsByClassName("img-text")[0];
    imgPlus.src = img.src;
    imgPlus.alt = img.alt;
    text.innerHTML = img.alt;
    canvas.style.display = "block";
}

// 点击canvas空白处退出大图
window.onclick = (event)=>{
    if(event.target == canvas){
        canvas.style.display = "none";
    }
}