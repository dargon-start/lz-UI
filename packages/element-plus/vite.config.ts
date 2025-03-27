/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-26 17:34:09
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 10:38:56
 * @FilePath: \lz-UI\packages\element-plus\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import {alias} from '../../scripts'

type DocsBuild = {
  base: string,
  build: {
    outDir: string
  } 
}

export default defineConfig(async ({ mode }) => {
  let docsBuild: DocsBuild
  if (mode === 'docs') {
    docsBuild.base = './'
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-plus'
    }
  }
  return {
    server: {
      port: '3333'
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        external: ['element-plus', 'vue']
      },
      lib: {
        entry: path.resolve(__dirname, './components/index.ts'),
        name: 'voiceUi',
        fileName: 'vc-element-plus',
        formats: ['es', 'cjs', 'umd', 'iife']
      }
    },
    resolve: {
      alias: [
        // await alias(),
        {
          find: '@',
          replacement: path.join(__dirname, '/')
        }
    ],
    },
    ...docsBuild
  }
})
