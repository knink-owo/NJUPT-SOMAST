# 管院科协主页 · NJUPT-SOMAST

南京邮电大学管理学院科学与技术协会（管院科协）的介绍主页，纯静态站点，部署在 GitHub Pages。

线上地址：<https://knink-owo.github.io/NJUPT-SOMAST/>

## 技术栈

- Vite 7 + React 19 + TypeScript
- Tailwind CSS v4（设计 token 在 `src/styles.css`）
- Motion（进入视口的轻微淡入）
- 构建产物是纯静态文件，没有后端

## 本地开发

```bash
pnpm install
pnpm dev        # 本地预览，默认 http://localhost:5173/NJUPT-SOMAST/
pnpm build      # 类型检查 + 打包到 dist/
pnpm preview    # 预览打包结果
```

需要 Node 20 以上、pnpm 9。

## 改内容看这里

**全站文案几乎都在 `src/content.ts` 一个文件里**，改文字不用碰组件：

| 想改什么 | 改哪里 |
| --- | --- |
| 协会简介、宗旨、构成、地址 | `about` |
| 招新 QQ 群号、公众号名 | `site.qqGroup` / `site.officialAccount`（页脚和「加入我们」共用） |
| 部门名称、口号、介绍、标签 | `departments.centers[].depts[]` |
| 赛事清单与说明 | `events.items`（新增一条就多一行） |
| 现场照片的说明文字 | `gallery.items[].caption` |
| 首屏大标题、副标题、档案卡数字 | `hero` |
| 页脚版权与字样 | `footer` |

### 换现场照片

1. 把照片放进 `public/images/`，建议宽度 1600px 以内、JPEG 质量 80 左右（GitHub 仓库别塞几 MB 的原图）。
2. 在 `src/content.ts` 的 `gallery.items` 里把 `src` 改成 `images/你的文件名.jpg`。
3. `caption` 写照片说明，`tag` 是右下角的英文小标签。

比如替换占位图：

```ts
{ src: "images/baojiaozi.jpg", caption: "冬至包饺子", tag: "WINTER" },
```

### 加一个部门 / 改组织架构

- 部门正文在 `departments`；组织架构图（首屏下方那张）在 `about.org`，两处要一起改。
- 部门编号 `idx` 只是显示用的 01、02……

### 换群号 / 放二维码

群号在 `site.qqGroup`。如果之后要加二维码，把图片放进 `public/images/`，再在 `src/content.ts` 的 `join` 里加字段、在 `src/App.tsx` 的 `Join` 区块渲染即可（当前版本按需求没有放二维码，只留群号和公众号名）。

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并发布到 Pages，不用手动操作。

首次部署需要在仓库 **Settings → Pages → Build and deployment → Source** 里选择 **GitHub Actions**。

如果以后绑定了自定义域名：

- 把 `vite.config.ts` 里的 `base: "/NJUPT-SOMAST/"` 改成 `"/"`；
- 在仓库 Pages 设置里填自定义域名。

## 目录

```
src/
  content.ts      # 全站文案（改内容只动这里）
  App.tsx         # 页面结构与区块组件
  styles.css      # 设计系统：颜色/字体/组件/响应式
  main.tsx        # 入口
public/
  images/         # 现场照片
  favicon.svg
design/           # 设计阶段的两个排版稿（纯 HTML，留档用，不参与构建）
.github/workflows # GitHub Pages 自动部署
```

## 设计说明

浅色单主题、锐角、发丝线网格、单一学院蓝 `#0b4c9e`，接近「技术档案 / 工程图纸」的排法：首屏左侧大标题配右侧组织档案卡，正文用规格表、部门 ledger 行与赛事表格，信息密度偏高但层级清楚。两个排版稿 `design/a1.html`（图纸）与 `design/a2.html`（数据手册）共用 `design/base.css`，最终实现取 A2 的骨架加 A1 的首屏档案卡。
