    export default{
        template:
        <div class='lunbo'>
            <slot id="container">
                <div class="box"> 1.浏览器跨域</div>
                <div class="box"> 2.[]==[],{}=={},[]==![],{}==!{}?</div>
                <div class="box"> 3.CommonJS的优缺点</div>
                <div class="box"> 4.浏览器垃圾回收机制</div>
                <div class ='btn left' id = 'left'> &lt; </div>
                <div class ='btn right' id ='right'> &gt; </div>
            </slot>
        </div>
    }
    var container = document.getElementById('container');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var boxes = document.getElementsByClassName('box');
    var num = 0;
    var timer;
    function nextAnimate(){
        for(var i =0;i<boxes.length;i++){
            boxes[i].style.display = 'none';
        }
        num++;
        if(num>boxes.length-1){
            num = 0;
        }
        boxes[num].style.display = 'block';
    }
    function preAnimate(){
        for(var i =0;i<boxes.length;i++){
            boxes[i].style.display = 'none';
        }
        num--;
        if(num<0){
            num = boxes.length-1;
        }
        boxes[num].style.display = 'block';
    }
    left.addEventListener('click',function(){
        preAnimate();
    })
    
    right.addEventListener('click',function(){
        nextAnimate();
    })

    timer = setInterval('nextAnimate()',1000);

    container.addEventListener('mouseover',function(){
        clearInterval(timer);
    });

    container.addEventListener('mouseout',function(){
        timer = setInterval('nextAnimate()',1000);  
    });