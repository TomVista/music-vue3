import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import { storeSymbol, createStore } from '@/store';

axios.defaults.baseURL = 'https://music-vue3.vercel.app/'
axios.defaults.withCredentials = true

const app = createApp(App)

app.provide(storeSymbol, createStore())

app.use(router).mount('#app')
