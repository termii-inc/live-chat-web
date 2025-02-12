import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import polyfillNode from "rollup-plugin-polyfill-node";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    polyfillNode(),
    tailwindcss(),
    vue(),
    vueJsx(),
    vueDevTools(),
    cssInjectedByJsPlugin(),
    Components({
      // options for auto-importing components
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
    })
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "ChatWidget",
      fileName: () => "111222", // Generates 111222.js
      formats: ["iife"], // Ensures the script runs automatically
    },
    rollupOptions: {
      output: {
       entryFileNames: "111222.js",
      assetFileNames: "111222.[ext]",
      chunkFileNames: "111222.[ext]",
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})




