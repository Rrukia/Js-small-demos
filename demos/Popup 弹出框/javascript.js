// classList.toggle( ClassName )
// 如果类中有此class则移除，返回false; 反之没有则添加，返回true;
document.getElementsByClassName("popup")[0].addEventListener("click",()=>{
    document.getElementsByClassName("popuptext")[0].classList.toggle("show");
})
