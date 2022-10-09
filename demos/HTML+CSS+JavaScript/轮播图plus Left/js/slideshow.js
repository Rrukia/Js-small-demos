window.addEventListener('load',()=>{
    // 绑定变量
    let container = document.querySelector('.container');
    let ul = document.querySelector('.slides');
    let ol = document.querySelector('.container .circles');
    let next = document.querySelector('.container .next');
    let prev = document.querySelector('.container .prev');
    let flag = true;
    let timer;
    let index = 0;
    let duration = 500;
    
    
    // 初始化DOM, 复制第一张 slide 到末尾
    init();


    //绑定事件
    next.addEventListener('click',funNext);
    prev.addEventListener('click',funPrev);
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


    // 开始自动播放
    run();
    
    
    // 函数
    // 每次滚动时设置过渡；跳转时删除过度
    // ul.style.transition = 'all ' + duration + 'ms';
    // ul.style.transition = 'none';
    function funNext() {
        if(flag){
            // 加锁
            flag = false;
            // 如果为最后一张 先播放,后跳转
            if(index + 1 === ul.children.length - 1) {
                //播放动画
                ul.style.transition = 'all ' + duration + 'ms';
                ul.style.left = ul.offsetLeft - container.clientWidth + 'px';
                index = 0;
                for(let j = 0; j < ul.children.length -1 ; j++){
                    ol.children[j].className = '';
                }
                ol.children[index].className = 'currentCircle';
                // 跳转到第一张
                // 可用回调函数保证在 transition 结束后再跳转,但可能因阻塞而失效,故推荐使用 transitionend 事件侦听
                // setTimeout(() => {
                //     ul.style.transition = 'none';
                //     ul.style.left = '0px';
                // }, duration);
                ul.addEventListener('transitionend',(e)=>{
                    if(index === 0){
                        ul.style.transition = 'none';
                        ul.style.left = '0px';
                    }
                });
            }else {
                ul.style.transition = 'all ' + duration + 'ms';
                index ++;
                currentSlide(index);
            }
            // 解锁
            setTimeout(() => {
                flag = true;
            }, duration);
        }
    }

    function funPrev() {
        if(flag){
            // 加锁
            flag = false;
            // 如果为第一张,先跳转后播放
            if(index - 1 < 0) {
                // 跳转到最后一张
                ul.style.transition = 'none';
                ul.style.left = - container.clientWidth * (ul.children.length - 1) + 'px';
                // 利用回调函数机制，保证 left 跳转完毕后再加播放
                setTimeout(() => {
                    index = ul.children.length - 2;
                    ul.style.transition = 'all ' + duration + 'ms';
                    currentSlide(index);
                }, 0);
            }else {
                ul.style.transition = 'all ' + duration + 'ms';
                index --;
                currentSlide(index);
            }
            //解锁
            setTimeout(() => {
                flag = true;
            }, duration);
        }
    }

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
            ul.style.transition = 'all ' + duration + 'ms';
            next.click();
        }, 3000);
    }

    function pause(){
        clearInterval(timer);
    }
});