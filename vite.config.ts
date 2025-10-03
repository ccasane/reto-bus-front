import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "../styles/variables.scss" as *;`,
      },
    },
  },
  server: {
    proxy: {
      '/bus': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
