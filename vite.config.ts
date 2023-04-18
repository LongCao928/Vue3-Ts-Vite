import { fileURLToPath, URL } from 'node:url'
// import path from 'path'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需引入 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from 'vite-plugin-html'
import externalGlobals from 'rollup-plugin-external-globals'

const cdn = {
  cssCdn: [
    'https://unpkg.com/element-plus@2.3.3/dist/index.css'
  ],
  jsCdn: [
    'https://unpkg.com/vue@3.2.47/dist/vue.global.prod.js',
    'https://unpkg.com/vue-demi@0.14.0/lib/index.iife.js', // 开发同时支持Vue2和3的通用的Vue库的开发工具,而无需担心用户安装的版本
    'https://unpkg.com/axios@1.3.5/dist/axios.min.js',
    'https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.prod.js',
    'https://unpkg.com/pinia@2.0.32/dist/pinia.iife.prod.js',
    'https://unpkg.com/element-plus@2.3.3/dist/index.full.min.js',
    // 'https://unpkg.com/qrcodejs2@0.0.2/qrcode.min.js', // js生成二维码
    // 'https://unpkg.com/dplayer@1.26.0/dist/DPlayer.min.js', // 弹幕视频播放器
  ]
}

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
      }),
      createHtmlPlugin({
        inject: {
          data: {
            cssCdn: loadEnv(mode, process.cwd()).VITE_ENV === 'development' ? cdn.cssCdn : cdn.cssCdn,
            jsCdn: loadEnv(mode, process.cwd()).VITE_ENV === 'development' ? [] : cdn.jsCdn,
          }
        }
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
    },
    build: {
      assetsDir: 'assets', // 默认 assets
      reportCompressedSize: false, // 禁用 gzip 压缩大小报告，提高构建性能。默认 true
      sourcemap: false, // 构建后是否生成 sourcemap 文件
      minify: 'terser', // 默认 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。 npm add -D terser
      terserOptions: {
        // 打包后移除console和注释
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
          manualChunks() { // 参数 id
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            // if (id.includes(path.resolve(__dirname, '/src/stores/index.ts'))) {
            //   return 'vendor'
            // }
          }
        },
        // 打包忽略
        external: ['vue', 'element-plus', 'vue-router', 'axios', 'Pinia'],
        plugins: [
          externalGlobals({
            vue: 'Vue',
            'element-plus': 'ElementPlus',
            'vue-router': 'VueRouter',
            axios: 'axios',
            pinia: 'Pinia',
            // nprogress: 'NProgress'
          })
        ]
      },
    }
  }
})
