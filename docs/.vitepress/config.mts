import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cc VitePress docs",
  description: "Ccc VitePress docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Java',
        items: [
          {text: 'maven', link:'/Java/maven'},
          {text: 'IOPut', link: '/Java/io-basic' },
        ]
      },
      {
        text: '语言大大大模型',
        items: [
          { text: '初识大语言模型',link:'/LLM/hello-llm'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChenCC-Maker/cc-vitepress-docs' }
    ]
  }
})
