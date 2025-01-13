import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site:'https://LFlem.github.io',
  base: process.env.NODE_ENV === 'development' ? '' : '/Portfolio',
  trailingSlash: 'always',
  integrations: [react(), tailwind(), sitemap()]
});