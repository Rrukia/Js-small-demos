var slideIndex = 0;
var timer;
initialize_dots_and_button();
showSlide(slideIndex);
delayRun()

function showSlide(n){
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for(let i = 0; i < slides.length; i ++){
        slides[i].style.display = "none";
        dots[i].className = "dot";
    }
    if(n >= slides.length){
        n = n % slides.length;
    }
    while(n < 0){
        n += slides.length;
    }
    document.getElementsByClassName("slide-number")[n].innerHTML = (n+1) + " / " + slides.length;
    document.getElementsByClassName("slide-name")[n].innerHTML = "图 " + (n+1);
    slides[n].style.display = "block";
    dots[n].className += " active";
}

function initialize_dots_and_button(){
    var slides = document.getElementsByClassName("slide");
    for(let i = 0; i < slides.length; i++){
        var dot = document.createElement("button");
        dot.className = "dot";
        dot.addEventListener("click",()=>{currentSlide(i)})
        document.getElementsByClassName("dots")[0].appendChild(dot);
    }
    document.getElementsByClassName("next")[0].addEventListener("click",()=>{plusSlide(1);})
    document.getElementsByClassName("prev")[0].addEventListener("click",()=>{plusSlide(-1);})
}

function currentSlide(n){
    clearTimeout(timer);
    showSlide(n);
    slideIndex = n;
    delayRun()
}

function plusSlide(n){
    clearTimeout(timer);
    showSlide(slideIndex += n);
    delayRun()
}

function run(){
    showSlide(++slideIndex);
    timer = setTimeout(() => {
       run(); 
    }, 3000);
}

function delayRun(){
    timer = setTimeout(() => {
        run();
    }, 3000);
}