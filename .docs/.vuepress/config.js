module.exports = {
  base: '/vuuri/',
  port: 8888,
  title: 'Vuuri',
  description: 'Just playing around',
  head: [
    ['link', { rel: "icon", href: "/favicon.ico"}],
  ],
  theme: '@vuepress/theme-default',
  plugins: ['@vuepress/register-components'],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/install' },
      { text: 'Sandbox', link: 'https://codesandbox.io/s/serene-rgb-0d8me' },
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
            ['guide/size', 'Dynamic Size'],
            ['guide/custom_slots', 'Custom Slots'],
            ['guide/simple_drag_drop', 'Simple Drag & Drop']
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