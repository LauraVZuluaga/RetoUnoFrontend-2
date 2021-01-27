import Vue from 'vue'
import store from './store'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

