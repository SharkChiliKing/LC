import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "^/(api|static)/.*": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
      },
    },
    host: true,
  },
  css: {
    preprocessorOptions: {
      //对css预处理器默认配置的覆盖
    },
    devSourcemap: true,
    postcss: {},
  },
});
