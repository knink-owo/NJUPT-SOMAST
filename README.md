# 管院科协主页 · NJUPT-SOMAST

南京邮电大学管理学院科学与技术协会（管院科协）的介绍站点，纯静态，部署在 GitHub Pages。

线上地址：<https://knink-owo.github.io/NJUPT-SOMAST/>

## 三个页面

| 页面 | 地址 | 内容 |
| --- | --- | --- |
| 首页 | `/` | 首屏、协会简介、规格表（关于科协），两个入口卡 |
| 活动 | `/activities` | 多项经典赛事、日常品牌活动、活动照片墙 |
| 部门 | `/departments` | 治理结构、组织架构图、三中心八部门明细 |

三个页面共用顶部导航、底部「加入我们」条与页脚。点导航切换时页面淡入淡出并回到顶部；「加入我们」会滚到当前页底部的加入条。

## 技术栈

- Vite 7 + React 19 + TypeScript
- React Router 7（`BrowserRouter`，`vite.config.ts` 里的 `base` 同时作为 router basename）
- Tailwind CSS v4（设计 token 在 `src/styles.css`）
- Motion（进入视口时的轻微淡入、页面切换过渡）
- 构建产物是纯静态文件，没有后端

## 本地开发

```bash
pnpm install
pnpm dev        # 本地预览，默认 http://localhost:5173/NJUPT-SOMAST/
pnpm build      # 类型检查 + 打包到 dist/ + 生成 404.html
pnpm preview    # 预览打包结果
```

需要 Node 20 以上、pnpm 9。

## 改内容看这里

**全站文案几乎都在 `src/content.ts` 一个文件里**，改文字不用碰组件：

| 想改什么 | 改哪里 |
| --- | --- |
| 首屏大标题、副标题、两个按钮、档案卡数字 | `hero` |
| 协会简介、宗旨、构成、地址 | `about` |
| 首页两个入口卡的文字 | `home.entries` |
| 活动页标题与说明 | `activitiesPage` |
| 部门页标题与治理结构 | `departmentsPage` |
| 部门名称、口号、介绍、标签 | `departments.centers[].depts[]` |
| 赛事清单与说明 | `events.items`（新增一条就多一行） |
| 现场照片的说明文字 | `gallery.items[].caption` |
| 招新 QQ 群号、公众号名 | `site.qqGroup` / `site.officialAccount` |
| 每页底部的加入条标题 | `joinStrip` |
| 页脚版权与字样 | `footer` |

### 换现场照片

1. 照片放进 `public/images/`，建议宽度 1600px 以内、JPEG 质量 80 左右（仓库别塞几 MB 原图）。
2. 在 `src/content.ts` 的 `gallery.items` 里把 `src` 改成 `images/你的文件名.jpg`。
3. `caption` 写照片说明，`tag` 是右下角的英文小标签。

```ts
{ src: "images/baojiaozi.jpg", caption: "冬至包饺子", tag: "WINTER" },
```

### 换群号 / 放二维码

群号在 `site.qqGroup`，三个页面共用。要加二维码的话，把图片放进 `public/images/`，再在 `src/content.ts` 的 `join` 里加字段、在 `src/components/Layout.tsx` 的 `JoinStrip` 里渲染即可（当前版本按需求没放二维码，只留群号和公众号名）。

### 加一个新页面

1. 在 `src/content.ts` 里加这一页的文案。
2. 在 `src/pages/` 下新建组件（参考 `Activities.tsx`）。
3. `src/App.tsx` 的 `Routes` 里加一条 `<Route>`，`titles` 里加页面标题。
4. `src/content.ts` 的 `nav` 里加导航项。

## 部署

推送到 `main` 后，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并发布，不用手动操作。

`pnpm build` 的最后一步 `scripts/postbuild.mjs` 会把 `dist/index.html` 复制成 `dist/404.html`：GitHub Pages 对 `/activities` 这类未知路径返回 404.html，但它的内容就是入口页，浏览器加载后由 React Router 按当前路径渲染对应页面，所以深链接直接打开、刷新都正常。

首次部署需要在仓库 **Settings → Pages → Build and deployment → Source** 里选择 **GitHub Actions**。

以后如果绑定自定义域名：把 `vite.config.ts` 里的 `base` 改成 `"/"`，再在 Pages 设置里填域名。

## 目录

```
src/
  content.ts        # 全站文案（改内容只动这里）
  App.tsx           # 路由、页面切换、页面标题
  components/
    Layout.tsx      # 导航、加入条、页脚、换页回顶部
    ui.tsx          # Reveal 动效、品牌方标、内页页头
  pages/
    Home.tsx        # 首页（首屏 + 关于 + 入口卡）
    Activities.tsx  # 活动（赛事表 + 品牌活动 + 照片墙）
    Departments.tsx # 部门（治理结构 + 组织架构 + 部门明细）
  styles.css        # 设计系统：颜色/字体/组件/响应式
  main.tsx          # 入口（BrowserRouter）
public/
  images/           # 现场照片
  favicon.svg
scripts/postbuild.mjs # 生成 404.html，支持深链接
design/               # 设计阶段的两个排版稿（纯 HTML，留档用，不参与构建）
.github/workflows     # GitHub Pages 自动部署
```

## 设计说明

浅色单主题、锐角、发丝线网格、单一学院蓝 `#0b4c9e`，接近「技术档案 / 工程图纸」的排法：首屏左侧大标题配右侧组织档案卡，正文用规格表、部门 ledger 行与赛事表格，信息密度偏高但层级清楚。两个排版稿 `design/a1.html`（图纸）与 `design/a2.html`（数据手册）共用 `design/base.css`，最终实现取 A2 的骨架加 A1 的首屏档案卡。
