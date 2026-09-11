// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://micontau.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
