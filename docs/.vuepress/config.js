module.exports = {
  dest: 'vuepress',
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      '/',
      '/commands',
      '/cli-plugins',
      [
        '/page3',
        'Custom link page'
      ]
    ]
  },
  title: 'Odyssey Notebooks',
  base: '/odyssey-notebooks/'
}