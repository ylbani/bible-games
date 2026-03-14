import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/bible-games/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true
  }
});
