<template>
  <div class="xian-wrap clearFix">
    <h2>{{txt}}</h2>
    <p class="name-xian"></p>
  </div>
</template>

<script>
  export default {
    name:'xian',
    props:['txt'],
    date (){
      return {

      }
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
  .xian-wrap h2{
    float: left;
  }
  .xian-wrap .name-xian{
    float: left;
    width:80%;
    border-top:1px solid #000;
    margin:40px 0 0 10px;
  }

</style>
