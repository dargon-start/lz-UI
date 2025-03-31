/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-27 17:08:51
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 17:27:09
 * @FilePath: \lz-UI\packages\element-ui\examples\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/theme/light/index.scss'
import '@/assets/theme/dark/index.scss'

Vue.use(ElementUi)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})

