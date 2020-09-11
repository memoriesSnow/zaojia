<template>
  <div id="app">
    <router-link to='/'></router-link>
    <router-view/>
    <home></home>
    <btn-xwl type="danger">删除阿牛</btn-xwl>
  </div>
</template>

<script>
import home from './views/home/home'

  export default{
      data(){
        return{
          a:10,
        }
      },
      components:{
        home
      },
  }
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
  list-style:none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

// .header{
//   height:80px;
//   width:1278px;
//   background: red;
//   border:white solid 1px;
//   display:flex;
//   align-items: center;
//   .image{
//     width:200px;
//     img{
//       width:100px;
//       margin:20px;
//     }
//   }
//   .header_a{
//     width:550px;
//     height:100%;
//     background:blue;
//     line-height:80px;
//     margin-left:100px;
//     a{
//       text-decoration:none;
//       margin:0 20px;
//       font-size:14px;
//       color:#999;
//     }
//     a:hover{
//       text-decoration:underline;
//       color:black;
//     }
//   }
//   .header_btn{
//     width:300px;
//     height:100%;
//     line-height:80px;
//     margin-left:128px;
//     display:flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     div{
//       color:#49C5B6;
//       a{
//         padding:8px 18px;
//         margin:5px;
//         color:#49C5B6;
//         background:white;
//         border:1px solid #49C5B6;
//         text-decoration:none;
//         font-size:14px;
//       }
//       a:hover{
//         background:#49C5B6;
//         color:white;
//       } 
//     }
//   }
// }

</style>
