module.exports = {
  dest: 'vuepress',
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      [
        '/overview',
        'Overview'
      ],
      '/commands',
      '/cli-plugins'
    ]
  },
  title: 'Odyssey Notebooks',
  base: '/'
}