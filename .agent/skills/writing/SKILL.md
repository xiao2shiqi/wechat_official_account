---
name: writing
description: Helps with drafting and refining WeChat Official Account articles. Use when generating content, checking narrative structure, or ensuring consistency with the project's tone and formatting rules.
---

# Writing Skill

This skill ensures that all articles published to the WeChat Official Account maintain a consistent high quality, "living person" feel, and strategic depth.

## When to use this skill

- Use this when generating new article drafts.
- Use this when reviewing or refining existing articles.
- Use this to ensure formatting and frontmatter compliance for the `wx-uploader` tool.

## 核心心法：成为一个“人”

1.  **活人感 (The Vitality)**: AI 时代最贵的奢侈品。拒绝 AI 常见的平衡语气、理性的四平八稳感。
    - **策略**：加入个人体验、情绪波动、偏见、回忆甚至笨拙的瞬间。
    - **表达**：多用“我觉得”、“我以为”。把理性的分析转化为亲身经历的故事。
2.  **真诚 (Sincerity)**: 可以不写，但绝不欺骗。
    - **策略**：大方承认不懂的地方，指出产品的真实缺点。建立长期信任而非收割短期流量。
3.  **价值观 (Values)**: 守住底线。不为了流量去写自己不信的东西。

## 战略思考：下笔前的 80% 胜负

1.  **选题模型**: 一个好的选题 = 你的专业领域 + 读者的普遍兴趣 + 当下的时间节点。
2.  **专家心态**: 你的价值是帮读者节省时间。
    - 在具体问题上的研究和思考要超过 90% 的读者。
    - 不懂的不要硬写；要写的，就要利用工具（如 DeepResearch）往死里研究。

## 技法：讲一个好故事 (HKR 原则)

所有内容应遵循 **HKR 原则** 进行检查：
- **H (Happiness/Hook)**: 趣味性或好奇心。开头能否勾住读者？
- **K (Knowledge)**: 知识硬核价值。读者能否学到新东西？
- **R (Resonance)**: 分享欲与共鸣。能否戳中读者情绪，产生“我也是这么想的”感觉？

### 1. 故事化叙事 (Narrative Structure)
将内容（甚至是测评）包装成一场“冒险”：
- **冲突**：遇到了什么麻烦？
- **探索**：如何寻找解决方案？
- **发现/高潮**：最惊艳的瞬间是什么？
- **结局**：生活因此有了什么改变？

### 2. 读者画像
将读者视为：**很聪明、很有钱（选择多）、但很忙**的人。
- **聪明**：不讲废话，不反复解释常识。
- **选择多**：内容必须对得起读者的机会成本。
- **很忙**：**结构清晰，重点加粗**。让一目十行的读者也能抓到核心。

## 格式与语言规范

- **空格控制**：中英文和数字之间必须保留一个空格。
- **禁止表格**：为了移动端阅读体验，严禁使用 HTML 或 Markdown 表格。
- **极简标题**：只使用一级子标题（如 `### 01. 标题`），保持线性阅读感。
- **加粗重点**：通过 **加粗** 核心观点辅助“很忙”的读者快速阅读。
- **去工具化**：不要列参考文献，不使用论文式的引用符号。

## 文章元数据 (Frontmatter)

确保每个 Markdown 文件都包含以下格式：

```yaml
---
title: "抓住眼球的标题"
published: draft
cover: ./assets/image.png
description: "作为摘要的 hook，吸引点击。"
author: "作者名"
date: YYYY-MM-DD
---
```

## 参考案例
- 学习 `01.md` 到 `11.md` 中的语感和排版，特别是其中关于“痛点-发现-行动”的转化逻辑。
