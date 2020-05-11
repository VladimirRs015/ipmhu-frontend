import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.css'
import axiosPlugin from './plugins/axios'

Vue.use(buefy)
Vue.use(axiosPlugin)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
