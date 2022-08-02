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
// 导 航
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SY's Blog",
  description: "SY's Blog",

  base: "/",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    // ["script", { src: "/js/global.js" }],
    // <meta name="google-site-verification" content="LeFBm40tk1ztZLlPI1zHgbAyplU_l0lSRrjpUkqmtKw" />
    // google站长验证
    [
      "meta",
      {
        name: "google-site-verification",
        content: "LeFBm40tk1ztZLlPI1zHgbAyplU_l0lSRrjpUkqmtKw",
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
    /*************** end 添加谷歌统计 ***********/
  ],
  shouldPrefetch: false,

  theme,
  plugins: [
    // 注册组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    // google analytics 统计
    googleAnalyticsPlugin({
      id: "G-3115GBP5VH",
    }),
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
