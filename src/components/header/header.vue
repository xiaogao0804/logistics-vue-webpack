<template>
   <div class="publicHeader">
       <img @click="back" src="../../assets/back.png"/>
       <div class="header-name">{{msg}}</div>
   </div>
</template>

<script type="text/ecmascript-6">
    export default {
       name:'header',
       props:['msg'],
       data(){
         return {

         }
       },
       methods:{
           back:()=>{
             window.location.href = document.referrer;     //返回上一页并刷新
           }  
       }
    }
</script>

<style>
   .publicHeader{
      width:100%;
      height:1.2rem;
      background-color:rgb(91,100,119);
      position:relative;
   }
   .header-name{
      width:100%;
      color:#fff;
      font-size:0.54rem;
      text-align:center;
      line-height:1.2rem;
   }
   .publicHeader img{
      width:0.7rem;
      height:0.7rem;
      position:absolute;
      top:50%;
      left:0.2rem;
      transform:translateY(-50%);
   }
</style>
