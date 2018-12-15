import Vue from 'vue'
//import App from './App.vue'
import Test from '@/golden-layout/test.vue'
import router from './router'
import store from './store'

import vgl from 'vue-golden-layout'
import 'golden-layout/src/css/goldenlayout-light-theme.css'
Vue.use(vgl);

Vue.config.productionTip = false

new Vue({
  vgl,
  router,
  store,
  render: h => h(Test)
}).$mount('#app')
