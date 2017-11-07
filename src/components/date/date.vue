<template>
    <div class="dateWrap">
      <form>
       月份：
       <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
       </select>
       &nbsp;
       日期：
          <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
       </select>
      </form>
      <input type="button" value="查询" class='btn'/>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name:'date',

    }
</script>

<style>
   .dateWrap{
       width:100%;
       background-color:#fff;
       position:relative;
  
   }
   .dateWrap form{
       width:60%;
       padding:0.3rem 0.7rem;
       
   }
   .dateWrap .btn{
      border-radius:5px;
      padding:0.08rem 0.4rem;
      background-color:#8888e2;
      color:#fff;
      border-style:none;
      border:1px solid #f4f2f4;
      position:absolute;
      top:0.25rem;
      right:0.8rem;
   }
</style>