import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'force-dark',
  sitemap: {
    hostname: 'https://www.lightnsale.com'
  },
  lastUpdated: true,
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
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Xrtotech/Xrtotech.github.io/refs/heads/main/logo/favicon.ico' }],
    ['meta', { name: 'description', content: 'Lightnsale is a powerful flash sale app for Shopify. Learn how to set up limited-time offers, drive urgency, and boost conversions with our official documentation.' }],
    ['meta', { name: 'keywords', content: 'Shopify flash sale app, Shopify urgency app, Lightnsale, limited-time offers, flash sale Shopify, Shopify discount timer' }],
    ['meta', { property: 'og:title', content: 'Lightnsale - Flash Sale App for Shopify' }],
    ['meta', { property: 'og:description', content: 'Boost your Shopify sales with flash deals. Learn how to configure Lightnsale and run effective flash sale campaigns.' }],
    ['meta', { property: 'og:url', content: 'https://www.lightnsale.com' }],
    ['meta', { property: 'og:image', content: 'https://www.lightnsale.com/og-image.jpg' }],
    ['link', { rel: 'canonical', href: 'https://www.lightnsale.com' }],
    ['script', 
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-RT29SCPDVK' }
    ],
    ['script', 
      {}, 
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT29SCPDVK');`
    ],
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
        text: 'Privacy Policy', link: '/docs/en/privacy_policy'
      },
      {
        text: 'Todo',
        items: [
          { text: 'Planned Tasks', link: '/docs/en/plantasks' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'shopify', link: 'https://apps.shopify.com/lightnsale' }
    ],
  }
})

