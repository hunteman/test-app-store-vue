import Vue from 'vue'
import ProductApp from './ProductApp.vue'
import store from './vuex/store'
import './assets/styles/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(ProductApp),
  store
}).$mount('#product-app')