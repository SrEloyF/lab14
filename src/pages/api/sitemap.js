const BASE_URL = "https://lab14-myc8.onrender.com";

const getBlogPosts = async () => {
  return [
    {
      slug: "optimizacion-seo-nextjs",
      lastModified: "2024-06-15",
      changeFreq: "monthly",
      priority: 0.8
    },
    {
      slug: "componentes-dinamicos-react", 
      lastModified: "2024-06-10",
      changeFreq: "monthly",
      priority: 0.8
    },
    {
      slug: "sitemap-dinamico-api-routes",
      lastModified: "2024-06-05", 
      changeFreq: "monthly",
      priority: 0.8
    }
  ];
};

const getProducts = async () => {
  return [
    {
      slug: "desarrollo-web",
      lastModified: "2024-06-01",
      changeFreq: "weekly",
      priority: 0.9
    },
    {
      slug: "consultoria-seo",
      lastModified: "2024-05-28",
      changeFreq: "weekly", 
      priority: 0.9
    }
  ];
};

export default async function handler(req, res) {
  try {
    const staticPages = [
      {
        url: "/",
        lastModified: new Date().toISOString().split('T')[0],
        changeFreq: "daily",
        priority: 1.0
      },
      {
        url: "/blog",
        lastModified: "2024-06-15",
        changeFreq: "weekly", 
        priority: 0.9
      },
      {
        url: "/contacto",
        lastModified: "2024-06-01",
        changeFreq: "monthly",
        priority: 0.7
      }
    ];

    const blogPosts = await getBlogPosts();
    const products = await getProducts();

    const blogUrls = blogPosts.map(post => ({
      url: `/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFreq: post.changeFreq,
      priority: post.priority
    }));

    const productUrls = products.map(product => ({
      url: `/servicios/${product.slug}`,
      lastModified: product.lastModified,
      changeFreq: product.changeFreq,
      priority: product.priority
    }));

    const allUrls = [...staticPages, ...blogUrls, ...productUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map((page) => `
    <url>
      <loc>${BASE_URL}${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.changeFreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
    
    res.write(sitemap);
    res.end();

  } catch (error) {
    console.error("Error generando sitemap:", error);
    res.status(500).json({ error: "Error generando sitemap" });
  }
}