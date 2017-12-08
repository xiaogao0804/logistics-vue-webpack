<template>
  <div class="lvquan">
    <i class="fa fa-check"></i>
  </div>
</template>

<script>
  export default {
    name:'lvquan'
  }
</script>

<style>
   .lvquan{
     width:30px;
     height:30px;
     border-radius: 50%;
     background-color: #0f8000;
     position: absolute;
     right:0;
     bottom:0;
   }
   .fa-check{
     color: #fff;
     font-size:0.48rem;
     position: absolute;
     top:20%;
     left:50%;
     transform: translateX(-50%);
     z-index: 999;
   }
</style>
