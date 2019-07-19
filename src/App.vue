<template>
  <div id="app">
    <input v-model="message" placeholder="edit me" />
    <ul id="example-1">
      <li v-for="item in Number(message)" v-bind:key="item">
        <CounterGroup></CounterGroup>
        </li>
    </ul>
    
  </div>
</template>

<script>
import CounterGroup from './components/CounterGroup.vue'
export default {
  name: "app",
  data: function() {
    return {
      message:0
    };
  },
  components:{
    CounterGroup
  }
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
</style>
