import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import { setLocalCache } from './store'

import dzRequest from './service/index'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import './assets/css/index.less'
import 'normalize.css'

import registerGlobal from './global/register-global'

const app = createApp(App)

setLocalCache()

app.use(registerGlobal)
app.use(router).use(store).use(ElementPlus).mount('#app')
