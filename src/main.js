import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './api/service'
import axios from 'axios'
//注册全局better-scroll组件
import Scroller from '@/components/scroller'
Vue.component('Scroller',Scroller)
import Loading from '@/components/loading'
//讲Loading组件注册成全局组件
Vue.component('Loading',Loading)
Vue.prototype.axios=axios
Vue.prototype.$service=service
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
