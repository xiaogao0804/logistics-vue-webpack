<template>
  <div class="pandian-wrap">
     <PublicHeader v-bind:msg="name"></PublicHeader>
     <Kuwei></Kuwei>
  </div>
</template>

<script>
  import PublicHeader from '../header/header.vue'
  import Kuwei from '../kuwei/kuwei.vue'

  export default {
    name:'pandian',
    data () {
      return {
        name:'库位'
      }
    },
    components:{
      PublicHeader,
      Kuwei
    }
  }
</script>

<style>
  .pandian-wrap{
    width:100%;
    height:5rem;
  }
</style>
