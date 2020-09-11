<template>
  <div class='price'>
      <slot name ='price'>
          <div id='container'>
              <p class ='title'>预估装修报价</p>
              <p class ='content'>无需注册，快速报价</p>
              <div class = 'blank'>
                  <div class = 'box'>
                      <div class = 'header'>
                          总价：<span>¥31231</span>
                      </div>
                        <div class = 'body'>
                            <div class = 'left'>
                                <p>计算器</p>
                                <div>
                                    <select class = 't1' >
                                        <option>毛胚房</option>
                                        <option>二手需拆旧</option>
                                    </select>
                                    <input class = 't1' value = '1'/> ㎡
                                    <input value = '1' class ='cute'/>室<input value = '1' class ='cute'/>厅<input value = '1' class ='cute'/>厨<input value = '1' class ='cute'>卫
                                </div>
                            </div>
                            <div class = 'mid'>
                                <div class = 'count'>
                                    开始计算
                                </div>
                            </div>
                            <div class = 'right'>
                                <div>硬装：<span>¥123</span></div>
                                <div>定制：<span>¥123</span></div>
                                <div>软装：<span>¥123</span></div>
                            </div>
                        </div>
                  </div>
                  <div class = 'foot'><a>了解装修套餐</a></div>
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
    .price{
        width:1278px;
        padding:50px 0;
        background:#F4F7F7;
        #container{
            width:1278px;
            height:700px;
            // position:relative;
            margin: 0 auto;
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
            .blank{
                width:970px;
                height:370px;
                background:#fff;
                margin:80px auto 10px;
                padding:15px;
                .box{
                    width:970px;
                    height:370px;
                    border:solid 2px #A7943A;
                    .header{
                        margin-top:50px;
                        font-size:18px;
                        font-weight:bold;
                        span{
                            color:#FF5114;
                            font-size:28px;
                        }
                    }
                    .body{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        width:900px;
                        height:200px;
                        .left{
                            width:284px;
                            height:200px;
                            text-align:center;
                            p{
                                margin-bottom:30px;
                            }
                            div{
                                text-align: left;
                                select{
                                    width:280px;
                                    height:30px;
                                    border:solid 2px #B4BCCC;
                                }
                                input{
                                    width:250px;
                                    height:30px;
                                    border:solid 1.5px #B4BCCC;
                                    text-align: center;
                                }
                                input:focus{
                                    outline:none;
                                    border:solid 1.5px #49C5B6;
                                }
                                .cute{
                                    width:50px;
                                    height:30px;
                                }
                                .t1{
                                    margin-bottom:20px;
                                    padding-left:10px;
                                }
                            }
                        }
                        .mid{
                            .count{
                                width:110px;
                                height:110px;
                                border:solid 1px #fff;
                                border-radius: 50%;
                                background:#FFD401;
                                line-height:110px;
                                margin:0 20px;
                            }
                        }
                        .right{
                            text-align: left;
                            div{
                                color:#BFBFBF;
                                width:225px;
                                height:10px;
                                font-size:14px;
                                padding:25px 20px;
                                border-bottom:solid 1.5px;
                                span{
                                    color:#FF5114;
                                    font-size:20px;
                                }
                            }
                        }
                    }
                }
                .foot{
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
                        cursor:pointer;
                    }
                }
            }
        }
    }

</style>
