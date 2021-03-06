// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mock from './mock/index'
Mock.init();

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import 'font-awesome/css/font-awesome.min.css'

import store from './store/index'

Vue.config.productionTip = false;

// 前台验证是否登入
router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if(!user&&to.path!=='/login'){
    next({path: '/login'});
  }else{
    next();
  }
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
