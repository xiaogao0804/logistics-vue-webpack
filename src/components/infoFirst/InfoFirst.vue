<template>
<div>
<router-view keep-alive></router-view>
   <div class="info-wrap" v-show="this.$data.num==1?isShow:!isShow">
      <div class='info-header'>
          <span>管理员，您好</span>
      </div>
      <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
           <td v-on:click="toggle">
           <router-link to="/shouhuo">
              <img src="../../assets/receiving.png" class="info-shouhuo"/>
              <span class="shouhuo-txt">收货</span>
           </router-link>
           </td>
           <td v-on:click="toggle">
              <router-link to="/chuhuo">
                 <img src="../../assets/receiving.png" class="info-shouhuo"/>
                 <span class="shouhuo-txt">出货</span>
              </router-link>
           </td>
        </tr>
        <tr>
           <td>
           <router-link to="/shouhuo">
              <img src="../../assets/receiving.png" class="info-shouhuo"/>
              <span class="shouhuo-txt">订单</span>
           </router-link>
           </td>
           <td>
              <router-link to="/shouhuo">
                 <img src="../../assets/receiving.png" class="info-shouhuo"/>
                 <span class="shouhuo-txt">盘点</span>
              </router-link>
           </td>
        </tr>
        <tr>
           <td>
           <router-link to="/shouhuo">
              <img src="../../assets/receiving.png" class="info-shouhuo"/>
              <span class="shouhuo-txt">单证</span>
           </router-link>
           </td>
           <td v-on:click="toggle">
              <router-link to="/shouhuo">
                 <img src="../../assets/receiving.png" class="info-shouhuo"/>
                  <span class="shouhuo-txt">退货</span>
              </router-link>
           </td>
        </tr>
      </table>

   </div>
   </div>
</template>

<script>
export default {
  name: 'InfoFirst',
  data () {
    return {
      isShow:true,
      num:1
    }
  },
   methods:{
         toggle:function(){
            this.$emit("listenChildren",this.$data.num=0)
         }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .info-wrap{
      width:100%;
   }
   .info-header{
      width:100%;
      height:2.3rem;
      background-color:rgb(91,100,119);
      position:relative;
    }
    .info-header span{
       font-size:0.78rem;
       color:#fff;
       position:absolute;
       top:10%;
       left:2%;
    }
    .info-shouhuo{
        width:40%;
    }

    .info-wrap table td{
       border:1px solid #ccc;
       text-align:center;
       padding:0.8rem 0;
     }
     .info-wrap table td{
         border-right:0;
         position:relative;
        border-top:0;
     }
      .info-wrap table td:nth-child(2n+1){
         border-left:0;
      }
      .info-wrap .shouhuo-txt{
        position:absolute;
        bottom:8%;
        left:50%;
        transform:translateX(-50%);
        font-size:0.42rem;
        color:#000;
      }

</style>
