<template>
  <div class='serve'>
      <slot name ='serve'>
          <div id='container'>
              <p class ='title'>全程在线服务</p>
              <p class ='content'>随时随地了解装修进度</p>
              <div class = 'main'>
                  <div class = 'phone'>
                      <img class ='image' src = '../../image/phone1.png'/>
                  </div>
                  <div class = 'squares'>
                    <div class= 'sq1'>
                        <div class ='small'>
                            <div><img src ='../../image/cute1.png'><span>方案效果</span></div>
                            <div>手机查看平面方案、施工图纸、VR全景效果等</div>
                        </div>
                        <div class ='small'>
                            <div><img src ='../../image/cute2.png'/><span>工地播报</span></div>
                            <div>工地施工进展实时同步，工地情况一手掌握</div>
                        </div>
                    </div>
                    <div class= 'sq1'>
                        <div class ='small'>
                            <div><img src ='../../image/cute3.png'/><span>小管家</span></div>
                            <div>全程为业主提供咨、帮助、售后服务支持</div>
                        </div>
                        <div class ='small'>
                            <div><img src ='../../image/cute4.png'/><span>满意度</span></div>
                            <div>业主对施工过程进行360度评价，评价决定服务团队绩效</div>
                        </div>
                    </div>
                  </div>
                  <div class = 'get'>了解我的家</div>
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
    .serve{
        width:1278px;
        padding:50px 0;
        #container{
            width:1278px;
            height:700px;
            position:relative;
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
            .main{
                position:relative;
                display:flex;
                // justify-content: flex-start;
                .phone{
                    width:324px;
                    height:521px;
                    background-image:url('../../image/phoneshell.png');
                    margin-top: 73px;
                    // position: absolute;
                    // left: 0;
                    // bottom: 0;
                    background-position: 50%;
                    background-repeat: no-repeat;
                    background-size: cover;
                    margin-left: 100px;
                    .image{
                        width: 218px;
                        height: 384px;
                        margin-top: 61px;
                        margin-left: -10px;
                        border:solid gray 1px;
                    }
                }
                .squares{
                    width:550px;
                    height:260px;
                    display:flex;
                    flex-direction: column;
                    margin:160px 10px 0px 220px;
                    .sq1{
                        display:flex;
                        .small{
                            width:245px;
                            height:100px;
                            padding:15px;
                            text-align:left;
                            font-size:18px;
                            div{
                                margin:10px;
                            }
                            span{
                                margin-left:12px;  
                            }
                          
                        }
                        .small:hover{
                            background: #FAFAFA;
                        }
                    }
                }
                .get{
                    position:absolute;
                    top:500px;
                    left:520px;
                    padding:18px 70px;
                    border:solid 1px;
                    text-decoration:none;
                    color:#49C5B6;
                    font-size:14px;
                }
                .get:hover{
                    color:#fff;
                    background:#49C5B6;
                    cursor:pointer;
                }
            }
            

        }
    }

</style>
