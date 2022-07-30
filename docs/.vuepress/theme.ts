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

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
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
      provider: "Giscus",
      repo: "ivwv/ivwv-blog-Giscus",
      repoId: "R_kgDOHvHOZQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHvHOZc4CQgMY",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
