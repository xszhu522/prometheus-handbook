import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "开始阅读",
    icon: "book fas",
    link: "1-introduction/overview.md",
  },
  {
    text: "相关文档",
    icon: "link fas",
    children: [
      {
        text: "https://prometheus.fuckcloudnative.io/",
        icon: "paper-plane fas",
        link: "https://prometheus.fuckcloudnative.io/",
      },
    ],
  },
]);
