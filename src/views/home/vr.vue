<template>
  <div class='vr'>
      <slot name ='vr'>
          <div id='container'>
              <p class ='title'>可视化的VR设计服务</p>
              <p class ='content'>所见即所得，看到未来的家</p>
              <div class = 'pic'>
                  <img src ='../../image/vr.png'/>
              </div>
                <div class = 'a'><a href= '#'>了解更多VR设计</a></div>
          </div>
      </slot>
  </div>
</template>

<script>
  export default{
      data(){
        return{
            
        }
      }
  }
</script>

<style lang="less" scoped>
    .vr{
        width:1278px;
        padding:50px 0;
        background:#F4F7F7;
        #container{
            width:1278px;
            height:727px;
            .title{
                width:320px;
                font-size:34px;
                padding:30px 40px 14px;
                border-bottom:solid 1px #999999;
                margin:0 auto;
                color:#2E2E2E;
            }
            .content{
                 font-size:14px;
                 margin-top:15px;
                 color:#857070;
            }
            .pic{
                width:1000px;
                height:400px;
                margin:60px auto 20px;
                img{
                   width:800px;
                }
            }
            .a{
                margin-top:80px;
                a{
                    padding:18px 60px;
                    border:solid 1px;
                    text-decoration:none;
                    color:#49C5B6;
                    font-size:14px;
                }
                a:hover{
                    color:#fff;
                    background:#49C5B6;
                }
            }
        }
    }

</style>
