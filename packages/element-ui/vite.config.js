/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-27 15:24:19
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 17:11:23
 * @FilePath: \lz-UI\packages\element-ui\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {resolve,join} from 'path'
import vue from '@vitejs/plugin-vue2'
import jsx from '@vitejs/plugin-vue2-jsx'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  let docsBuild = {}
  if (mode === 'docs') {
    // 初始化 docsBuild 对象
    docsBuild.base = './'
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-ui'
    }
  }
  return {
    server: {
      port: 3633
    },
    plugins: [
      vue(),
      jsx(),
    ],
    build: {
      rollupOptions: {
        external: ['element-ui', 'vue']
      },
      lib: {
        entry: resolve(__dirname, './components/index.js'),
        name: 'lzElementUI',
        fileName: 'lz-element-ui',
        formats: ['es', 'cjs', 'umd', 'iife']
      }
    },
    resolve: {
      // alias: await alias()
      alias: [
        {
          find: '@',
          replacement: join(__dirname, '/')
        }
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    ...docsBuild
  }
})

