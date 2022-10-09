var up = 0,left = 0;
var timer = [],timerLocker = [false,false,false,false,false];
var speed = 1, opacity1 = 0.2;
var speedP = document.getElementById('speedP');
speedP.innerHTML = 'Speed : ' + speed;

window.onkeydown = (e)=>{
    if(e.code == 'KeyD'){
        if(timerLocker[0] == false){
            timerLocker[0] = true;
            timer[0] = setInterval(() => {
                move(0,speed);
            }, 10);
        }
    }
    if(e.code == 'KeyA'){
        if(timerLocker[1] == false){
            timerLocker[1] = true;
            timer[1] = setInterval(() => {
                move(0,-speed);
            }, 10);
        }
    }
    if(e.code == 'KeyW'){
        if(timerLocker[2] == false){
            timerLocker[2] = true;
            timer[2] = setInterval(() => {
                move(-speed,0);
            }, 10);
        }
    }
    if(e.code == 'KeyS'){
        if(timerLocker[3] == false){
            timerLocker[3] = true;
            timer[3] = setInterval(() => {
                move(speed,0);
            }, 10);
        }
    }
    if(e.code == 'Space'){
        if(timerLocker[4] == false){
            timerLocker[4] = true;
            timer[4] = setInterval(() => {
                if(speed < 5){
                    if(opacity1 < 1){
                        opacity1 += 0.8/40;
                        document.getElementById('ball').style.backgroundColor = 'rgba(255, 0, 0, ' + opacity1 + ')';
                    }
                    speed = (speed*10 + 1)/10;
                    speedP.innerHTML = 'Speed : ' + speed;
                }
            }, 100);
        }
    }
}

window.onkeyup = (e)=>{
    if(e.code == 'KeyD'){
        clearInterval(timer[0]);
        timerLocker[0] = false;
    }
    if(e.code == 'KeyA'){
        clearInterval(timer[1]);
        timerLocker[1] = false;
    }
    if(e.code == 'KeyW'){
        clearInterval(timer[2]);
        timerLocker[2] = false;
    }
    if(e.code == 'KeyS'){
        clearInterval(timer[3]);
        timerLocker[3] = false;
    }
    if(e.code == 'Space'){
        clearInterval(timer[4]);
        timerLocker[4] = false;
    }
}

function move(Up,Left){
    var ball = document.getElementById("ball");
    up += Up;
    left += Left;
    if(up <= 0 )    { up = 0 };
    if(up >= 300-30 )  { up = 300-30 };
    if(left <= 0 )    { left = 0 };
    if(left >= 300-30 )    { left = 300-30 };
    ball.style.top = up+ 'px';
    ball.style.left = left + 'px';
}
