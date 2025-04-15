import { defineConfig } from 'vitepress'

export default defineConfig({
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
  title: "Limited Sales App Doc",
  description: "Shopify Limited Sales App optimizes limited sales, boosting engagement and conversions.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/en/introduction' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Limited Sales?', link: '/docs/en/introduction' },
          { text: 'App Plan', link: '/docs/app_plan' },
        ]
      },
      {
        text: 'Quick Start',
        items: [
          { text: 'Step1 Install', link: '/docs/install' },
          { text: 'Step2 CustomUI', link: '/docs/customui' },
          { text: 'Step3 Create Event', link: '/docs/create_event' },
        ]
      },
      {
        text: 'Todo',
        items: [
          { text: 'Planned Tasks', link: '/docs/plantasks' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'shopify', link: 'https://apps.shopify.com' }
    ]
  }
})
