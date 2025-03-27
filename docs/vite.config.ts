/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-27 09:57:46
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 15:03:34
 * @FilePath: \lz-UI\docs\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import sideBarPlugin from './build/side-bar-plugin'
import sourceCode from './build/source-code'
import {defineConfig} from 'vite'
import path from 'path'
// import {alias} from '../scripts'

export default defineConfig({
    server: {
      proxy: {
        '/assets': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    },
    plugins: [
      // sideBarPlugin(),
      {
        ...sourceCode(),
        name: 'source-code-plugin' // 添加缺少的name属性
      }
    ],
    resolve: {
      alias: [
        // ...await alias(),
        {
          find: '/',
          replacement: path.join(__dirname, '/')
        }
      ]
    }
  })
