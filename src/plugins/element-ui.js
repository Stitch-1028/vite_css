import 'element-plus/theme-chalk/display.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// // 做全局引入，挂载到this上 这两个组件内部已经实现了globalProperties
import { ElMessageBox, ElMessage } from 'element-plus'

export default {
  install: (app) => {
    app.use(ElMessageBox)
    app.use(ElMessage)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
