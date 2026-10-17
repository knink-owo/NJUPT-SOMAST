// GitHub Pages 对未知路径返回 404，把构建好的 index.html 复制一份成 404.html，
// 深链接（比如 /activities）刷新时也能进了 SPA 再按路由渲染。
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const index = join(dist, "index.html");
const fallback = join(dist, "404.html");

if (!existsSync(index)) {
  console.error("[postbuild] dist/index.html 不存在，先跑 vite build");
  process.exit(1);
}

copyFileSync(index, fallback);
console.log("[postbuild] 已生成 dist/404.html");
