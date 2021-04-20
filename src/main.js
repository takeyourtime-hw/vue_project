import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
//配置请求的根路经
axios.defaults.baseURL="http://apis.juhe.cn/mobile"
//导入全局样式表
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
