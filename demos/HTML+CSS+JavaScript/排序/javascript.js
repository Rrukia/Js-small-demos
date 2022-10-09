

function sort(){
    var lis = document.getElementsByClassName("lis");
    var switched = false;
    do{
        switched = false;
        for(let i = 0; i < lis.length-1; i++){
            if(lis[i].innerHTML.toUpperCase() > lis[i+1].innerHTML.toUpperCase()){
                lis[i].parentNode.insertBefore(lis[i+1], lis[i]);
                switched = true;
                break;
            }
            if(lis[i].innerHTML[0].toUpperCase() == lis[i+1].innerHTML[0].toUpperCase() && lis[i].innerHTML[0] > lis[i+1].innerHTML[0]){
                lis[i].parentNode.insertBefore(lis[i+1], lis[i]);
                switched = true;
                break;
            }
        }
    }while(switched == true);
}