import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "主题演示",
  description: "vuepress-theme-hope 的演示",

  base: "/",

  theme,
  plugins: [
    searchPlugin({
      // 你的选项
      getExtraFields: (page): any => page.frontmatter.tags ?? [],
    }),
  ],
});
