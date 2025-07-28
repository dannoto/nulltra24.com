import { defineCollection, z } from 'astro:content';

// Define a coleção "products"
const products = defineCollection({
  // Schema para validar o frontmatter
  schema: z.object({
    id:  z.number(),
    mainTitle: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    background: z.string().optional(),
    author: z.string().default('Admin'),
    category: z.string().default('Saúde'),
    categoryColor: z.string().default('green'),
    tags: z.array(z.string()).optional(),
    reviews: z.object({
      count: z.number().default(0),
      rating: z.number().min(0).max(5).default(4.5)
    }).default({ count: 0, rating: 4.5 }),
    // Campos para SEO
    canonical: z.string().optional(),
    keywords: z.string().optional(),
    locale: z.string().default('en_US'),
    ogType: z.string().default('article'),
    ogImageWidth: z.number().default(1200),
    ogImageHeight: z.number().default(630),
    ogImageType: z.string().default('image/webp'),
    twitterCard: z.string().default('summary_large_image'),
    twitterSite: z.string().default('@nutra24'),
    twitterCreator: z.string().default('@nutra24'),
    // Novos campos para a coluna lateral
    manufactured: z.string().optional(),
    price: z.string().optional(),
    delivery: z.string().optional(),
    shipping: z.string().optional(),
    guarantee: z.string().optional(),
    availability: z.string().default('in stock'),
    currency: z.string().default('USD'),
    affiliateLink: z.string().optional()
  })
});

// Exporta todas as coleções
export const collections = { products };
