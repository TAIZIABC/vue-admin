import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import count from './count/index'
import message from './message/index'


// 初始化数据
// const state = {
//   count: 10
// };


export default new Vuex.Store({
  modules: {
    count,
    message,
  }
});
