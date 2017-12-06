<template>
    <div class="chuhuo-wrap">
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
      name: 'chuhuo',
      data () {
        return {
          name:'出货列表'
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
    .chuhuo-wrap{
       width:100%;
       height:5rem;
    }
</style>
