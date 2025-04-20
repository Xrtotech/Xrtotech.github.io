import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'force-dark',
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    // zh: {
    //   label: '简体中文',
    //   lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
    //   link: '/docs/zh/introduction' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

    //   // 其余 locale 特定属性...
    // }
  },
  title: "Lightnsale",
  description: "Launch limit sale events in minutes",
  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Xrtotech/Xrtotech.github.io/refs/heads/main/logo/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/en/introduction' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Lightnsale?', link: '/docs/en/introduction' },
          { text: 'Pricing', link: '/docs/en/pricing' },
        ]
      },
      {
        text: 'Quick Start',
        items: [
          { text: 'Install', link: '/docs/en/install' },
          { text: 'CustomUI', link: '/docs/en/customui' },
          { text: 'Anti Fraud', link: '/docs/en/anti_fraud' },
          { text: 'Create Event', link: '/docs/en/create_event' },
        ]
      },
      {
        text: 'Todo',
        items: [
          { text: 'Planned Tasks', link: '/docs/en/plantasks' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'shopify', link: 'https://apps.shopify.com' }
    ]
  }
})

