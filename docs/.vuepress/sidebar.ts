import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  // "/",
  // "/home",
  // "/slide",
  {
    text: "PDF",
    icon: "creative",
    collapsable: true,
    prefix: "/posts/PDF书籍/",
    children: ["ES6-in-depth"],
  },
  {
    text: "文章",
    icon: "note",
    prefix: "/posts/",
    collapsable: true,
    children: [
      {
        text: "Node",
        icon: "note",
        collapsable: true,
        prefix: "node/",
        children: [
          {
            text: "Express框架",
            icon: "note",
            prefix: "express/",
            collapsable: true,
            children: ["Express中jwt验证的简单使用"],
          },
          "process.env环境变量配置",
        ],
      },
      {
        text: "JavaScript",
        icon: "note",
        collapsable: true,
        prefix: "javascript/",
        children: [
          {
            text: "ES6",
            icon: "note",
            collapsable: true,
            prefix: "es6/",
            children: [
              "Javascript面对对象编程.md",
              "原型",
              "类的本质",
              "对象方法：Object.defineProperty",
              "ES6在前端的模块导入与导出",
            ],
          },
        ],
      },
    ],
  },
]);
