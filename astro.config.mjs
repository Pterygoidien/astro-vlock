import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), solidJs(), prefetch()],
  adapter: node({
    mode: "standalone"
  })
});