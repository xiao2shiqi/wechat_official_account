---
name: writing
description: Helps with drafting and refining WeChat Official Account articles. Use when generating content, checking narrative structure, or ensuring consistency with the project's tone and formatting rules.
---

# Writing Skill

This skill ensures that all articles published to the WeChat Official Account maintain a consistent high quality, logical structure, and human-centric tone.

## When to use this skill

- Use this when generating new article drafts.
- Use this when reviewing or refining existing articles.
- Use this to ensure formatting and frontmatter compliance for the `wx-uploader` tool.

## Narrative Structure (The "Evolutionary" Logic)

Articles should follow a dialectical approach of "Thesis-Antithesis-Synthesis", specifically structured as:
1.  **The Old Way (Context)**: What was the previous pattern or standard practice? (Requires checking background/history).
2.  **The Friction (Pain Points)**: What specific problems or inefficiencies exist in the current/old mode? Why is it no longer sufficient?
3.  **The Shift (Ideation)**: How did the new thinking emerge? What is the core logic or philosophy behind the change?
4.  **The Solution (The New Mode)**: What does the new mode actually solve? How does it work?
5.  **The Application (Scenarios)**: In what specific scenarios is this new mode most effective?

*Note: This structure moves beyond simple storytelling into value analysis, focusing on the "Why" and "How" of evolution.*

## Tone and Philosophy

- **Conversational**: Use a daily conversational style ("和普通人聊的的日常的方式").
- **Human-Centric**: Use a first-person ("I") perspective or an objective observer's perspective, depending on the topic, but always maintain a humane touch.
- **Depth**: Go beyond mere facts to provide ideological depth and personal reflection.

## Formatting and Language Rules

- **Spacing**: Always add a space between Chinese, English, and numbers.
- **No Tables**: Do not use tables in the main content (bad for mobile reading).
- **No Bibliographies**: Avoid listing references or using citation symbols.
- **Headings**: Use only one level of subheadings (e.g., `### 01. Topic`) to keep it simple for mobile users.
- **Numbered Lists**: Avoid excessive use of numbered or bulleted lists to maintain a more organic, less mechanical feel.

## Specialized Personas (Prompts)

When generating content, adopt the appropriate master persona from `wx-uploader.md`:

- **Science/AI/Software**: Master of CS and Engineering. Use metaphors, cite authorities (without formal citations), and keep language simple but profound.
- **Philosophy/Psychology/History**: Expert in human growth and philosophy. Focus on the "Genesis-Process-Outcome" logic and deep thinking.
- **Politics/Economy/Society**: Rational observer. Use data-driven analysis but maintain an engaging narrative style.

## Writing Product Updates (Changelogs)

When writing about a project update or a new tool discovery (Reference: `10.md`, `11.md`):
- **Pain Point First**: Start by identifying a specific "pain point" or problem.
- **The "Lightbulb" Moment**: Describe finding the solution or the "Vibe Coding" epiphany.
- **Call to Action**: End with a concrete link or instruction for the reader to try it out.
- **Visuals**: Use images (e.g., in `./assets/`) to illustrate features and use a "Cover" image that matches the theme.

## Article Metadata (Frontmatter)

Ensure every Markdown file starts with a complete frontmatter block compatible with `wx-uploader`:

```yaml
---
title: "Catchy Title"
published: draft
cover: ./assets/image.png
description: "A hook that summarizes the article and serves as the WeChat snippet."
author: "Author Name"
date: YYYY-MM-DD
---
```

## Reference Examples

- **Reference Case**: Refer to articles `01.md` through `11.md` for actual implementation examples of this style and formatting.
