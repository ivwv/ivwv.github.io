import { defineUserConfig } from "vuepress";
// 导入path
import path from "path";
// 搜索
import { searchPlugin } from "@vuepress/plugin-search";
// 组件
import { componentsPlugin } from "vuepress-plugin-components";
// 图片预览
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
// SEO优化
import { seoPlugin } from "vuepress-plugin-seo2";
// Sitemap
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
// Feed生成器
import { feedPlugin } from "vuepress-plugin-feed2";
// 移动端适配
import { pwaPlugin } from "vuepress-plugin-pwa2";
// google analytics 统计
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
// 注册组件
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { gitPlugin } from "@vuepress/plugin-git";
// 导 航
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SY's Blog",
  description: "SY's Blog",

  base: "/",
  head: [
    // 添加动态小人物 女
    [
      "script",
      {
        src: "https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js",
      },
    ],
    ["link", { rel: "icon", href: "/logo.png" }],
    /**
     * 自定义阿里巴巴适量图标图 //at.alicdn.com/t/c/font_3572268_h0ey3d84gim.css
     * 以后再生成的图标需要重新更换地址
     */
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://at.alicdn.com/t/c/font_3572268_mcxzmghn7g.css",
      },
    ],
    [
      "script",
      {
        src: "https://public-1310720021.cos.ap-shanghai.myqcloud.com/public-js%2Findex.c36f364e.js",
      },
    ],
    // ---------------------------
    //            Twitter
    // ---------------------------
    [
      "meta",
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        property: "twitter:url",
        content: "https://ivwv.github.io/",
      },
    ],
    [
      "meta",
      {
        property: "twitter:title",
        content: "❤努力提升自己❤ | SY's Blog",
      },
    ],
    [
      "meta",
      {
        property: "twitter:description",
        content:
          "分享自己的学习日常✨ 分享自己的学习心得✨ 分享自己的学习经验✨ 分享技术文章✨ 分享学习笔记✨ 分享好用资源✨",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: "",
      },
    ],
    // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    [
      "meta",
      { name: "Content-Security-Policy", content: "upgrade-insecure-requests" },
    ],
    // 全局 js
    ["script", { src: "/js/global.js" }],
    // <meta name="google-site-verification" content="LeFBm40tk1ztZLlPI1zHgbAyplU_l0lSRrjpUkqmtKw" />
    // google站长验证
    [
      "meta",
      {
        name: "google-site-verification",
        content: "LeFBm40tk1ztZLlPI1zHgbAyplU_l0lSRrjpUkqmtKw",
      },
    ],
    // <meta name="description" content="一个具有强大功能的 vuepress 主题✨">
    // 描述
    [
      "meta",
      {
        name: "description",
        content:
          "分享自己的学习日常✨ 分享自己的学习心得✨ 分享自己的学习经验✨ 分享技术文章✨ 分享学习笔记✨ 分享好用资源✨",
      },
    ],

    // <meta name="msvalidate.01" content="B7C29717C9BBED39368D957F6E16F3B5" />
    // bing站长验证
    [
      "meta",
      { name: "msvalidate.01", content: "B7C29717C9BBED39368D957F6E16F3B5" },
    ],
    // <meta name="baidu-site-verification" content="code-JYAj48wkPF" />
    // 百度站长验证
    ["meta", { name: "baidu-site-verification", content: "code-JYAj48wkPF" }],
    /*************** start 添加谷歌统计 ***********/
    /*
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-3115GBP5VH",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-3115GBP5VH');
      `,
    ],
    */
    /*************** end 添加谷歌统计 ***********/
    /*************** start google广告 ***********/
    // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5528889537462133"
    //  crossorigin="anonymous"></script>
    [
      "script",
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5528889537462133",
      },
    ],
    /********** end google 广告 **************** */
  ],
  shouldPrefetch: false,

  theme,
  plugins: [
    // 插件
    // componentsPlugin({
    // 需要全局 代理vpn访问
    //   addThis: "ra-62efc142600743a3",
    // }),
    // gitPlugin
    gitPlugin({
      createdTime: true,
      updatedTime: true,
      contributors: true,
    }),
    // 注册组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    // google analytics 统计
    // googleAnalyticsPlugin({
    //   id: "G-3115GBP5VH",
    // }),
    // 图片预览
    photoSwipePlugin({
      selector: ".theme-hope-content img",
    }),
    seoPlugin({
      // 你的选项
      // hostname为获取当前网站的域名，根据当前网站的域名设置
      // hostname: "https://ivwv.github.io",
      hostname: "https://ivwv.github.io",
      author: "SY",
      autoDescription: true,
      restrictions: "10+",
    }),
    // Sitemap 配置
    sitemapPlugin({
      hostname: "https://ivwv.github.io/",
      extraUrls: ["https://ivwv.netlify.app/"],
      changefreq: "hourly",
      modifyTimeGetter: (page): any => {
        return page.frontmatter.date;
      },
    }),
    // Feed生成器
    feedPlugin({
      hostname: "https://ivwv.github.io/",
      atom: true,
      rss: true,
      json: true,
      count: 100,
    }),
    // 移动端适配
    pwaPlugin({
      showInstall: true,
      favicon: "https://ivwv.github.io/logo.png",
      cachePic: true,
      apple: {
        icon: "https://ivwv.github.io/logo.png",
      },
    }),
    // 搜索插件注册
    searchPlugin({
      // 你的选项
      getExtraFields: (page): any => page.frontmatter.tags ?? [],
    }),
  ],
});
