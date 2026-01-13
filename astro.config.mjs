// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://juan-betancurm.github.io',
  
  base: import.meta.env.PROD ? '/juanbetancurm' : '/',

  integrations: [
    tailwind(),
    mdx()
  ]
});