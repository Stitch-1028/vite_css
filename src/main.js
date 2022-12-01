import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/index.scss'
import { createPinia } from 'pinia'
import elementPlusImportOnDemand from './plugins/element-ui'
const app = createApp(App)
app.use(router)
app.use(elementPlusImportOnDemand)
app.use(createPinia())
app.mount('#app')
