module.exports = {
  port: 8888,
  title: 'Vuuri',
  description: 'Just playing around',
  theme: '@vuepress/theme-default',
  plugins: ['@vuepress/register-components'],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/install' },
      { text: 'GitHub', link: 'https://github.com/dannyyassine/vuuri' }
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting Started',   // required
          collapsable: false, // optional, defaults to true
          children: [
            ['guide/install', 'Installation']
          ]
        }
      ]
    }
  }
}