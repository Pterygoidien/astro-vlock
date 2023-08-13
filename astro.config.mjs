import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  output: 'hybrid',
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx()],
  adapter: node({
    mode: "standalone"
  })
});