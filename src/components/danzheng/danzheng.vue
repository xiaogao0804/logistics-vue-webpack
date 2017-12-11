<template>
  <div class="danzheng-wrap">
     <PublicHeader v-bind:msg="name"></PublicHeader>
     <div class="danzheng-con">
        <Xian v-bind:txt="text"></Xian>
       <div class="danzheng-edit">
         <h3>内容描述</h3>
         <p class="con-edit" contenteditable="true"></p>
       </div>
     </div>
  </div>
</template>

<script>
  import PublicHeader from '../header/header.vue'
  import Xian from '../xian/xian.vue'

  export default {
    name:'danzheng',
    data(){
      return {
        name:'留证',
        text:'标题'
      }
    },
    components:{
      PublicHeader,
      Xian
    }
  }
</script>

<style>
  .clearFix:after{
    content: '';
    display: block;
    height:0;
    clear: both;
    visibility: hidden;
  }
  .danzheng-wrap{
    width:100%;
    height:5rem;
  }
  .danzheng-con{
    width:90%;
    margin:0 auto;
  }

  .danzheng-con h2{
    float: left;
  }
  .danzheng-con .name-xian{
    float: left;
    width:80%;
    border-top:1px solid #000;
    margin:40px 0 0 10px;
  }
  .danzheng-edit{
    width:100%;
  }
  .con-edit{
    width:90%;
    height:100px;
    background-color: #fff;
  }
</style>
