import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App.vue'

import {Howl, Howler} from 'howler'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
