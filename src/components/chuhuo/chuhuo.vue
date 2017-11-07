<template>
    <div class="chuhuo-wrap">
     <PublicHeader v-bind:msg="name"></PublicHeader>
    </div>
</template>


<script>
    import PublicHeader from '../header/header.vue'

    export default {
      name: 'chuhuo',
      data () {
        return {
          name:'出货'
        }
      },
      components:{
         PublicHeader
      }
    }
</script>


<style>
    .chuhuo-wrap{
       width:100%;
       height:5rem;
       background-color:green;
    }
</style>
