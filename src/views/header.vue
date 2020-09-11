<template>
    <div class="header">
        <div class ='image'>
          <img src ='../image/zj.png'/>
        </div>
        <div class ='header_a'>
            <router-link to="">首页</router-link>
            <router-link to="">装修套装</router-link>
            <router-link to="">样板间</router-link>
            <router-link to="">逛展厅</router-link>
            <router-link to="">我的家</router-link>
        </div>
        <div class ='header_btn'>
          <div><a href="#">预约装修</a></div>
          <div><a href="#">领取福利</a></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'header1',
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
.header{
  height:80px;
  width:1278px;
  // background: red;
  border:white solid 1px;
  display:flex;
  align-items: center;
  .image{
    width:200px;
    img{
      width:100px;
      margin:20px;
    }
  }
  .header_a{
    width:550px;
    height:100%;
    // background:blue;
    line-height:80px;
    margin-left:100px;
    a{
      text-decoration:none;
      margin:0 20px;
      font-size:14px;
      color:#999;
    }
    a:hover{
      text-decoration:underline;
      color:black;
    }
  }
  .header_btn{
    width:300px;
    height:100%;
    line-height:80px;
    margin-left:128px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    div{
      color:#49C5B6;
      a{
        padding:8px 18px;
        margin:5px;
        color:#49C5B6;
        background:white;
        border:1px solid #49C5B6;
        text-decoration:none;
        font-size:14px;
      }
      a:hover{
        background:#49C5B6;
        color:white;
      } 
    }
  }
}
</style>