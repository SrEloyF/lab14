const blogPosts = [
  {
    id: 1,
    title: "Optimización SEO en Next.js",
    slug: "optimizacion-seo-nextjs",
    excerpt: "Aprende las mejores prácticas para optimizar tu aplicación Next.js para motores de búsqueda.",
    content: "Contenido completo del artículo sobre SEO...",
    author: "Juan Pérez",
    publishedAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z",
    tags: ["SEO", "Next.js", "React", "Optimización"],
    featured: true,
    status: "published"
  },
  {
    id: 2,
    title: "Componentes Dinámicos en React",
    slug: "componentes-dinamicos-react",
    excerpt: "Descubre cómo implementar lazy loading y componentes dinámicos para mejorar el rendimiento.",
    content: "Contenido completo sobre componentes dinámicos...",
    author: "María García",
    publishedAt: "2024-06-10T14:30:00Z",
    updatedAt: "2024-06-10T14:30:00Z",
    tags: ["React", "Performance", "Lazy Loading"],
    featured: false,
    status: "published"
  },
  {
    id: 3,
    title: "Sitemap Dinámico con API Routes",
    slug: "sitemap-dinamico-api-routes",
    excerpt: "Implementa un sitemap.xml dinámico que se actualice automáticamente con tu contenido.",
    content: "Contenido completo sobre sitemaps dinámicos...",
    author: "Carlos Rodriguez",
    publishedAt: "2024-06-05T09:15:00Z",
    updatedAt: "2024-06-05T09:15:00Z",
    tags: ["SEO", "API Routes", "Sitemap"],
    featured: false,
    status: "published"
  },
  {
    id: 4,
    title: "Tutorial Completo de Next.js 14",
    slug: "tutorial-nextjs-14",
    excerpt: "Guía completa para dominar Next.js 14 con las últimas características y mejores prácticas.",
    content: "Tutorial completo de Next.js 14...",
    author: "Ana López",
    publishedAt: "2024-05-28T16:45:00Z",
    updatedAt: "2024-05-28T16:45:00Z",
    tags: ["Next.js", "Tutorial", "JavaScript"],
    featured: true,
    status: "published"
  }
];

export default function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      let posts = blogPosts.filter(post => post.status === 'published');
      
      if (query.featured === 'true') {
        posts = posts.filter(post => post.featured);
      }
      
      if (query.tag) {
        posts = posts.filter(post => 
          post.tags.some(tag => tag.toLowerCase().includes(query.tag.toLowerCase()))
        );
      }
      
      if (query.author) {
        posts = posts.filter(post => 
          post.author.toLowerCase().includes(query.author.toLowerCase())
        );
      }
      
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      
      const paginatedPosts = posts.slice(startIndex, endIndex);
      
      paginatedPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      
      res.status(200).json({
        posts: paginatedPosts,
        pagination: {
          currentPage: page,
          totalPosts: posts.length,
          totalPages: Math.ceil(posts.length / limit),
          hasNextPage: endIndex < posts.length,
          hasPrevPage: page > 1
        }
      });
      break;
      
    case 'POST':
      const newPost = {
        id: blogPosts.length + 1,
        ...req.body,
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'published'
      };
      
      blogPosts.push(newPost);
      res.status(201).json(newPost);
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}