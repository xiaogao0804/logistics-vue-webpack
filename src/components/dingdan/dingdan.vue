<template>
  <div class="dingdan-wrap">
     <PublicHeader v-bind:msg="name"></PublicHeader>
     <PublicDate></PublicDate>
     <PublicList></PublicList>
  </div>
</template>

<script>
  import PublicHeader from '../header/header.vue'
  import PublicDate from '../date/date.vue'
  import PublicList from '../lists/list.vue'

  export default {
    name:'dingdan',
    data () {
      return {
        name:'任务列表'
      }
    },
    components:{
      PublicHeader,
      PublicDate,
      PublicList
    }
  }
</script>

<style>
  .dingdan-wrap{
    width:100%;
    height:5rem;
  }
</style>
