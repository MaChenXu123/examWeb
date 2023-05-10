import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/gloab.css'
import ElementPlus from 'element-plus'
import naive from 'naive-ui'
import 'element-plus/dist/index.css'
import '@arco-design/web-vue/dist/arco.css';

const app=createApp(App);
app.use(store).use(router).mount('#app')
app.use(naive)
app.use(ElementPlus)