import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle:'sass'
      })],
    }),],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      // 定义全局变量
      preprocessorOptions: {
        scss: {
          // 引入覆盖el默认变量得变量文件，并且使用
          // 您应该使用 @use 'xxx.scss' as *; 代替 @import 'xxx.scss';。因为 sass 团队说他们最终会删除 @import 语法。
          additionalData: `@use "~/assets/style/element/index.scss" as *;`
        }
      }
    },
    server: {
      host: '0.0.0.0'
    }
})
