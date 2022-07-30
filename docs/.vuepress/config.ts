import { defineUserConfig } from "vuepress";
// 搜索
import { searchPlugin } from "@vuepress/plugin-search";
// 组件
import { componentsPlugin } from "vuepress-plugin-components";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SY's Blog",
  description: "SY's Blog",

  base: "/",

  theme,
  plugins: [
    // 搜索插件注册
    searchPlugin({
      // 你的选项
      getExtraFields: (page): any => page.frontmatter.tags ?? [],
    }),
    // 组件插件注册
    // componentsPlugin({
    //   // 插件选项
    //   ["PDF"]

    // }),
  ],
});
