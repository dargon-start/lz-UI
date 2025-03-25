import { App } from 'vue'
import Theme from 'vitepress/theme'
import '../../public/css/customStyle.css' // 自定义的主题色文件
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import elementPlusCpm from '@lz-UI/element-plus'
import ElementPlus from 'element-plus'
// import VcComponent from '@voice-ui/voice-components' // 上文提到的adapt层，导出vue3的组件

export default {
  ...Theme,
  enhanceApp ({ app }: {app: App}) {
    app.use(ElementPlus) 
    app.use(elementPlusCpm) 
    // app.use(VcComponent) 
  }
}