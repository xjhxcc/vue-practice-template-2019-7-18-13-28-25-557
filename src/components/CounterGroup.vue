<template>
    <div>
        <!-- <p>use commit :{{this.$store.state.count}}</p> -->
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
      this.$store.commit("caculateSum",1);
      this.count++;
      //this.$emit('countSum',1);
    },
    sub: function() {
      this.$store.commit("caculateSum",-1);
      this.count--;
      //this.$emit('countSum',-1);
    }
  },
  //每次修改清零
  beforeDestroy(){
    const self=this;
    self.$store.state.sum-=self.count;
  }
}
</script>
