const services = [
  {
    id: 1,
    title: "Desarrollo Web",
    slug: "desarrollo-web",
    description: "Creamos sitios web modernos y aplicaciones web personalizadas usando las últimas tecnologías.",
    shortDescription: "Sitios web modernos y aplicaciones personalizadas",
    features: [
      "Desarrollo con React y Next.js",
      "Diseño responsive",
      "Optimización SEO",
      "Integración con APIs",
      "Panel de administración"
    ],
    price: {
      from: 1500,
      currency: "USD",
      type: "project"
    },
    category: "desarrollo",
    featured: true,
    status: "active",
    createdAt: "2024-05-01T10:00:00Z",
    updatedAt: "2024-06-01T15:30:00Z"
  },
  {
    id: 2,
    title: "Consultoría SEO",
    slug: "consultoria-seo",
    description: "Optimizamos tu sitio web para mejorar su posicionamiento en los motores de búsqueda.",
    shortDescription: "Mejora tu posicionamiento en Google",
    features: [
      "Auditoría SEO completa",
      "Optimización on-page",
      "Investigación de palabras clave",
      "Link building",
      "Reportes mensuales"
    ],
    price: {
      from: 800,
      currency: "USD",
      type: "monthly"
    },
    category: "marketing",
    featured: true,
    status: "active",
    createdAt: "2024-05-05T14:20:00Z",
    updatedAt: "2024-05-28T11:45:00Z"
  },
  {
    id: 3,
    title: "Diseño UX/UI",
    slug: "diseno-ux-ui",
    description: "Creamos interfaces de usuario atractivas y experiencias de usuario optimizadas.",
    shortDescription: "Interfaces atractivas y funcionales",
    features: [
      "Investigación de usuarios",
      "Wireframes y prototipos",
      "Diseño visual",
      "Testing de usabilidad",
      "Guías de estilo"
    ],
    price: {
      from: 1200,
      currency: "USD",
      type: "project"
    },
    category: "diseno",
    featured: false,
    status: "active",
    createdAt: "2024-04-20T09:15:00Z",
    updatedAt: "2024-06-10T16:20:00Z"
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Desarrollamos tiendas online completas con sistemas de pago integrados.",
    shortDescription: "Tiendas online completas y seguras",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Pasarelas de pago",
      "Panel de administración",
      "Reportes de ventas"
    ],
    price: {
      from: 2500,
      currency: "USD",
      type: "project"
    },
    category: "desarrollo",
    featured: true,
    status: "active",
    createdAt: "2024-04-15T12:30:00Z",
    updatedAt: "2024-06-05T10:15:00Z"
  }
];

export default function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      // Filtrar solo servicios activos
      let activeServices = services.filter(service => service.status === 'active');
      
      // Filtros opcionales
      if (query.featured === 'true') {
        activeServices = activeServices.filter(service => service.featured);
      }
      
      if (query.category) {
        activeServices = activeServices.filter(service => 
          service.category === query.category
        );
      }
      
      if (query.slug) {
        const service = activeServices.find(service => service.slug === query.slug);
        return res.status(200).json(service || null);
      }
      
      // Ordenar por featured primero, luego por fecha de actualización
      activeServices.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      
      res.status(200).json({
        services: activeServices,
        count: activeServices.length
      });
      break;
      
    case 'POST':
      // Crear nuevo servicio (simulado)
      const newService = {
        id: services.length + 1,
        ...req.body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'active'
      };
      
      services.push(newService);
      res.status(201).json(newService);
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}