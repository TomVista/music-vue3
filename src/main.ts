import { createApp,reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { storeSymbol,createStore} from '@/store/reactiveStates';

axios.defaults.baseURL='http://127.0.0.1:3000/'
axios.defaults.withCredentials=true

const app =createApp(App)

app.provide(storeSymbol,createStore())

app.use(store).use(router).mount('#app')
