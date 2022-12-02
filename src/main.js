import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/index.scss'
import 'element-plus/theme-chalk/el-message.css'
import { createPinia } from 'pinia'
/**
 * 将elementUI 中 Elmessage 以及 ElmessageBox 的样式从新引入注册
 */
// import elementPlusImportOnDemand from './plugins/element-ui'
const app = createApp(App)
app.use(createPinia())
app.use(router)
// app.use(elementPlusImportOnDemand)
app.mount('#app')
