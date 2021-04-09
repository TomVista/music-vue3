import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import { storeSymbol, createStore } from '@/store';

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.withCredentials = true

const app = createApp(App)

app.provide(storeSymbol, createStore())

app.use(router).mount('#app')
