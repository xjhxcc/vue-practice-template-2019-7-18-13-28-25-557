<template>
    <div>
        <span>{{title}}{{count}}</span>
        <button v-on:click="add">+</button><button v-on:click="sub">-</button>    
    </div>
</template>


<script>
export default {
 name:"counterGroup", 
 props:['title'],
 data:function(){
     return{
         count:0
     };
 },
 methods: {
    add: function() {
      this.count++;
      this.$emit('countSum',1);
    },
    sub: function() {
      this.count--;
      this.$emit('countSum',-1);
    }
  }
}
</script>
