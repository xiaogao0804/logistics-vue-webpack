<template>
    <div class="shouhuo-wrap">
         <PublicHeader v-bind:msg="name"></PublicHeader>
         <div class="shouhuo-info">
             <div class="pihao">
                 <p>批号</p>
                 <div>
                    <form>
                       <label>国际</label>
                       <select>
                           <option> </option>
                           <option>G</option>
                           <option>W</option>
                        </select>
                       <label class="tiaoma">条码</label>
                       <select>
                           <option> </option>
                           <option>333222222</option>
                           <option>666666777</option>
                        </select>
                    </form>
                 </div>
             </div>
             <div class="kuwei">
                 <p>库位</p>
                 <div>
                    <form>
                       <label>货架</label>
                       <select>
                           <option> </option>
                           <option>3323322332</option>
                           <option>3434555567</option>
                        </select>
                    </form>
                 </div>
             </div>
             <div class="edit-num">
                 <input type="text"/>
             </div>
          </div>
    </div>
</template>


<script type="text/ecmascript-6">
    import PublicHeader from '../header/header.vue'

    export default {
      name: 'shouhuo',
      data () {
        return {
          name:"收货"
        }
      },
      components:{
         PublicHeader
      }
    }
</script>

<style>
    .shouhuo-wrap{
       width:100%;
    }
    .shouhuo-info{
       width:100%;
       margin-top:-0.5rem;
       border:1px solid #fff;
       border-left:0;
       border-right:0;
    }
    .shouhuo-info .pihao{
       width:100%;
       background-color:#fff;
       padding:0.2rem 0 0.5rem 0;
    }
    .pihao form select{
       border:1px solid #000;
    }
    .pihao p{
       width:3rem;
       margin:0.5rem 0.2rem;
       font-size:0.48rem;
    }
    .pihao div{
      margin:-0.3rem 0.5rem;
      font-size:0.42rem;
    }
    .pihao form .tiaoma{
        margin-left:1rem;
       }
    .shouhuo-info .kuwei{
       width:100%;
       background-color:#fff;
       padding:0.2rem 0 0.5rem 0;
       margin-top:0.4rem;
    }
    .kuwei form select{
       border:1px solid #000;
    }
    .kuwei p{
       width:3rem;
       margin:0.5rem 0.2rem;
       font-size:0.48rem;
    }
    .kuwei div{
      margin:-0.3rem 0.5rem;
      font-size:0.42rem;
    }
    .edit-num input{
       width:35%;
       height:1rem;
       display:block;
       border-radius:0.2rem;
       margin:1rem auto;
       border:1px solid #000;
       font-size:0.48rem;
       text-align:center;
    }
</style>
