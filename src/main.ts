import { createApp } from 'vue'
import './assets/css/style.css'
import 'vant/lib/index.css'
import App from './App.vue'
import store from './store/index'
import router from './router'
import './utils/rem'
const app = createApp(App)
// 使用vant组件
import { Button, NavBar, Tabbar, TabbarItem, Checkbox, Toast, Icon } from 'vant'
app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Checkbox)
app.use(Toast)
app.use(Icon)

app.use(store)
app.use(router)
app.mount('#app')
// createApp(App).use(store).mount('#app')
