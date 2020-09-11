<template>
  <div class='system'>
      <slot name ='system'>
          <div id='container'>
              <p class ='title'>系统化的施工品控</p>
              <p class ='content'>行业顶尖SAAS系统，严控施工每个环节</p>
              <!-- <div class = 'circle_container'>
                <div class = 'half_circle'></div>
              </div> -->
              <img src ='../../image/system.png'/>
              <div class = 'sentence'>
                  专业的SaaS服务平台，用标准化、系统化、流程化的方式改变传统家装服务模式，通过平台协同，任务高效流转，进而达到工程有效管控，质量及时监督，全程服务透明。
              </div>
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
    .system{
        width:1278px;
        padding:50px 0;
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
            img{
                width:90%;
            }
            .sentence{
                width:477px;
                height:200px;
                margin:0 auto;
                text-align:left;
            }
            // .circle_container{
            //     width:800px;
            //     height:300px;
            //     overflow:hidden;
            //     margin:80px auto;
            //     .half_circle{
            //         width:800px;
            //         height:800px;
            //         border:2px dashed;
            //         border-radius: 50%;
            //     }
            // } 
        }
    }

</style>
