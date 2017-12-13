<template>
   <div class="camera-wrap">
      <div class="camera-logo">
        <img src="../../assets/camera.png" alt="" class="camera-image">
      </div>
     <ul class="camera-picture clearFix">
       <li id="#0">
         <input type="file" id="fileBtn" v-on:change="upload('#fileBtn','#img')">
         <img src="" alt="" id="img" style="width: 100%;height:100%">
         <span>+</span>
       </li>
       <li id="#1">
         <input type="file" id="fileBtn2" v-on:change="upload('#fileBtn2','#img2')">
         <img src="" alt="" id="img2" style="width: 100%;height:100%">
         <span>+</span>
       </li>
       <li id="#2">
         <input type="file" id="fileBtn3" v-on:change="upload('#fileBtn3','#img3')">
         <img src="" alt="" id="img3" style="width: 100%;height:100%">
         <span>+</span>
       </li>
       <li id="#3">
         <input type="file" id="fileBtn4" v-on:change="upload('#fileBtn4','#img4')">
         <img src="" alt="" id="img4" style="width: 100%;height:100%">
         <span>+</span>
       </li>
       <li id="#4">
         <input type="file" id="fileBtn5" v-on:change="upload('#fileBtn5','#img5')">
         <img src="" alt="" id="img5" style="width: 100%;height:100%">
         <span>+</span>
       </li>
       <li id="#5">
         <input type="file" id="fileBtn6" v-on:change="upload('#fileBtn6','#img6')">
         <img src="" alt="" id="img6" style="width: 100%;height:100%">
         <span>+</span>
       </li>
     </ul>
   </div>
</template>

<script>
  export default {
    name:'camera',
    methods:{
      upload:function(c,d){
        let $c=document.querySelector(c);
        let $d=document.querySelector(d);
        let file=$c.file[0];
        let reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(e){
          $d.setAttribute("src",e.target.result);
        };
        $d.nextSiblings('span').parentNode().removeChild('span');
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
  .camera-wrap{
    width:100%;
    margin-top: 30px;
  }
  .camera-image{
    width:70px;
  }
  .camera-picture{
    width:100%;
    margin:0 auto;
    padding:0;
  }
  .camera-picture li{
    width:26%;
    height:2.6rem;
    border:1px solid #ccc;
    background-color: #fff;
    float: left;
    text-align: center;
    margin-right: 0.75rem;
    margin-top: 0.3rem;
    font-size: 0.64rem;
    position: relative;
    line-height: 2.6rem;
    list-style: none;
  }
  .camera-picture li input{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 999;
    opacity: 0;
    filter:alpha(opacity=0);
  }
  .camera-picture li span{
    position: absolute;
    left:50%;
    top:0;
    transform: translateX(-50%);
  }
  .camera-picture li:nth-child(3n){
    margin-right: 0;
  }
</style>
