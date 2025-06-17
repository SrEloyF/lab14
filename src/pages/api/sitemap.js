const BASE_URL = "https://lab14-myc8.onrender.com";

const getBlogPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/blog/posts?limit=100`);
    const data = await response.json();
    
    return data.posts.map(post => ({
      slug: post.slug,
      lastModified: post.updatedAt.split('T')[0],
      changeFreq: "monthly",
      priority: post.featured ? 0.9 : 0.8
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [
      {
        slug: "optimizacion-seo-nextjs",
        lastModified: "2024-06-15",
        changeFreq: "monthly",
        priority: 0.8
      }
    ];
  }
};

const getServices = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/services`);
    const data = await response.json();
    
    return data.services.map(service => ({
      slug: service.slug,
      lastModified: service.updatedAt.split('T')[0],
      changeFreq: "weekly",
      priority: service.featured ? 0.9 : 0.8
    }));
  } catch (error) {
    console.error('Error fetching services:', error);
    return [
      {
        slug: "desarrollo-web",
        lastModified: "2024-06-01",
        changeFreq: "weekly",
        priority: 0.9
      }
    ];
  }
};

const getAdditionalPages = async () => {
  return [
    {
      slug: "sobre-nosotros",
      lastModified: "2024-05-15",
      changeFreq: "monthly",
      priority: 0.6
    },
    {
      slug: "portfolio",
      lastModified: "2024-06-10",
      changeFreq: "weekly",
      priority: 0.7
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

    const [blogPosts, services, additionalPages] = await Promise.all([
      getBlogPosts(),
      getServices(),
      getAdditionalPages()
    ]);

    const blogUrls = blogPosts.map(post => ({
      url: `/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFreq: post.changeFreq,
      priority: post.priority
    }));

    const serviceUrls = services.map(service => ({
      url: `/servicios/${service.slug}`,
      lastModified: service.lastModified,
      changeFreq: service.changeFreq,
      priority: service.priority
    }));

    const additionalUrls = additionalPages.map(page => ({
      url: `/${page.slug}`,
      lastModified: page.lastModified,
      changeFreq: page.changeFreq,
      priority: page.priority
    }));

    const allUrls = [...staticPages, ...blogUrls, ...serviceUrls, ...additionalUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
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

    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
    res.setHeader("X-Robots-Tag", "noindex");
    
    res.setHeader("X-Sitemap-Generated", new Date().toISOString());
    
    res.write(sitemap);
    res.end();

  } catch (error) {
    console.error("Error generando sitemap:", error);
    res.status(500).json({ 
      error: "Error generando sitemap",
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}