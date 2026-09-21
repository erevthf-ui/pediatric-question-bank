# 新题增量归档规范（从 Q12 开始）

**请勿覆盖、删除或重写任何已有题目文件。** 已有 Q1–Q5 保留于根目录 `bank.html`；Q6 在 `q6.js`；Q7–Q11 在 `q7-q11.js`。原来的单体 HTML 备份同样保留。该批次已在当前网站加载，无需复制或迁移题干。

## 后续每新增一道题

1. 新建独立文件 `questions/q012.js`（以后按 `q013.js`、`q014.js`……编号）。使用独立自执行函数（IIFE），加入题目前用 `QUESTIONS.some(q => q.id === 12)` 检查是否已经存在。沿用 `QUESTIONS` 中的对象结构（参考现有 `q6.js`），不可修改既有题目对象；追加之后 `QUESTIONS.sort((a,b)=>a.id-b.id)` 并调用 `refresh()`。
2. **只修改 `data/catalog.json`**：把新路径按顺序加入 `modules`，把 `nextQuestionId` 加一，并更新 `archivedQuestionRange`。不要改 `bank.html`、`q6.js`、`q7-q11.js` 或旧 `questions/qXXX.js`。
3. 根目录 `index.html` 只负责加载已有题库、旧模块和 `question-loader.js`。新题会通过 `question-loader.js` 自动加载，**无需每次更新 index.html**。
4. 校验新题是否出现、旧题是否仍完整、目录顺序及选题交互是否正常。若已有题确实需要纠错，应征求用户同意并保留修订记录。

本仓库是公开仓库。发布题目素材前需确认版权与隐私；不得上传可识别患者的信息。
