import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://dluxury-coreyburns-ca.vercel.app',
  output: 'static',
  adapter: cloudflare(),
  integrations: [react(), sitemap()],
  image: {
    domains: ['images.unsplash.com'],
  },
  prefetch: true,
});
