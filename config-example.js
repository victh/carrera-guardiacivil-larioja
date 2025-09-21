// ====================================
// CARRERA SOLIDARIA - EXAMPLE CONFIGURATION
// ====================================
// This is an example configuration file showing how to customize your event.
// Copy this to config.js and modify with your actual event information.

const CONFIG = {
    // ====================================
    // BASIC EVENT INFORMATION
    // ====================================
    event: {
        title: "I Carrera Solidaria Contra el Cáncer",
        subtitle: "Corremos por la Esperanza",
        description: "Únete a nosotros en esta carrera solidaria para apoyar la investigación contra el cáncer",
        date: "Domingo, 20 de octubre de 2024",
        location: "Parque Central de Madrid",
        time: "9:00 AM",
        maxTimeLimit: "1 hora y 30 minutos"
    },

    // ====================================
    // SOLIDARITY OBJECTIVE
    // ====================================
    objective: {
        description: `Esta carrera solidaria tiene como objetivo recaudar fondos para la investigación 
        contra el cáncer y apoyo a familias afectadas. Cada paso que damos juntos nos acerca más 
        a un futuro sin cáncer. Tu participación marca la diferencia.`,
        beneficiaryOrg: "Asociación Española Contra el Cáncer",
        causeDetails: "Investigación oncológica y apoyo a familias"
    },

    // ====================================
    // RACE DISTANCES AND SCHEDULES
    // ====================================
    distances: [
        {
            distance: "500M",
            category: "Niños (2018-2020)",
            time: "9:00h",
            description: "Carrera para los más pequeños con acompañamiento"
        },
        {
            distance: "500M",
            category: "Niños (2015-2017)",
            time: "9:15h",
            description: "Carrera infantil con liebres-guía"
        },
        {
            distance: "1KM",
            category: "Niños (2012-2014)",
            time: "9:30h",
            description: "Carrera juvenil"
        },
        {
            distance: "2.5KM",
            category: "Juvenil (2009-2011)",
            time: "9:45h",
            description: "Carrera para adolescentes"
        },
        {
            distance: "5KM",
            category: "Adultos (desde 2008)",
            time: "10:00h",
            description: "Carrera principal con cronometraje oficial"
        },
        {
            distance: "5KM Caminata",
            category: "Todas las edades",
            time: "10:00h",
            description: "Caminata solidaria familiar"
        }
    ],

    // ====================================
    // REGISTRATION STATUS
    // ====================================
    registration: {
        status: "open", // "open", "closed", "sold_out"
        statusTitle: "¡Inscripciones Abiertas!",
        statusText: "Regístrate ahora y forma parte de esta causa solidaria. ¡Cada participante cuenta!",
        registrationUrl: "https://registro.carrerasolidaria.com",
        note: "Las inscripciones se cerrarán el 18 de octubre o al completar 1000 participantes"
    },

    // ====================================
    // PRICING INFORMATION
    // ====================================
    pricing: [
        {
            category: "5KM y Caminata 5KM",
            price: "15€",
            description: "Incluye camiseta técnica, dorsal con chip, seguro y bolsa del corredor",
            featured: true
        },
        {
            category: "Distancias menores",
            price: "8€",
            description: "2.5KM, 1KM, 500M - Incluye camiseta y dorsal",
            featured: false
        },
        {
            category: "Inscripción Familiar",
            price: "60€",
            description: "Hasta 6 miembros - Incluye todas las distancias disponibles",
            featured: false
        },
        {
            category: "Dorsal Solidario",
            price: "12€/25€/50€",
            description: "Para quienes no pueden participar pero quieren colaborar. Incluye camiseta.",
            featured: false
        }
    ],

    // ====================================
    // AWARDS AND PRIZES
    // ====================================
    awards: [
        {
            category: "500M y 1KM",
            prize: "Medallas",
            description: "Para los tres primeros clasificados de cada categoría (masculino y femenino)",
            icon: "fas fa-medal"
        },
        {
            category: "2.5KM y 5KM",
            prize: "Trofeos",
            description: "Para los tres primeros clasificados absolutos y por categorías",
            icon: "fas fa-trophy"
        },
        {
            category: "Reconocimientos Especiales",
            prize: "Menciones",
            description: "Participante de mayor edad, mejor disfraz, grupo más numeroso",
            icon: "fas fa-award"
        },
        {
            category: "Participación",
            prize: "Diploma Digital",
            description: "Todos los participantes recibirán un diploma de participación digital",
            icon: "fas fa-certificate"
        }
    ],

    // ====================================
    // SERVICES FOR RUNNERS
    // ====================================
    services: [
        {
            name: "Liebres-guía",
            description: "Acompañamiento para niños en distancias de 500M y 1KM",
            icon: "fas fa-running"
        },
        {
            name: "Vestuarios y Duchas",
            description: "Instalaciones completas con taquillas disponibles",
            icon: "fas fa-shower"
        },
        {
            name: "Bolsa del Corredor",
            description: "Con productos de patrocinadores y sorpresas para todos los participantes",
            icon: "fas fa-gift"
        },
        {
            name: "Seguridad y Sanidad",
            description: "Seguro de RC, ambulancia y equipo médico durante todo el evento",
            icon: "fas fa-shield-alt"
        },
        {
            name: "Animación Musical",
            description: "DJ en vivo en salida, recorrido y meta",
            icon: "fas fa-music"
        },
        {
            name: "Cronometraje Oficial",
            description: "Chip timing para 2.5K y 5K con resultados en tiempo real",
            icon: "fas fa-stopwatch"
        },
        {
            name: "Avituallamiento",
            description: "Agua y fruta en meta, y punto de hidratación en recorrido 5K",
            icon: "fas fa-utensils"
        },
        {
            name: "Camiseta Técnica",
            description: "Camiseta conmemorativa de alta calidad para todos los inscritos",
            icon: "fas fa-tshirt"
        },
        {
            name: "Fotografía Oficial",
            description: "Fotógrafo profesional durante todo el evento. Fotos gratuitas online",
            icon: "fas fa-camera"
        }
    ],

    // ====================================
    // SPONSORS INFORMATION
    // ====================================
    sponsors: [
        {
            name: "Banco Solidario",
            logo: "images/sponsor-banco.png",
            website: "https://bancosolidario.com",
            category: "principal"
        },
        {
            name: "SportTech",
            logo: "images/sponsor-sporttech.png",
            website: "https://sporttech.es",
            category: "gold"
        },
        {
            name: "Farmacia Central",
            logo: "images/sponsor-farmacia.png",
            website: "https://farmaciacentral.com",
            category: "silver"
        },
        {
            name: "Ayuntamiento de Madrid",
            logo: "images/sponsor-ayuntamiento.png",
            website: "https://madrid.es",
            category: "institutional"
        }
    ],

    // ====================================
    // CONTACT INFORMATION
    // ====================================
    contact: {
        email: "info@carreracontraelcancer.org",
        phone: "+34 912 345 678",
        address: "Calle de la Solidaridad, 123, 28001 Madrid",
        socialMedia: {
            facebook: "https://facebook.com/carreracontraelcancer",
            twitter: "https://twitter.com/carreracancer",
            instagram: "https://instagram.com/carrera_contra_cancer"
        }
    },

    // ====================================
    // IMAGES CONFIGURATION
    // ====================================
    images: {
        logo: "images/logo-carrera-cancer.png",
        heroImage: "images/hero-runners-madrid.jpg",
        objectiveImage: "images/investigacion-cancer.jpg",
        galleryImages: [
            "images/gallery-entrenamiento.jpg",
            "images/gallery-voluntarios.jpg",
            "images/gallery-familias.jpg",
            "images/gallery-meta.jpg"
        ]
    },

    // ====================================
    // ADDITIONAL SETTINGS
    // ====================================
    settings: {
        showDonationSection: true,
        showSponsorsSection: true,
        showGallery: true,
        enableContactForm: true,
        googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8...",
        primaryColor: "#e11d48", // Pink/Red for cancer awareness
        secondaryColor: "#f43f5e"
    }
};

// ====================================
// ADDITIONAL EXAMPLE CONFIGURATIONS
// ====================================

// Example for a different type of solidarity run:
/*
const CONFIG_ALTERNATIVE = {
    event: {
        title: "Carrera Solidaria por la Educación",
        subtitle: "Corremos por el Futuro",
        description: "Apoya la educación de niños en situación vulnerable",
        // ... rest of configuration
    },
    objective: {
        description: "Recaudamos fondos para becas escolares y material educativo...",
        beneficiaryOrg: "Fundación Educación para Todos"
    },
    settings: {
        primaryColor: "#3b82f6", // Blue for education
        secondaryColor: "#1d4ed8"
    }
};
*/

