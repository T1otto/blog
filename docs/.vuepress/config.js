module.exports = {
  // theme: 'vuepress-theme-maker',
  theme: 'yuu',
  base: "/blog/",
  title: "Go big ɔ: Go home 🍁",
  description: "navi的个人blog",
  head: [
    ['meta', { name: 'author', content: 'navi' }],
    ['meta', { name: 'keywords', content: 'navi' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    'go-top',
    [
      '@xiaopanda/vuepress-plugin-code-copy', 
      {
        buttonStaticIcon: true,
        buttonIconTitle: 'copy一下',
        buttonAlign: 'bottom',
        buttonColor: '#33FF48'
      }
    ],
    'vuepress-plugin-baidu-autopush'
  ],
  themeConfig: {
    yuu: {
			defaultDarkTheme: true,
		},
    lastUpdated: 'Last Updated',
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'intro', link: '/introduction/' },
      { text: '面经', link: '/interview/' },
      {
        text: '前端',
        items: [{
          text: '基础',
          items: [
            { text: 'HTML + CSS', link: '/H5/' },
            { text: 'JS + TS', link: '/JavaScript/' }
          ]
        }, {
          text: '框架',
          items: [
            { text: 'Vue', link: '/Vue/' },
            { text: 'React', link: '/React/' }
          ]
        }]
      },
      { text: 'Node.js', link: '/node/' },
      { text: '网络', link: '/network/' },
      { text: '算法', link: '/algorithm/' },
      { text: '数据库', link: '/database/' },
      { text: '其他', link: '/others/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: 'auto'
  }
}