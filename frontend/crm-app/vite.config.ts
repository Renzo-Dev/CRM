import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Позволяет использовать @/components и т.д.
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Дополнительные настройки для SCSS
        // Например, можно добавить глобальные переменные или миксины
      },
    },
  },
  server: {
    port: 5173,
    // open: true,
    // proxy: {
    //   '/auth': 'http://localhost',
    //   '/user': 'http://localhost',
    //   '/lead': 'http://localhost',
    //   '/task': 'http://localhost',
    //   '/file': 'http://localhost',
    //   '/notify': 'http://localhost',
    // },
  },
})
