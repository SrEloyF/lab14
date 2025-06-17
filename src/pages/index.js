import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Mi Aplicación Web | Soluciones Digitales Innovadoras</title>
        <meta name="description" content="Descubre nuestra plataforma web moderna con componentes dinámicos y tecnología de vanguardia. Optimizada para SEO y rendimiento superior." />
        <meta name="keywords" content="aplicación web, Next.js, React, desarrollo web, SEO, tecnología" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Inicio - Mi Aplicación Web | Soluciones Digitales" />
        <meta property="og:description" content="Plataforma web moderna con componentes dinámicos y tecnología de vanguardia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lab14-myc8.onrender.com/" />
        <meta property="og:image" content="https://lab14-myc8.onrender.com/images/home-og-image.jpg" />
        <meta property="og:site_name" content="Mi Aplicación Web" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inicio - Mi Aplicación Web" />
        <meta name="twitter:description" content="Plataforma web moderna con tecnología de vanguardia." />
        <meta name="twitter:image" content="https://lab14-myc8.onrender.com/images/home-twitter-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lab14-myc8.onrender.com/" />
      </Head>
      
      <main>
        <h1>Bienvenido a Nuestra Plataforma</h1>
        <p>Explora nuestras soluciones digitales innovadoras</p>
        <DynamicComponent />
      </main>
    </>
  );
}