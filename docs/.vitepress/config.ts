import { defineConfig, HeadConfig } from "vitepress";
import { RssPlugin, RSSOptions } from "vitepress-plugin-rss";
import { rss } from "./genFeed";
import svgLoader from "vite-svg-loader";
import markdownImagePlugin from "./markdownPlugin";

const RSS: RSSOptions = {
  title: "罗磊的独立博客",
  baseUrl: `https://luolei.org`,
  copyright: "Copyright (c) 罗磊的独立博客",
  filename: "rss.xml",
};

export default defineConfig({
  title: "罗磊的独立博客",
  description: "luolei.org",
  cleanUrls: true,
  appearance: false,
  ignoreDeadLinks: true,
  base: "/",
  buildEnd: async (config) => {
    await rss(config);
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownImagePlugin);
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "ZUOLUOTV,科技,旅行,生活方式,程序员,互联网,自媒体,摄影师,编程,前端,前端工程师,罗磊,独立博客,LUOLEI,Vlog,YouTuber",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "我是罗磊，来自中国深圳，程序员，前端工程师，视频节目 ZUOLUOTV 制作人，旅行摄影玩家和内容创作者，中文 Vlog 拍摄者，内容主题涉及科技、数码、互联网、摄影、旅行、生活方式等领域。",
      },
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-TG5VK8GPSG",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-TG5VK8GPSG');",
    ],
  ],
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];
    const title = pageData?.frontmatter?.title || "罗磊的独立博客";
    const description = pageData?.frontmatter?.description || "罗磊的独立博客";
    const cover = pageData?.frontmatter?.cover || "/logo.png";

    head.push(["meta", { property: "og:title", content: title }]);
    head.push(["meta", { property: "og:description", content: description }]);
    head.push(["meta", { property: "og:image", content: cover }]);

    return head;
  },
  themeConfig: {
    logo: "./logo.png",
    nav: [
      { text: "ZUOLUOTV™", link: "https://zuoluo.tv/youtube" },
      {
        text: "视频",
        items: [
          { text: "YouTube", link: "https://zuoluo.tv/youtube" },
          { text: "哔哩哔哩", link: "https://zuoluo.tv/bilibili" },
        ],
      },
      { text: "RSS", link: "https://luolei.org/rss" },
      { text: "关于", link: "https://github.com/foru17" },
    ],
    socialLinks: [
      { icon: "twitter", link: "https://zuoluo.tv/twitter" },
      { icon: "github", link: "https://github.com/foru17" },
    ],

    outlineTitle: "本文导览",
    lastUpdatedText: "最后更新时间",
    footer: {
      message: `Powered By <a href="https://zuoluo.tv/vitepress">VitePress</a>`,
      copyright: `Copyright 2025 | <a href="https://luolei.org/">LUOLEI.ORG</a><br/>
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow" class="d-none d-lg-inline-block">粤ICP备14004235号</a>
      `,
    },
  },
});
