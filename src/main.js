import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)


createApp(App).use(store).use(router).mount('#app')
