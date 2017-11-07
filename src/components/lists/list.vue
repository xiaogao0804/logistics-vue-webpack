<template>
    <div class='listWrap'> 
       <ul>
          <li v-for="item in items">
             <img :src="item.imgUrl" class="listImg"/>
          </li>
       </ul>
    </div>
</template>

<script type="text/ecmascript-6">
   import one from '../../assets/check.png'

   export default{
       name:'list',
       data(){
           return{
              items:[
                  {imgUrl:one},
                  {msg:'ss'},
                  {msg:'ee'},
                  {msg:'tt'},
                  {msg:'rr'}
              ]
           }
       }
   }
</script>

<style scope>
   .listWrap{
      width:100%;
   
   }
   .listWrap ul{
      width:96%;
      margin:0.2rem auto;
      -webkit-padding-start: 0;

   }
   .listWrap ul li{
      width:100%;
      list-style-type:none;
      background-color:#fff;
      margin-bottom:0.2rem;
       padding:0.3rem 0;
   }
  .listWrap .listImg{
      width:1.2rem;
      height:1.5rem;
      margin-left:0.3rem;
  }
</style>