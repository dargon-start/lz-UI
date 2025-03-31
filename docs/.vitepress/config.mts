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
      { text: 'element-ui', link: '/zh-CN/components/element-ui/button.md', activeMatch: '' },
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
      ],
      '/zh-CN/components/element-ui/': [
        {
          text: '组件',
          items: [
            { text: 'button', link: '/zh-CN/components/element-ui/button.md' },
            { text: 'title', link: '/zh-CN/components/element-ui/title.md' },
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
