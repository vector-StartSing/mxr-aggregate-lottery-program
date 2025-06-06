import {createApp} from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from './router'
const app = createApp(App)
app.use(ElementPlus)
app.use(Router)
app.mount('#app')
