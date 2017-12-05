<template>
    <div class='listWrap'>
       <ul>
         <a href="www.baidu.com" v-for="item in items">
           <li>
             <img :src="item.imgUrl" class="listImg"/>
             <div class="listTxt">
               <p>{{item.msgDate}}</p>
               <p>{{item.msgTxt}} &nbsp;{{item.msgNum}}</p>
             </div>
             <p class="state">
               {{item.msgState}}
             </p>
             <i class="fa fa-angle-right"></i>
           </li>
         </a>

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
                {imgUrl:one,msgDate:'20170910001',msgTxt:'出货数量',msgNum:5,msgState:'完成'},
                {imgUrl:one,msgDate:'20170910001',msgTxt:'出货数量',msgNum:5,msgState:'完成'},
                {imgUrl:one,msgDate:'20170910001',msgTxt:'出货数量',msgNum:5,msgState:'完成'},
                {imgUrl:one,msgDate:'20170910001',msgTxt:'出货数量',msgNum:5,msgState:'完成'},
                {imgUrl:one,msgDate:'20170910001',msgTxt:'出货数量',msgNum:5,msgState:'完成'}
              ],

           }
       }
   }
</script>

<style scope>
   .listWrap{
      width:100%;

   }
   a{
     color:#000;
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
      position:relative;
   }
  .listWrap .listImg{
      width:1.2rem;
      height:1.5rem;
      margin-left:0.3rem;
  }
   .listWrap .fa-angle-right{
     position:absolute;
     right:10px;
     top:50%;
     transform: translateY(-50%);
     font-size:0.64rem;
   }
  .listTxt{
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    left:70px;
    font-size:0.38rem;
  }
  .listWrap .state{
    position:absolute;
    right:80px;
    top:30%;
    transform: translateY(-50%);
    font-size:0.64rem;
  }
</style>
