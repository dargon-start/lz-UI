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
      '/zh-CN/guide/': [
        {
          text: '安装',
          items: [
            { text: 'element-plus', link: '' },
          ]
        },
        {
          text: '开发者指南',
          items: []
        }
      ],
      '/zh-CN/components/element-plus/': [
        {
          text: '组件',
          items: [
            { text: '按钮组件', link: '/zh-CN/components/element-plus/button' },
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
