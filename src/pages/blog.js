import Head from "next/head";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Optimización SEO en Next.js",
      excerpt: "Aprende las mejores prácticas para optimizar tu aplicación Next.js para motores de búsqueda.",
      date: "2024-06-15",
      slug: "optimizacion-seo-nextjs"
    },
    {
      id: 2, 
      title: "Componentes Dinámicos en React",
      excerpt: "Descubre cómo implementar lazy loading y componentes dinámicos para mejorar el rendimiento.",
      date: "2024-06-10",
      slug: "componentes-dinamicos-react"
    },
    {
      id: 3,
      title: "Sitemap Dinámico con API Routes",
      excerpt: "Implementa un sitemap.xml dinámico que se actualice automáticamente con tu contenido.",
      date: "2024-06-05", 
      slug: "sitemap-dinamico-api-routes"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web | Tutoriales y Mejores Prácticas - Mi Aplicación</title>
        <meta name="description" content="Explora nuestro blog con tutoriales de desarrollo web, optimización SEO, React, Next.js y las últimas tendencias en tecnología frontend." />
        <meta name="keywords" content="blog desarrollo web, tutoriales React, Next.js, SEO, JavaScript, frontend, programación" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Blog de Desarrollo Web | Tutoriales y Mejores Prácticas" />
        <meta property="og:description" content="Tutoriales de desarrollo web, optimización SEO, React, Next.js y tendencias frontend." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lab14-myc8.onrender.com/blog" />
        <meta property="og:image" content="https://lab14-myc8.onrender.com/images/blog-og-image.jpg" />
        <meta property="og:site_name" content="Mi Aplicación Web" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Desarrollo Web - Mi Aplicación" />
        <meta name="twitter:description" content="Tutoriales y mejores prácticas en desarrollo web moderno." />
        <meta name="twitter:image" content="https://lab14-myc8.onrender.com/images/blog-twitter-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lab14-myc8.onrender.com/blog" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Blog de Desarrollo Web",
              "description": "Tutoriales y mejores prácticas en desarrollo web",
              "url": "https://lab14-myc8.onrender.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "Mi Aplicación Web"
              }
            })
          }}
        />
      </Head>
      
      <main>
        <header>
          <h1>Blog de Desarrollo Web</h1>
          <p>Explora nuestros últimos artículos y tutoriales</p>
        </header>
        
        <section>
          <div className="blog-posts">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-post">
                <h2>{post.title}</h2>
                <p className="post-date">Publicado: {post.date}</p>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.slug}`}>Leer más →</a>
              </article>
            ))}
          </div>
        </section>
      </main>
      
      <style jsx>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .blog-posts {
          display: grid;
          gap: 2rem;
        }
        
        .blog-post {
          border: 1px solid #ddd;
          padding: 1.5rem;
          border-radius: 8px;
        }
        
        .blog-post h2 {
          margin-bottom: 0.5rem;
          color: #333;
        }
        
        .post-date {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .blog-post a {
          color: #0070f3;
          text-decoration: none;
        }
        
        .blog-post a:hover {
          text-decoration: underline;
        }
        
        @media (prefers-color-scheme: dark) {
          .blog-post {
            border-color: #333;
          }
          
          .blog-post h2 {
            color: #fff;
          }
        }
      `}</style>
    </>
  );
}