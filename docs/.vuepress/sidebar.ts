import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  // "/",
  // "/home",
  // "/slide",
  {
    text: "PDF书籍",
    icon: "creative",
    collapsable: true,
    prefix: "/posts/PDF/",
    children: [
      {
        text: "前端相关书籍",
        icon: "creative",
        collapsable: true,
        prefix: "front-end/",
        children: [
          "深入浅出ES6",
          "学习JavaScript数据结构与算法（第3版）",
          "你不知道的JavaScript（上卷）",
          "你不知道的JavaScript（中卷）",
          "你不知道的JavaScript（下卷）",
          "JavaScript设计模式与开发实践",
          "Three.js开发指南 原书第2版",
          "JavaScript设计模式 张容铭",
          "javascript面向对象编程",
          "JavaScript百炼成仙",
          "JavaScript高级程序设计（第4版）",
          "HTML5游戏开发进阶指南＝PRO HTML5 GAMES",
          "CSS权威指南-第三版",
          "[代码整洁之道].(美)马丁.扫描版",
        ],
      },
      {
        text: "后端相关书籍",
        icon: "creative",
        collapsable: true,
        prefix: "back-end/",
        children: ["深入浅出Node.js", "NODE.js入门手册", "Node.js实战"],
      },
      {
        text: "网络相关书籍",
        icon: "creative",
        collapsable: true,
        prefix: "network/",
        children: ["图解HTTP (上野宣)", "图解TCPIP（第五版）"],
      },
      {
        text: "Linux运维相关书籍",
        icon: "creative",
        collapsable: true,
        prefix: "linux/",
        children: ["阮一峰 Bash 脚本教程"],
      },
    ],
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
          {
            text: "Other",
            icon: "note",
            prefix: "other/",
            collapsable: true,
            children: ["process.env环境变量配置"],
          },
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
