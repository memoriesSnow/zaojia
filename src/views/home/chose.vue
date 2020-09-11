<template>
  <div class='chose'>
      <slot name ='chose'>
          <div id='container'>
              <p class ='title'>全网甄选品质好货</p>
              <p class ='content'>替您优选全网好货，省力省心</p>
              <p class = 'route'>
                  <a class="href a" href = '#'>软装</a>
                  <a class="href" href = '#'>建材</a>
                  <a class="href" href = '#'>辅材</a>
                  <a class="href" href = '#'>更多</a>
              </p>
          </div>
      </slot>
  </div>
</template>

<script>
  export default{
      data(){
        return{
           href:document.getElementsByClassName('href')//array
        }
      }  
  }
</script>

<style lang="less" scoped>
    .chose{
        width:1278px;
        padding:50px 0;
        background:#F4F7F7;
        #container{
            width:1278px;
            height:300px;
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
            .route{
                margin:80px auto;
                .href{
                    margin:0 50px;
                    text-decoration: none;
                    color:#707070;
                }
                .href.a{
                    color:#49C5B6;
                }
                .href:hover{
                    color:#49C5B6;
                }
            }
        }
    }

</style>
