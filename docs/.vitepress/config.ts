import { defineConfig } from 'vitepress'
import { rss } from './genFeed'
export default defineConfig({
  title: "罗磊的独立博客",
  description: "luolei.org",
  cleanUrls: true,
  appearance:false,
  ignoreDeadLinks: true,
  displayAllHeaders: true,
  base:'/',
  buildEnd: rss,
  markdown: {
    lineNumbers: true
  },
  head: [
    ['meta', { name: 'keywords', content: 'ZUOLUOTV,科技,旅行,生活方式,程序员,互联网,自媒体,摄影师,编程,前端,前端工程师,罗磊,独立博客,LUOLEI,Vlog,YouTuber'}],
    ['meta', { name: 'description', content: '我叫罗磊，来自中国深圳，程序员，前端工程师，视频节目 ZUOLUOTV 制作人，旅行摄影玩家和内容创作者，中文 Vlog 拍摄者，内容主题涉及科技、数码、互联网、摄影、旅行、生活方式等领域。'}],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-TG5VK8GPSG',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-TG5VK8GPSG');",
    ],
  ],
  themeConfig: {
    logo:'./logo.svg',
    nav: [
      { text: 'ZUOLUOTV™', link: 'https://zuoluo.tv/youtube' },
      {
        text: '视频',
        items: [
          { text: 'YouTube', link: 'https://zuoluo.tv/youtube' },
          { text: '哔哩哔哩', link: 'https://zuoluo.tv/bilibili' },
        ]
      },
      { text: '关于', link: 'https://twitter.com/luoleiorg' },
      { text: 'RSS', link: 'https://luolei.org/rss.xml' }
    ],
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/luoleiorg' },
      { icon: 'github', link: 'https://github.com/foru17' }
    ],

    outlineTitle:'本文导览',
    lastUpdatedText: '最后更新时间',
    footer: {
      message: `<a href="https://luolei.org/">LUOLEI.ORG</a>.`,
      copyright: `Copyright © 2023 <a href="https://github.com/foru17" target="_blank">@foru17</a>.
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow" class="d-none d-lg-inline-block">粤ICP备14004235号</a>
      `
    }
  },

})
