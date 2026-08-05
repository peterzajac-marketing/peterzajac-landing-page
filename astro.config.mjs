import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Finálna doména projektu (používa sa pre canonical, og:url a sitemap)
  site: 'https://go.peterzajac.sk',
  // Web beží v podpriečinku — všetky interné cesty prefixuje BASE_URL (helper withBase)
  base: '/financne-a-investicne-poradenstvo',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dakujeme'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
