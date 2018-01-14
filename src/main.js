// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import storeConfig from './store/store-config'
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.$loader = {
  start () {},
  finish () {}
}
Vue.use(VueResource)
const store = new Vuex.Store(storeConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
