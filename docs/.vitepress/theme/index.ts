/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-25 09:49:19
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 10:52:59
 * @FilePath: \lz-UI\docs\.vitepress\theme\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App, Component } from 'vue'
import Theme from 'vitepress/theme'
import '../../public/css/customStyle.css' // 自定义的主题色文件
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { globals } from '../components'
// import VcComponent from '@voice-ui/voice-components' // 上文提到的adapt层，导出vue3的组件

export default {
  ...Theme,
  enhanceApp ({ app }: {app: App}) {
    // app.use(VcComponent) 
    globals.forEach((comp: Component) => {
      app.component(comp.name as string, comp)
    })
  }
}