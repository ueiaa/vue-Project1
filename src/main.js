import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
import api from './api' // 导入api接口


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$api = api; // 将api挂载到vue的原型上复制代码


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
