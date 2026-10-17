import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// 项目部署在 GitHub Pages 的项目页下：https://knink-owo.github.io/NJUPT-SOMAST/
// 如果以后绑定了自定义域名，把 base 改成 "/"。
export default defineConfig({
  base: "/NJUPT-SOMAST/",
  plugins: [react(), tailwindcss()],
});
