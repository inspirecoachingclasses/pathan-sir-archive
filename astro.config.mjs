import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Replace with your production domain or Cloudflare Pages URL
  site: 'https://inspire-archive.pages.dev',
  output: 'static',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
