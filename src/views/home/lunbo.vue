<template>
    <div class='lunbo'>
        <slot>
            <div id="container" @mouseover="mouseover" @mouseout='mouseout'>
                <div class="box"> <img src='../../image/lunbo1.jpg'> </div>
                <div class="box"> <img src='../../image/lunbo2.jpg'> </div>
                <div class="box"> <img src='../../image/lunbo3.jpg'> </div>
                <div class="box"> <img src='../../image/lunbo4.jpg'> </div>
                <div class ='btn left' id = 'left' @click='preAnimate'> &lt; </div>
                <div class ='btn right' id ='right'  @click='nextAnimate'> &gt; </div>
                <!-- <ul id='ul'></ul> -->
            </div>
        </slot>
    </div>
</template>
<script>
export default{
    name:'lunbo',
    data(){
        return{
            container:document.getElementById('container'),
            left:document.getElementById('left'),
            right:document.getElementById('right'),
            boxes:document.getElementsByClassName('box'),
            ul:document.getElementById('ul'),
            num:0,
            timer:null
        }
    },
    methods:{
        nextAnimate(){
            for(var i =0;i<this.boxes.length;i++){
                this.boxes[i].style.display = 'none';
            }
            this.num++;
            if(this.num>this.boxes.length-1){
                this.num = 0;
            }
            this.boxes[this.num].style.display = 'block';
        },
        preAnimate(){
            for(var i =0;i<this.boxes.length;i++){
                this.boxes[i].style.display = 'none';
            }
            this.num--;
            if(this.num<0){
                this.num = this.boxes.length-1;
            }
            this.boxes[this.num].style.display = 'block';
        },
        timer1(){
            this.timer = setInterval(this.nextAnimate,1000)
        },
        mouseover(){
            clearInterval(this.timer);
            // this.left.style.display = 'block';
            // this.right.style.display = 'block';
        },
        mouseout(){
            this.timer1()
            // this.left.style.display = 'none';
            // this.right.style.display = 'none';
        },
        // createli(){
        //     for(var i=0;i<this.boxes.length;i++){
        //         var a = document.createElement('li');
        //         a.style.background = 'black';
        //         a.style.borderRadius ='50%';
        //         a.style.width ='50px';
        //         a.style.height = '50px';
        //         this.ul.appendChild(a);
        //     }
        // }
    },
    mounted(){
        this.timer1();
    }
}
</script>
<style lang="less" scoped>
#container{
    width:1278px;
    height:334px;
    // background:#afc;
    margin:0 auto;
    position:relative;
    overflow:hidden;
    border:solid 1px white;
  
}
  .box{
        width:100%;
        height:100%;
        // background:#afc;
        margin:0 auto;
        text-align: center;
        line-height:300px;   
    }
    img{
        width:1278px;
    }
    .btn{
        font-size:52px;
        position:absolute;
        top:130px; 
        cursor:pointer;  
    }

#left{
    left:40px;
}
#right{
    left:1200px; 
}
// .box:nth-of-type(1){
//     background: red;
// }
// .box:nth-of-type(2){
//     background: green;
// }
// .box:nth-of-type(3){
//     background: blue;
// }
// .box:nth-of-type(4){
//     background: #666666;
// }
</style>