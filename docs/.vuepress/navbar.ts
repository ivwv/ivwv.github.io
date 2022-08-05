import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  /**
   * 导航栏
   * 分类
   * 没增加分类需要添加到这里
   */
  {
    text: "文章分类",
    icon: "note",
    children: [
      {
        text: "Node",
        icon: "note",

        link: "/category/node/",
      },
      {
        text: "JavaScript",
        icon: "note",

        link: "/category/javascript/",
      },
      {
        text: "PDF书籍",
        icon: "note",
        link: "/category/PDF/",
      },
    ],
  },

  {
    text: "个人项目展示",
    icon: "creative",
    children: [
      {
        text: "电商后台管理项目",
        icon: "creative",
        link: "https://client-vue-shop.herokuapp.com/",
      },
      {
        text: "新闻门户网站(前后端项目)",
        icon: "creative",
        link: "https://client--news.herokuapp.com/",
      },
    ],
  },
  {
    text: "备用网址",
    icon: "creative",
    // link: "https://ivwv.netlify.app/",
    children: [
      {
        text: "GitHub Pages",
        icon: "creative",
        link: "https://ivwv.github.io/",
      },
      {
        text: "Netlify Pages-速度更快",
        icon: "creative",
        link: "https://ivwv.netlify.app/",
      },
      {
        text: "CloudFlare Pages",
        icon: "creative",
        link: "https://isyv.tk/",
      },
      {
        text: "Render Pages",
        icon: "creative",
        link: "https://ivwv.onrender.com/",
      },
    ],
  },

  // {
  //   text: "文章",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
