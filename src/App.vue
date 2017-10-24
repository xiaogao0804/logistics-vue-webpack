<template>
  <div id="app" ref='app'>
    <InfoFirst v-on:listenChildren="callbackData"></InfoFirst>
  </div>
</template>

<script type="text/ecmascript-6">
import InfoFirst from './components/infoFirst/InfoFirst'

export default {
  name: 'app',
  components:{
     InfoFirst
  },
  methods:{
      callbackData:function(data){
         console.log(data)
      }
  },
  mounted(){
      //获取屏幕的高度
       let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
       this.$refs.app.style.height = h + 'px';
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  background-color:rgba(244, 242, 244, 1);
}
</style>
