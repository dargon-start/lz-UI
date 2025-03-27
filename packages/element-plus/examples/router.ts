/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-27 10:01:29
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 11:35:30
 * @FilePath: \lz-UI\packages\element-plus\examples\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/button-test',
      component: () => import('./button/button-test.vue'),
      name: 'ButtonTest'
    },
    {
      path: '/',
      redirect: '/button-test'
    }
  ]
})

export default router
