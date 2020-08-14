import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import htmlToPdf from 'common/htmlToPdf.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(htmlToPdf)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')