import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  server: {
    host: true,
  },
  build: {
    target: 'esnext',
  },
});
