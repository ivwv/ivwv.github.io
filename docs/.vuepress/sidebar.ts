import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  // "/",
  // "/home",
  // "/slide",
  "/posts/project/",
  {
    text: "PDF书籍",
    icon: "pdf",
    collapsable: true,
    prefix: "/posts/PDF/",
    children: [
      "/posts/PDF/",
      {
        text: "前端相关书籍",
        icon: "pdf",
        collapsable: true,
        prefix: "front-end/",
        children: [
          "33个非常实用的JavaScript一行代码",
          "56个JavaScript实用工具函数助你提升开发效率",
          "深入浅出ES6",
          "学习JavaScript数据结构与算法（第3版）",
          "你不知道的JavaScript（上卷）",
          "你不知道的JavaScript（中卷）",
          "你不知道的JavaScript（下卷）",
          "JavaScript设计模式与开发实践",
          "Three.js开发指南-原书第2版",
          "JavaScript设计模式-张容铭",
          "javascript面向对象编程",
          "JavaScript百炼成仙",
          "JavaScript高级程序设计（第4版）",
          "HTML5游戏开发进阶指南",
          "CSS权威指南-第三版",
          "代码整洁之道",
        ],
      },
      {
        text: "后端相关书籍",
        icon: "pdf",
        collapsable: true,
        prefix: "back-end/",
        children: ["深入浅出Node.js", "NODE.js入门手册", "Node.js实战"],
      },
      {
        text: "网络相关书籍",
        icon: "pdf",
        collapsable: true,
        prefix: "network/",
        children: ["图解HTTP(上野宣)", "图解TCPIP（第五版）"],
      },
      {
        text: "Linux运维相关书籍",
        icon: "pdf",
        collapsable: true,
        prefix: "linux/",
        children: ["阮一峰-Bash-脚本教程"],
      },
    ],
  },
  {
    text: "学习笔记",
    icon: "biji",
    prefix: "/posts/",
    collapsable: true,
    children: [
      {
        text: "Node",
        icon: "nodeJS",
        collapsable: true,
        prefix: "node/",
        children: [
          {
            text: "Express框架",
            icon: "nodeJS",
            prefix: "express/",
            collapsable: true,
            children: ["Express中jwt验证的简单使用"],
          },
          {
            text: "Other",
            icon: "others",
            prefix: "other/",
            collapsable: true,
            children: ["process.env环境变量配置"],
          },
        ],
      },
      {
        text: "JavaScript",
        icon: "javascript",
        collapsable: true,
        prefix: "javascript/",
        children: [
          {
            text: "ES6",
            icon: "es6",
            collapsable: true,
            prefix: "es6/",
            children: [
              "Javascript面对对象编程.md",
              "原型",
              "类的本质",
              "对象方法：Object.defineProperty",
              "ES6在前端的模块导入与导出",
              "array-filter",
            ],
          },
        ],
      },
      {
        text: "Vue",
        icon: "vue",
        collapsable: true,
        prefix: "vue/",
        children: [
          {
            text: "Vue2",
            icon: "vue",
            collapsable: true,
            prefix: "vue2/",
            children: ["vue2-node-part"],
          },
          {
            text: "Vue3",
            icon: "vue",
            collapsable: true,
            prefix: "vue3/",
            children: ["vue3-global-axios"],
          },
        ],
      },
    ],
  },
  {
    text: "技术文章",
    icon: "article",
    prefix: "/posts/technology/",
    collapsable: true,
    children: [
      {
        text: "Vuepress",
        icon: "creative",
        collapsable: true,
        prefix: "vuepress/",
        children: ["vuepress-register-components", "vuepress-hope-iconfont"],
      },
      {
        text: "OAuth登录",
        collapsable: true,
        icon: "lock",
        prefix: "oauth/",
        children: ["github-oauth"],
      },
      {
        text: "Node相关",
        collapsable: true,
        icon: "lock",
        prefix: "node/",
        children: ["how-to-pass-cmd-line-args-to-node"],
      },
      {
        text: "JavaScript相关",
        collapsable: true,
        icon: "javascript",
        prefix: "javascript/",
        children: ["you-dont-know-console"],
      },
    ],
  },
  {
    text: "资源分享",
    icon: "share",
    prefix: "/posts/share/",
    collapsable: true,
    children: [
      {
        text: "图床",
        icon: "pic",
        collapsable: true,
        prefix: "imgur/",
        children: ["typora-picgo-github-picur"],
      },
      {
        text: "Markdown",
        icon: "markdown",
        collapsable: true,
        prefix: "mark-down/",
        children: ["emoji"],
      },
      {
        text: "前端开发",
        icon: "launch",
        collapsable: true,
        prefix: "frontend/",
        children: ["frontend-dev-god-web-site"],
      },
    ],
  },
]);
