module.exports = {
  base: '/vuuri/',
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
        },
        {
          title: 'Examples',   // required
          collapsable: false, // optional, defaults to true
          children: [
            ['guide/basic_usage', 'Basic Usage'],
            ['guide/using_options', 'Using Options'],
            ['guide/custom_slots', 'Custom Slots']
          ]
        },
        {
          title: 'Api',   // required
          collapsable: false, // optional, defaults to true
          children: [
            ['guide/props', 'Props'],
            ['guide/methods', 'Methods'],
            ['guide/events', 'Events'],
            ['guide/slots', 'Slots']
          ]
        }
      ]
    }
  }
}