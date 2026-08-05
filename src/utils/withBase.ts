/**
 * Prefixne cestu nastaveným `base` z astro.config.mjs.
 * Používa sa na všetky odkazy do public/ a interné linky,
 * aby web fungoval aj v podpriečinku domény.
 */
export const withBase = (cesta: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + cesta;
