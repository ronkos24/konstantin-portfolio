import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://konstantin-portfolio-git-main-kostiantyn-ronenkos-projects.vercel.app',
  output: 'static',
  integrations: [mdx(), tailwind()]
});
