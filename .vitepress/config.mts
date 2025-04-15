import { defineConfig } from 'vitepress'

export default defineConfig({

  title: "Limited Sales App Doc",
  description: "Shopify Limited Sales App optimizes limited sales, boosting engagement and conversions.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/introduction' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Limited Sales?', link: '/docs/introduction' },
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
