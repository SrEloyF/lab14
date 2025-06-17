import dynamic from "next/dynamic";
import SEO from "../components/SEO";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mi Aplicación Web",
    "description": "Plataforma web moderna con componentes dinámicos y tecnología de vanguardia",
    "url": "https://lab14-myc8.onrender.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lab14-myc8.onrender.com/buscar?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://twitter.com/miapp",
      "https://facebook.com/miapp",
      "https://linkedin.com/company/miapp"
    ]
  };

  return (
    <>
      <SEO
        title="Inicio - Soluciones Digitales Innovadoras"
        description="Descubre nuestra plataforma web moderna con componentes dinámicos y tecnología de vanguardia. Optimizada para SEO y rendimiento superior."
        keywords="aplicación web, Next.js, React, desarrollo web, SEO, tecnología, soluciones digitales"
        ogImage="/images/home-og-image.jpg"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      
      <main>
        <section className="hero">
          <h1>Bienvenido a Nuestra Plataforma</h1>
          <p>Explora nuestras soluciones digitales innovadoras</p>
          <div className="cta-buttons">
            <a href="/blog" className="btn btn-primary">Ver Blog</a>
            <a href="/contacto" className="btn btn-secondary">Contactar</a>
          </div>
        </section>
        
        <section className="features">
          <h2>Características Principales</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🚀 Rendimiento Optimizado</h3>
              <p>Componentes con lazy loading y optimización automática</p>
            </div>
            <div className="feature">
              <h3>🔍 SEO Avanzado</h3>
              <p>Meta tags dinámicos y structured data implementados</p>
            </div>
            <div className="feature">
              <h3>📱 Responsive Design</h3>
              <p>Diseño adaptable a todos los dispositivos</p>
            </div>
          </div>
        </section>
        
        <section className="dynamic-content">
          <h2>Contenido Dinámico</h2>
          <DynamicComponent />
        </section>
      </main>
      
      <style jsx>{`
        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        .hero {
          text-align: center;
          padding: 4rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          margin-bottom: 4rem;
        }
        
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        
        .btn {
          padding: 0.75rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: transform 0.2s;
        }
        
        .btn:hover {
          transform: translateY(-2px);
        }
        
        .btn-primary {
          background: #fff;
          color: #667eea;
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .features {
          margin-bottom: 4rem;
        }
        
        .features h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }
        
        .feature h3 {
          margin-bottom: 1rem;
          color: #333;
        }
        
        .dynamic-content {
          background: #f1f3f4;
          padding: 3rem;
          border-radius: 8px;
          text-align: center;
        }
        
        .dynamic-content h2 {
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (prefers-color-scheme: dark) {
          .feature {
            background: #1a1a1a;
          }
          
          .feature h3 {
            color: #fff;
          }
          
          .dynamic-content {
            background: #2a2a2a;
          }
        }
      `}</style>
    </>
  );
}