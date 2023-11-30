import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "第一章：介绍",
      prefix: "1-introduction/",
      children: [
        {
          text: "第1节：Prometheus 简介",
          link: "overview.md",
        },
      ],
    },
    {
      text: "第二章：概念",
      prefix: "2-concepts/",
      children: [
        {
          text: "第1节：数据模型",
          link: "data_model.md",
        },
        {
          text: "第2节：指标类型",
          link: "metric_types.md",
        },
      ],
    },
    {
      text: "第三章：Prometheus",
      prefix: "3-prometheus/",
      children: [
        {
          text: "第1节：初识 Prometheus",
          children: [],
        },
        {
          text: "第2节：安装",
          collapsible: true,
          children: [
            "gettingstarted.md",
            "installation.md",
          ],
        },
        {
          text: "第3节：配置",
          children: [],
        },
        {
          text: "第4节：查询",
          collapsible: true,
          children: [
            "basics.md",
            "operators.md",
            "functions.md",
            "examples.md",
            "api.md",
          ],
        },
        {
          text: "第5节：存储",
          link: "storage.md",
        },
        {
          text: "第6节：联邦集群",
          link: "federation.md",
        },
      ],
    },
  ],
});
