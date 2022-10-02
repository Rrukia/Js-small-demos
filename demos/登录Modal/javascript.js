let modal = document.getElementsByClassName("modal")[0];
let modalContent = document.querySelector('.modal-content');
let html = document.querySelector('html');
let reLeft;
let reTop;
let flag;

modalContent.addEventListener('mousedown',(e)=>{
    if(e.target.className === 'modal-content') {
        let offsetX = e.pageX - modalContent.offsetLeft;
        let offsetY = e.pageY - modalContent.offsetTop;

        modalContent.addEventListener('mousemove',move);

        modalContent.addEventListener('mouseup',(e)=>{
            modalContent.removeEventListener('mousemove',move);
        });

        function move(e) {
            let left = e.pageX - offsetX;
            let top = e.pageY - offsetY;

            if(left >= 0 && left + modalContent.offsetWidth <= html.clientWidth) {
                modalContent.style.left = `${left}px`;
            }

            if(top >= 0 && top + modalContent.offsetHeight <= html.clientHeight) {
                modalContent.style.top = `${top}px`;
            }
        }
    }

});

window.onclick = (e)=>{
    if(e.target == modal) {
        modalClose();
    }
}

function modalClose() {
    modal.style.display = "none";
    modalContent.style.left = `${reLeft}vw`;
    modalContent.style.top = `${reTop}vw`;
}

function modalShow() {
    modal.style.display = "block";
    if(!flag){
        reLeft = modalContent.offsetLeft / html.clientWidth *100;
        reTop = modalContent.offsetTop / html.clientWidth *100;
        flag = 1;
    }
}

