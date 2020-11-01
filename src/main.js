import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//二次封装请求数据接口方法
import api from './api'
Vue.prototype.$api=api
//注册全局better-scroll组件
import Scroller from '@/components/scroller'
Vue.component('Scroller',Scroller)
import Loading from '@/components/loading'
//将Loading组件注册成全局组件
Vue.component('Loading',Loading)
//挂载到全局使用
Vue.filter('setWH',(url,args)=>{
  //用正则替换
  return url.replace(/w\.h/,args)
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
