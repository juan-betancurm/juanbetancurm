// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://juan-betancurm.github.io',
  
  // 2. IMPORTANTE: Pon aquí el nombre de tu repositorio (con la barra al inicio)
  base: '/juanbetancurm',
  integrations: [
    tailwind(),
    mdx()
  ]
});