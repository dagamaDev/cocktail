import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/main.scss";`, 
      },
    },
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve(__dirname, 'src'),
      'assets': resolve(__dirname, 'src/assets'), // Adjust the alias for assets directory
    },
    extensions: ['.js', '.vue', '.json', '.scss'],
  },
})
