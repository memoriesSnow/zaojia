<template>
    <div class="tail">
        <div class = 'top'>
            <div class = 'left'>
                <div class = 'imgClass'>

                </div>
                <div class = 'textClass'>
                    造年轻人的新家
                </div>
            </div>
            <div class = 'mid'>
                <div class = 'children'>
                    <p class = 'title'>关于造家</p>
                    <a class = 'content' href = '#'>造家理念</a>
                    <a class = 'content' href = '#'>团队介绍</a>
                    <a class = 'content' href = '#'>加入造家</a>
                </div>
                <div class = 'children'>
                    <p class = 'title'>帮助中心</p>
                    <a class = 'content' href = '#'>装修宝典</a>
                    <a class = 'content' href = '#'>报价说明</a>
                    <a class = 'content' href = '#'>品牌故事</a>
                </div>
                <div class = 'children'>
                    <p class = 'title'>服务支持</p>
                    <a class = 'content' href = '#'>服务保障</a>
                    <a class = 'content' href = '#'>用户协议</a>
                    <a class = 'content' href = '#'>售后服务</a>
                </div>
                <div class = 'children'>
                    <p class = 'title'>商业合作</p>
                    <a class = 'content' href = '#'>设计师入驻</a>
                    <a class = 'content' href = '#'>供应商合作</a>
                    <a class = 'content' href = '#'>渠道合作</a>
                    <a class = 'content' href = '#'>媒体合作</a>
                    <a class = 'content' href = '#'>品牌合作</a>
                </div>
            </div>   
            <div class = 'right'>
                <div>
                    <p class = 'connet'>联系我们</p>
                    <p class = 'time'>9:00 ~ 21:00</p>
                    <p class = 'online'>在线客服</p>
                </div> 
            </div>
        </div>
        <div class = 'bot'></div>
    </div>
</template>
<script>
export default {
    name:'tail',
    data(){
      return{
        
      }
    }
}
</script>
<style lang="less" scoped>
*{
  margin:0;
  padding:0;
  list-style:none;
}
.tail{
    width:1280px;
    height:450px;
    background:#333333;
    border:solid 1px;
    .top{
        width:980px;
        height:66%;
        border-bottom:solid #AAAAAA 1px;
        margin:30px auto;
        display:flex;
        align-items: center;
        .left{
            padding:100px 0;
            width:25%;
            height:180px;
            filter: grayscale(1);
            .imgClass{
                width: 97px;
                height: 45px;
                background-image: url('../image/zj.png');
                background-repeat: no-repeat;
                background-size: 100%;
            }
            .textClass{
                width: 100px;
                height: 58px;
                color:#49C5B6;
                font-size:14px;
            }
        }
        .left:hover{
            filter: grayscale(0); 
        }
        .mid{
            width:40%;
            height:200px;
            padding:0 60px;
            border-left:solid #AAAAAA 1px;
            border-right:solid #AAAAAA 1px;
            display:flex;
            .children{
                width:25%;
                height:100%;
                text-align: left;
                font-size:14px;
                color:#A6A6A6;
                font-weight:lighter;
                display:flex;
                flex-direction: column;
                .title{
                    margin-bottom:30px;
                }
                .content{
                    margin: 10px 0;
                    color:#A6A6A6;
                    text-decoration: none;
                }
                .content:hover{
                    color:#49C5B6;
                }
            }
        }
        .right{
            width:40%;
            height:200px; 
            display: flex;
            justify-content: center;
            div{
                width:60%;
                height:50%; 
                text-align: left;
                font-size:14px;
                color:#A6A6A6;
                margin:10px 0 0 10px;
                .connet{
                    margin:20px 0;
                }
                .time{
                    margin:20px 0;
                }
                .online{
                    padding:7px 3px;
                    width:50%;
                    // height:20px;
                    background: #555555;
                    border:solid 1px #555555;
                    border-radius:18px;
                    text-align:center;
                    margin-top:40px;
                }
                .online:hover{
                    background:#49C5B6;
                    color:#fff;
                }
            } 
        }
    }
}
</style>