import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需引入 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
    },
    css: {
      preprocessorOptions: {
        sass: {
          // additionalData: `$injectedColor: orange;`,
        }
      }
    },
    server: {
      host: 'localhost',
      open: true,
      proxy: {
        '/proxy': {
          // target: 'http://proxy-server.com',
          // target: loadEnv(mode, process.cwd()).VITE_BASE_API,
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxy/, ''),
        }
        // '/api': 'http://jsonplaceholder.typicode.com'
      }

    }
  }
})
