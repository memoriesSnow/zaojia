<template>
  <div class='build'>
      <slot name ='build'>
          <div id='container'>
              <p class ='title'>{{ title }}</p>
              <p class ='content'>{{ content }}</p>
              <div class = 'images'>
                <div class ='img'>
                    <img src ='../../image/aa.jpg'/>
                    <a>{{ a1 }}</a>
                    <p><span>¥145000</span><strong>{{ style1 }}</strong></p>
                </div>
                <div class ='img'>
                    <img src ='../../image/bb.jpg'/>
                    <a>{{ a2 }}</a>
                    <p><span>¥142000</span><strong>{{ style2 }}</strong></p>
                </div>
            </div>
            <div class = 'a'><a href= 'http://localhost:8080/showroom' target="_blank">{{ more }}</a></div>
          </div>
      </slot>
  </div>
</template>

<script>
  export default{
      data(){
        return{
            title:'造年轻人新家',
            content:'美学设计与VR科技，打造年轻人科技而美的现代感新家',
            a1:'亲橙里88方美式风格',
            a2:'亲橙里87方北欧风格',
            style1:'简美风格',
            style2:'北欧风格',
            more:'更多样板间'
        }
      }
  }
</script>

<style lang="less" scoped>
    .build{
        width:1278px;
        background:#F4F7F7;
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
            }
            .images{
                display: flex;
                margin:60px auto;
                text-align:left;
                .img{
                    width:600px;
                    margin:0 auto;
                    cursor:pointer;
                    img{
                        width:600px;
                        margin-bottom:20px;
                    }
                    img:hover{
                        opacity:0.9;
                    }
                    a{
                        color:#2C3E50;
                        font-weight:bolder;
                    }
                    a:hover{
                        color:#49CED8;
                    }
                    p{
                        margin-top:18px;
                        span{
                            color:#FF5114;
                            font-weight:bolder;
                            margin-right:20px;
                        }
                        strong{
                            color:#0D7568;
                            padding:5px 15px;
                            background:#E5F2F1;
                            font-size:12px;
                            font-weight:lighter;
                        }
                    }
                  
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
