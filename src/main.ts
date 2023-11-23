import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/index'
import router from './router'
const app = createApp(App)
// 使用vant组件
import { Toast } from 'vant'
app.use(Toast)

app.use(store)
app.use(router)
app.mount('#app')
// createApp(App).use(store).mount('#app')
