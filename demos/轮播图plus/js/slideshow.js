window.addEventListener('load',()=>{
    let container = document.querySelector('.container');
    let ul = document.querySelector('.slides');
    let ol = document.querySelector('.container .circles');
    let next = document.querySelector('.container .next');
    let prev = document.querySelector('.container .prev');
    let flag = true;
    let timer;
    let index = 0;
    let duration = 500;

    // 设置过度动画时间
    ul.style.transitionDuration = duration + 'ms';

    // 初始化圆点 复制第一张图到末尾
    init();
    
    //绑定事件
    next.addEventListener('click',()=>{
        if(flag){
            // 加锁
            flag = false;
            // 如果为最后一张 先播放,后跳转
            if(index + 1 === ul.children.length - 1) {
                //播放动画
                ul.style.left = ul.offsetLeft - container.clientWidth + 'px';
                index = 0;
                for(let j = 0; j < ul.children.length -1 ; j++){
                    ol.children[j].className = '';
                }
                ol.children[index].className = 'currentCircle';
                // 30ms 跳转到第一张
                setTimeout(() => {
                    ul.style.transitionDuration = '0ms';
                    ul.style.left = '0px';
                    setTimeout(() => {
                        ul.style.transitionDuration = duration + 'ms';
                    }, 30);
                }, duration - 30);
            }else {
                index ++;
                currentSlide(index);
            }
            // 解锁
            setTimeout(() => {
                flag = true;
            }, duration);
        }
    });

    prev.addEventListener('click',()=>{
        if(flag){
            // 加锁
            flag = false;
            // 如果为第一张,先跳转后播放
            if(index - 1 < 0) {
                // 30ms 跳转到最后一张
                ul.style.transitionDuration = '0ms';
                ul.style.left = - container.clientWidth * (ul.children.length - 1) + 'px';
                // 播放动画
                setTimeout(() => {
                    ul.style.transitionDuration = duration + 'ms';
                    index = ul.children.length - 2;
                    currentSlide(index);
                }, 30);
            }else {
                index --;
                currentSlide(index);
            }
            //解锁
            setTimeout(() => {
                flag = true;
            }, duration);
        }
    });

    container.addEventListener('mouseenter',()=>{
        prev.style.display = 'block';
        next.style.display = 'block';
        pause();
    });

    container.addEventListener('mouseleave',()=>{
        prev.style.display = 'none';
        next.style.display = 'none';
        run();
    })

    run();
    
    // 函数
    function init() {
        // 生成小圆点
        for(let i = 0; i < ul.children.length; i++) {
            let li = document.createElement('li');
            li.addEventListener('click',()=>{
                if(flag) {
                    flag = false;
    
                    currentSlide(i);
    
                    setTimeout(() => {
                        flag = true;
                    }, duration);
                }
            });
            ol.appendChild(li);
        }
        ol.children[0].className = 'currentCircle';

        // 复制第一张图到末尾，此时 "ul.children.length" +1 了
        let li = ul.children[0].cloneNode(true);
        ul.appendChild(li);
    }

    function currentSlide(i) {
            ul.style.left = - i * container.clientWidth + 'px';

            for(let j = 0; j < ul.children.length -1 ; j++){
                ol.children[j].className = '';
            }
            ol.children[i].className = 'currentCircle';

            index = i;
    }

    function run(){
        timer = setInterval(() => {
            next.click();
        }, 3000);
    }

    function pause(){
        clearInterval(timer);
    }

});