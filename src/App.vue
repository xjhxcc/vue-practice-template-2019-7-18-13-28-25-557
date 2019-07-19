<template>
  <div id="app">
    <span>{{count}}</span>
    <button v-on:click="count++">点我+</button>
    <button v-on:click="count--">点我-</button>
    <button v-on:click="add">+++</button>
    <button v-on:click="sub">---</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data:function(){
    return {
      count:0
    };
  },
  methods:{
    add:function(){
      this.count++;
    },
    sub:function(){
      this.count--;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
