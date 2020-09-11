import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ownbutton from 'ownbutton'
import 'ownbutton/dist/ownbutton.css'
Vue.config.productionTip = false
Vue.use(ownbutton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
