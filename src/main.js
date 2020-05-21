import Vue from 'vue'
import App from './ui/App.vue'
import store from './adapter/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
