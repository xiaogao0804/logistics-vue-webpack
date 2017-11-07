<template>
    <div class='listWrap'> 
       <ul>
          <li v-for="item in items">
            {{item.msg}}
          </li>
       </ul>
    </div>
</template>

<script type="text/ecmascript-6">
   export default{
       name:'list',
       data(){
           return{
              items:[
                  {msg:'ss'},
                  {msg:'ee'},
                  {msg:'tt'},
                  {msg:'rr'}
              ]
           }
       }
   }
</script>

<style>
   .listWrap{
      width:90%;
   }
</style>