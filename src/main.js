import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
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
  },
  mutations:{
    caculateSum(state,n){
      state.sum+=n;
    }
  }
})
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
