import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    host: 'docslaravelreact.local',
    strictPort: true,
    port: 5190, // you can replace this port with any port
  },
  resolve: {
    alias: {
      'MaterialThemeProvider': '@mui/material/styles/ThemeProvider',
    },
  },
  optimizeDeps: {
    include: ['@mui/material/Tooltip'],
  }
});