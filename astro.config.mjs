// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nutra24.com',

  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  integrations: [mdx(),
  sitemap({
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date(),
    customPages: [
      'https://nutra24.com/',
      'https://nutra24.com/about/',
      'https://nutra24.com/privacy-policy/',
      'https://nutra24.com/terms/',
    ]
  }),

    , react()],
  adapter: vercel({
    isr: {
      // caches all pages on first request and saves for 1 day
      expiration: 60 * 60 * 24,
    },
  }),

  // Configurações de otimização de imagens
  image: {
    // Opções de serviço de imagem
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Opções para o Sharp
        jpeg: { quality: 80, progressive: true },
        jpg: { quality: 80, progressive: true },
        png: { quality: 80, progressive: true },
        webp: { quality: 80 },
        avif: { quality: 80 },
        defaults: { quality: 80, format: 'webp' }
      }
    },
    // Tamanhos padrão para imagens responsivas
    remotePatterns: [{ protocol: 'https' }],
    domains: ['nutra24.com', 'nutra-test.vercel.app'],
    // Desabilitar placeholder para melhor performance
  },
});