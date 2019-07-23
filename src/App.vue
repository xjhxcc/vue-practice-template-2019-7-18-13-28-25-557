<template>
  <div id="app">
    <!-- <p>{{hello}}</p> -->
    请输入数字：<input v-model="message" placeholder="edit me" />
    <ul id="example-1">
      <li v-for="item in Number(message)" v-bind:key="item">
        <!-- <CounterGroup :title='head' @countSum='countSum'></CounterGroup> -->
        <CounterGroup></CounterGroup>
      </li>
      <!-- <li>the sum is :{{sum}}</li> -->
      <!-- <li>sum   is:{{this.$store.state.sum}}</li>
      <li>use getters getSum :{{this.$store.getters.getSum}}</li> -->
      <li>[computed] sum :{{countSum}}</li>
    </ul>   
  </div>
</template>

<script>
import counterGroup from './components/CounterGroup.vue';
//import axios from "axios";
export default {
  name: "app",
  data: function() {
    return {
      message:0,
      head:'数字',
      sum:0
      // hello:'aaaaaa'
    };
  },
  components:{
    "CounterGroup":counterGroup,
  },
  computed:{
    countSum:function(){
      return this.$store.getters.getSum;
    }
  }
  // ,
  // methods:{
  //   countSum(num){
  //     this.sum+=num;
  //   }
  // }
      //axios
  // ,
  // mounted(){
  //   const _this=this;
  //   axios.get("http://localhost:4444/helloworld").then(function(response){
  //     _this.hello=response.data;
  //     console.log(response.data);
  //   });
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{
  list-style:none;
}
</style>
