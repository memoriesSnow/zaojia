<template>
  <div class='young'>
      <slot name ='young'>
          <div id='container'>
              <p class ='title'>年轻人的实用主义</p>
              <p class ='content'>HOME+团队研发，适合年轻人的居家功能系统</p>
              <div class = 'picture'>
                 <!-- <div class="circle c1">
                     <p>{{ p1 }}</p>
                     <div class = 'cute'></div>
                </div>
                 <div class="circle c2">
                     <p>{{ p2 }}</p>
                     <div class = 'cute'></div>
                 </div>
                 <div class="circle c3">
                     <p>{{ p3 }}</p>
                     <div class = 'cute'></div>
                 </div>
                 <div class="circle c4 ">
                     <p>{{ p4 }}</p>
                     <div class = 'cute'></div>
                 </div>
                 <div class="circle c5">
                     <p>{{ p5 }}</p>
                     <div class = 'cute'></div>
                 </div>
                 <div class="circle c6">
                     <p>{{ p6 }}</p>
                     <div class = 'cute'></div>
                 </div>
                 <div class="circle c7">
                     <p>{{ p7 }}</p>
                     <div class = 'cute'></div>
                 </div>
                 <div class="circle c8">
                     <p>{{ p8 }}</p>
                     <div class = 'cute'></div>
                 </div>
              -->
                    <div class="circle" v-for="(item,index) in arr1" :key="index">
                        <p>{{ item }}</p>
                        <div class = 'cute'>
                             <img :src="require('../../image/icon'+(index+1)+'.png')" />
                        </div>
                        
                    </div>
                    <div class="circle" v-for="(item,index) in arr" :key="index+4">
                        <div class = 'cute'>
                             <img :src="require('../../image/icon'+(index+5)+'.png')" />
                        </div>
                        <p>{{ item }}</p>
                    </div>
                </div> 
          </div>
      </slot>
  </div>
</template>

<script>
  export default{
      data(){
        return{
            arr:[
                '整装风格',
                '收纳系统',
                '娱乐中心',
                '全屋绿植'
            ],
            arr1:[
                '动线规划',
                '儿童成长',
                '智能环境',
                '安全防护'
            ]
        }
      }
  }
</script>

<style lang="less" scoped>
    .young{
        width:1278px;
        padding:50px 0;
        #container{
            width:1278px;
            height:834px;
            .title{
                width:300px;
                font-size:34px;
                padding:30px 50px 14px;
                border-bottom:solid 1px #999999;
                margin:0 auto;
                color:#2E2E2E;
            }
            .content{
                 font-size:14px;
                 margin-top:15px;
                 color:#857070;
                //  margin-bottom:50px;
            }
            .picture{
                background:url('../../image/young.png') no-repeat 50% 50%;
                width:1200px;
                height:733px;
                margin:0px auto;
                position:relative;
                .circle{
                    display:flex;
                    justify-content: flex-start;
                    align-items: center;
                    width:230px;
                    height:132px;
                    p{
                        margin-right:30px;
                        // margin-left:30px;
                    }
                    .cute{
                        width:128px;
                        height:128px;
                        border:solid 2px #49C5B6;
                        border-radius:50%;
                        box-shadow:0 0 38px rgba(88,241,222,.36);
                        display: flex;
                        align-items:center;
                        justify-content: center;
                        position:relative;
                        background:#fff;
                        margin-top:0px; 
                    }
                    .cute:hover{
                       margin-top:30px; 
                    }
                }
                .circle:nth-of-type(1){
                    position:absolute;
                    left: 237px;
                    top: 73px
                }
                .circle:nth-of-type(2){
                    position:absolute;
                    left: 89px;
                    top: 195px
                }
                .circle:nth-of-type(3){
                    position:absolute;
                    left: 106px;
                    top: 378px;
                }
                .circle:nth-of-type(4){
                    position:absolute;
                    left: 245px;
                    top: 536px;
                }
                .circle:nth-of-type(5){
                    position:absolute;
                    left: 747px;
                    top: 73px
                }
                .circle:nth-of-type(6){
                    position:absolute;
                    left: 876px;
                    top: 195px
                }
                .circle:nth-of-type(7){
                    position:absolute;
                    left: 900px;
                    top: 378px;
                }
                .circle:nth-of-type(8){
                    position:absolute;
                    left: 728px;
                    top: 536px;
                }
            }    
        }
    }

</style>
