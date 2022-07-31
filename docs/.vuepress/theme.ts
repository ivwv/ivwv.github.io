import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
// 组件
import { componentsPlugin } from "vuepress-plugin-components";

export default hopeTheme({
  hostname: "https://ivwv.github.io",

  darkmode: "toggle",

  author: {
    name: "SY",
    url: "https://ivwv.github.io",
  },
  // 主题可选色
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true, //全屏
  // pure: true, //纯净模式

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "ivwv/ivwv.github.io",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "SY's Blog",

  displayFooter: true,

  pageInfo: [
    "Author",
    "Original",
    "Date",
    "Category",
    "Tag",
    "ReadingTime",
    "Word",
    "PageView",
  ],

  blog: {
    description: "一个前端开发者",
    // intro: "/intro.html",
    medias: {
      Gitee: "https://www.gitee.com/isyv/",
      GitHub: "https://www.github.com/ivwv",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    components: ["Badge", "CodePen", "PDF", "StackBlitz", "YouTube"],
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "ivwv/ivwv-blog-Giscus",
      // repoId: "R_kgDOHvHOZQ",
      // category: "Announcements",
      // categoryId: "DIC_kwDOHvHOZc4CQgMY",

      /**
       * waline
       */
      comment: true,
      provider: "Waline",
      serverURL: "https://waline-ivwv-2twtg2b2g-ivwv.vercel.app/", // your server url
      dark: "auto", // dark mode: true , false or 'auto'
      meta: ["nick", "mail", "link"],
      requiredMeta: ["nick", "mail"],
      wordLimit: 0,
      pageSize: 10,
      copyright: true,
    },

    mdEnhance: {
      enableAll: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      // 启用代码演示
      demo: true,
      // 支持导入文件
      include: true,
      // 属性支持
      attrs: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
