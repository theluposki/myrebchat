import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    https: {
      key: "server.key",
      cert: "server.cert",
    },
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "./assets/**/*",
        "./assets/*.svg",
        "./src/assets/**/*",
        "./src/assets/*.svg",
        "./src/assets/bg.svg",
        "./src/assets/*.svg",
        "./src/assets/*.css",
        "./src/assets/*.js",
        "./src/assets/*.jpg",
        "./src/assets/*.jpeg",
        "./src/assets/*.png",
        "./src/assets/*.gif",
      ],
      mode: "generateSW",
      manifest: {
        name: "MyReb",
        short_name: "MyReb",
        start_url: "/",
        display_override: ["standalone", "minimal-ui"],
        display: "standalone",
        background_color: "#1a1a1a",
        orientation: "portrait-primary",
        lang: "pt-br",
        scope: "/",
        icons: [
          {
            src: "/icons/logo-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/logo-512-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#1a1a1a",
      },
      debug: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
