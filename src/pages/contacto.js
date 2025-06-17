import Head from "next/head";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado correctamente!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contacto - Ponte en Contacto con Nosotros | Mi Aplicación Web</title>
        <meta name="description" content="¿Tienes preguntas o necesitas soporte? Contáctanos a través de nuestro formulario. Respondemos en menos de 24 horas. ¡Estamos aquí para ayudarte!" />
        <meta name="keywords" content="contacto, soporte, ayuda, formulario contacto, atención cliente, consultas" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contacto - Ponte en Contacto con Nosotros" />
        <meta property="og:description" content="¿Tienes preguntas? Contáctanos y te responderemos en menos de 24 horas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lab14-myc8.onrender.com/contacto" />
        <meta property="og:image" content="https://lab14-myc8.onrender.com/images/contact-og-image.jpg" />
        <meta property="og:site_name" content="Mi Aplicación Web" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contacto - Mi Aplicación Web" />
        <meta name="twitter:description" content="Ponte en contacto con nuestro equipo de soporte." />
        <meta name="twitter:image" content="https://lab14-myc8.onrender.com/images/contact-twitter-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lab14-myc8.onrender.com/contacto" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Página de Contacto",
              "description": "Formulario de contacto para consultas y soporte",
              "url": "https://lab14-myc8.onrender.com/contacto",
              "mainEntity": {
                "@type": "Organization",
                "name": "Mi Aplicación Web",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["Spanish", "English"]
                }
              }
            })
          }}
        />
      </Head>
      
      <main>
        <div className="contact-container">
          <header>
            <h1>Contáctanos</h1>
            <p>¿Tienes alguna pregunta o necesitas ayuda? ¡Estamos aquí para ti!</p>
          </header>
          
          <div className="contact-content">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>contacto@miapp.com</p>
              </div>
              <div className="info-item">
                <h3>📱 Teléfono</h3>
                <p>+51 123 456 789</p>
              </div>
              <div className="info-item">
                <h3>🕒 Horario de Atención</h3>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Tiempo de respuesta: &lt; 24 horas</p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Envíanos un Mensaje</h2>
              
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </main>
      
      <style jsx>{`
        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        
        .contact-info h2,
        .contact-form h2 {
          margin-bottom: 1.5rem;
          color: #333;
        }
        
        .info-item {
          margin-bottom: 2rem;
        }
        
        .info-item h3 {
          margin-bottom: 0.5rem;
          color: #555;
        }
        
        .contact-form {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        
        input,
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #0070f3;
        }
        
        button {
          background: #0070f3;
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        
        button:hover {
          background: #0051cc;
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (prefers-color-scheme: dark) {
          .contact-info h2,
          .contact-form h2 {
            color: #fff;
          }
          
          .info-item h3 {
            color: #ccc;
          }
          
          .contact-form {
            background: #1a1a1a;
          }
          
          input,
          textarea {
            background: #2a2a2a;
            border-color: #444;
            color: #fff;
          }
        }
      `}</style>
    </>
  );
}