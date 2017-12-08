<template>
   <div class="kuwei-wrap">

     <table class="kuwei-tb">
       <tr>
         <td>A</td>
         <td>B
           <Quan></Quan>
         </td>
         <td>C</td>
         <td>D</td>
       </tr>
       <tr>
         <td>E</td>
         <td>F</td>
         <td>G</td>
         <td>H</td>
       </tr>
       <tr>
         <td>G</td>
         <td>K</td>
         <td>L</td>
         <td>M</td>
       </tr>
       <tr>
         <td>N</td>
         <td>O</td>
         <td>P</td>
       </tr>
     </table>
   </div>
</template>

<script>
  import Quan from './lvquan.vue'

   export default {
     name:'kuwei',
     components:{
       Quan
     }
   }
</script>

<style>
  .kuwei-wrap{
    width:100%;
    height:5rem;
  }
  .kuwei-wrap .kuwei-tb{
    width:100%;
  }
  .kuwei-tb tr{
    width:100%;
    height:2.2rem;
  }
  .kuwei-tb tr td{
    width:25%;
    color: #fff;
    background-color: #139bc0;
    font-size: 1.22rem;
    text-align: center;
    position: relative;
  }

</style>
