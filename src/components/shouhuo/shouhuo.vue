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
                 <input type="text" placeholder="输入数量"  v-model='message'/>
             </div>
             <table class="jianpan" cellspacing="0" style="position:relative;bottom:0">
                 <tr>
                    <td v-on:click="number(7)">7</td>
                    <td v-on:click="number(8)">8</td>
                    <td v-on:click="number(9)">9</td>
                    <td rowspan='2' v-on:click='del'>
                       <img src="../../assets/delete.png"/>
                    </td>
                 </tr>
                 <tr>
                    <td v-on:click="number(4)">4</td>
                    <td v-on:click="number(5)">5</td>
                    <td v-on:click="number(6)">6</td>
                 </tr>
                 <tr>
                    <td v-on:click="number(1)">1</td>
                    <td v-on:click="number(2)">2</td>
                    <td v-on:click="number(3)">3</td>
                    <td rowspan='2' style="background-color:rgb(59,155,252);color:#fff;">
                      确认
                    </td>
                 </tr>
                  <tr>
                    <td colspan='3' v-on:click="number(0)">0</td>
                 </tr>
             </table>
          </div>
    </div>
</template>


<script type="text/ecmascript-6">
    import PublicHeader from '../header/header.vue'

    //console.log(this)

    export default {
      name: 'shouhuo',
      data () {
        return {
          name:"收货",
          message:'',
        }
      },
      components:{
         PublicHeader
      },
      methods:{
         number:function(num){
            console.log(num);
            this.$data.message+=num;           
         },
         del:function(){
           //console.log(this.$data.message);
           let tdNum=this.$data.message;
           //console.log(tdNum.length);
            let numLen=tdNum.length;
           let iptNum=tdNum.slice(0,numLen-1);
           //console.log(iptNum)
           this.$data.message=iptNum;
         },
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
       padding:0.2rem 0 1rem 0;
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
       padding:0.2rem 0 1rem 0;
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
       height:1.3rem;
       display:block;
       border-radius:0.5rem;
       margin:1rem auto;
       border:1px solid #ccc;
       font-size:0.48rem;
       text-align:center;
    }
    .jianpan{
       width:100%;
       background-color:#fff;
    }
    .jianpan td{
       width:25%;
       height:1.5rem;
       font-size:0.78rem;
       font-weight:bold;
       border:1px solid #000;
       border-left:0;
       border-top:0;
       text-align:center;
       cursor:pointer;
    }
    .jianpan td img{
       width:1rem;
    }
    .jianpan td:nth-child(1){
        border-left:1px solid #000;
    }
    .jianpan tr:nth-child(1) td{
        border-top:1px solid #000;
    }
</style>
