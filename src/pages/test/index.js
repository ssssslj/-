// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MyFooter from './index.vue'
import router from '../../../router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#end',
  router,
  components: { MyFooter },
  template: '<my-footer/>',
})
