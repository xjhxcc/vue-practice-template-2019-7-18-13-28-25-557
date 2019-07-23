import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    count:5,
    sum:0
  },
  getters:{
    getSum(state){
      return state.sum;
    }
    // ,
    // getSum1:state=>{
    //     return state.sum;
    // }
  },
  mutations:{
    caculateSum(state,n){
      state.sum+=n;
    }
  }
});
export default store;