export async function GET({ url }) {
  const siteUrl = url.origin; // Dinâmico: detecta automaticamente o domínio atual
  const currentDate = new Date().toISOString();

  const urls = [
    {
      loc: `${siteUrl}/`,
      priority: "1.1",
      changefreq: "daily",
      lastmod: currentDate,
    },
    // 
    {
      loc: `${siteUrl}/prodentim`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
      {
      loc: `${siteUrl}/mitolyn`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

  {
      loc: `${siteUrl}/primebiome`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

    // 

        {
      loc: `${siteUrl}/hepato-burn`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
      {
      loc: `${siteUrl}/prostavive`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

  {
      loc: `${siteUrl}/lean-biome`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

// 

      {
      loc: `${siteUrl}/nitric-boost-ultra`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
      {
      loc: `${siteUrl}/quietum-plus`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

  {
      loc: `${siteUrl}/flush-factor-plus`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

    // 
    {
      loc: `${siteUrl}/java-burn`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
      {
      loc: `${siteUrl}/glauco-6`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

  {
      loc: `${siteUrl}/kerassentials`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
       // 
    {
      loc: `${siteUrl}/provadent`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
      {
      loc: `${siteUrl}/nagano-tonic`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },

  {
      loc: `${siteUrl}/liv-pure`, // ajuste conforme o slug real dos seus artigos
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    },
    // 

    {
      loc: `${siteUrl}/terms`, // página de Termos
      priority: "0.5",
      changefreq: "yearly",
      lastmod: currentDate,
    },
    {
      loc: `${siteUrl}/privacy-policy`, // página de Compromissos (ajuste se necessário)
      priority: "0.5",
      changefreq: "yearly",
      lastmod: currentDate,
    },
     {
      loc: `${siteUrl}/about`, // página de Compromissos (ajuste se necessário)
      priority: "0.5",
      changefreq: "yearly",
      lastmod: currentDate,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Disposition" :  "attachment; filename=sitemap.xml"
    },
  });

  // return new Response(xml, {
  //   headers: {
  //     "Content-Type": "text/xml",
  //     "Content-Disposition": "inline",
  //   },
  // });
}
