import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vgl from 'vue-golden-layout'
Vue.use(vgl);
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
