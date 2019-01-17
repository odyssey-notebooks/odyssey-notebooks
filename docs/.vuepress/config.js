module.exports = {
  dest: 'vuepress',
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      '/',
      '/page1',
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