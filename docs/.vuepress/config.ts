import { defineUserConfig } from "vuepress";
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
// 导航
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SY's Blog",
  description: "SY's Blog",

  base: "/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],

  theme,
  plugins: [
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
