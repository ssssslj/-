// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '../../../router'
import MyHeader from './school_single.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
    el: '#school_single',
    router,
    components: { MyHeader },
    template: '<my-header/>',
    
  })