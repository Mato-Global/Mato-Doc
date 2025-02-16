import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MatoDoc",
  description: "Let’s transform the future of AI together.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Doc', link: '/doc' }
    ],

    sidebar: [
      {
        text: 'Guid',
        items: [

    
            {
              text: 'Custom AI Solutions Development',
              items: [
                {
                  text: 'Tailored AI for Your Business Needs',
                  link: '/custom-AI-solutions-development',
                },
                {
                  text: 'What We Offer',
                  link: '/what-we-offer',
                }
              ]
            },
            {
              text: 'Chatbot and Virtual Assistant Development',
              items: [
                {
                  text: 'Automate Conversations with Smart AI Tools',
                  link: '/',
                },
                {
                  text: 'What We Offer',
                  link: '/',
                }
              ]
            },
            {
              text: 'AI-Driven Automation Solutions',
              items: [
                {
                  text: 'Transform Business Operations with AI-Powered Automation',
                  link: '/',
                },
                {
                  text: 'What We Offer',
                  link: '/',
                }
              ]
            },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mato-Global' }
    ]
  }
})
