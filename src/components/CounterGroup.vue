<template>
    <div>
        <span>{{count}}</span>
        <button v-on:click="add">+</button><button v-on:click="sub">-</button>    
    </div>
</template>


<script>
export default {
 name:"counterGroup", 
 data:function(){
     return{
         count:0
     };
 },
 methods: {
    add: function() {
      this.count++;
    },
    sub: function() {
      this.count--;
    }
  }  
}
</script>
