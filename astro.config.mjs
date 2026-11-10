import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Live Cloudflare Pages production domain
  site: 'https://pathan-sir-archive.pages.dev',
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
