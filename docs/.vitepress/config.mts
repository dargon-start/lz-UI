/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-25 09:43:39
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 10:59:14
 * @FilePath: \lz-UI\docs\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "components docs",
  description: "a components docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '', activeMatch: '' },
      { text: 'element-plus', link: '/zh-CN/components/element-plus/button', activeMatch: '' },
      { text: 'element-ui', link: '', activeMatch: '' },
      { text: 'ant-design', link: '', activeMatch: '' }
    ],

    sidebar: {
      '/zh-CN/components/element-plus/': [
        {
          text: '组件',
          items: [
            { text: '按钮组件', link: '/zh-CN/components/element-plus/button.md' },
          ]
        },
        {
          text: '显示',
          items: [
            { text: '按钮组件', link: '/zh-CN/components/element-plus/button' },
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
