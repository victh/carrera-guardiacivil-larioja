// ====================================
// CARRERA SOLIDARIA - CONFIGURATION FILE
// ====================================
// This file contains all the information that can be easily edited
// for your solidarity run event. Simply modify the values below.

const CONFIG = {
    // ====================================
    // BASIC EVENT INFORMATION
    // ====================================
    event: {
        title: "I Carrera Solidaria Guardia Civil de La Rioja",
        subtitle: "Corremos a favor de ARPA Autismo Rioja",
        description: "Únete a nosotros en esta carrera solidaria para apoyar a ARPA Autismo Rioja",
        date: "Domingo, 16 de noviembre de 2025",
        location: "Polideportivo Municipal de Villamediana de Iregua, Calle Portillo",
        time: "11:00h",
        maxTimeLimit: "1 hora y 30 minutos" // Maximum time to complete the race
    },

    // ====================================
    // SOLIDARITY OBJECTIVE
    // ====================================
    objective: {
        description: `El evento tiene como finalidad apoyar a ARPA Autismo Rioja, asociación sin ánimo de lucro que trabaja incansablemente en la defensa de los derechos de las personas con Trastorno del Espectro Autista (TEA) y sus familias, gestionando servicios especializados y promoviendo su inclusión social y educativa.`,
        beneficiaryOrg: "ARPA Autismo Rioja",
        // You can add more details about the cause here
        causeDetails: "ARPA Autismo Rioja es una organización que ayuda a los niños con autismo y sus familias. Ayudamos a los niños con autismo a desarrollar sus habilidades y a sus familias a entender mejor el autismo."
    },

    // ====================================
    // RACE DISTANCES AND SCHEDULES
    // ====================================
    distances: [
        {
            distance: "500M",
            category: "Niños (2017-2021)",
            time: "11:00",
            description: "Carrera no clasificatoria para los más pequeños. Obsequio para todos los participantes"
        },
        {
            distance: "1KM",
            category: "Niños (2013-2016)",
            time: "11:10",
            description: "Carrera no clasificatoria para niños. Obsequio para todos los participantes"
        },
        {
            distance: "2KM",
            category: "Juvenil (2010-2012)",
            time: "11:20",
            description: "Dorsal con chip y trofeo para los 3 primeros clasificados (categorías masculina y femenina)"
        },
        {
            distance: "6KM",
            category: "Carrera popular (hasta 2009)",
            time: "12:00",
            description: "Dorsal con chip y trofeo para los 3 primeros clasificados (categorías masculina y femenina)"
        },
        {
            distance: "6KM",
            category: "Caminata (todas las edades)",
            time: "12:10",
            description: "Caminata solidaria. Tiempo máximo para finalizar la caminata 1:30h"
        }
    ],

    // ====================================
    // REGISTRATION STATUS
    // ====================================
    registration: {
        status: "open", // "open", "closed", "sold_out"
        statusTitle: "¡Inscripciones Abiertas!",
        statusText: "Inscríbete ahora y forma parte de esta causa solidaria. Abierto hasta el 8 de noviembre de 2025 o hasta agotar dorsales.",
        registrationUrl: "#precios", // Link to registration or external URL
        note: "Las inscripciones se cerrarán el día anterior al evento o al agotarse los dorsales"
    },

    // ====================================
    // PRICING INFORMATION
    // ====================================
    pricing: [
        {
            category: "6KM y Caminata 6KM",
            price: "13€",
            description: "Incluye camiseta, dorsal con chip y bolsa del corredor",
            featured: true // This will be highlighted
        },
        {
            category: "Distancias menores",
            price: "10€",
            description: "2KM, 1KM, 500M - Incluye camiseta, dorsal (con chip en la carrera Juvenil 2KM) y bolsa del corredor",
            featured: false
        },
        {
            category: "Dorsal Solidario",
            price: "13€/50€/100€",
            description: "Para quienes no pueden participar pero quieren colaborar",
            featured: false
        }
    ],

    // ====================================
    // AWARDS AND PRIZES
    // ====================================
    awards: [
        {
            category: "500M y 1KM",
            prize: "Obsequio",
            description: "Para todos los participantes, carrera no clasificatoria",
            icon: "fas fa-gift"
        },
        {
            category: "2KM y 6KM",
            prize: "Trofeos",
            description: "Para los tres primeros clasificados (masculino y femenino)",
            icon: "fas fa-trophy"
        },
        {
            category: "Menciones Especiales",
            prize: "Reconocimiento",
            description: "Primer ganador masculino y femenino de las FFCCSE",
            icon: "fas fa-award"
        }
    ],

    // ====================================
    // SERVICES FOR RUNNERS
    // ====================================
    services: [
        {
            name: "Liebres-guía",
            description: "Para las carreras de 2KM y 6KM.",
            icon: "fas fa-running"
        },
        {
            name: "Vestuarios y Duchas",
            description: "Vestuarios y duchas disponibles.",
            icon: "fas fa-shower"
        },
        {
            name: "Bolsa del Corredor",
            description: "Para todos los participantes al recoger el dorsal",
            icon: "fas fa-gift"
        },
        {
            name: "Seguridad y Sanidad",
            description: "Seguro de responsabilidad civil y dispositivo médico",
            icon: "fas fa-shield-alt"
        },
        {
            name: "Música",
            description: "Animación musical en salida y meta",
            icon: "fas fa-music"
        },
        {
            name: "Medición de Tiempos",
            description: "Con chip para 2K y 6K",
            icon: "fas fa-stopwatch"
        },
        {
            name: "Aperitivo Post-carrera",
            description: "Degustación solidaria al finalizar la carrera",
            icon: "fas fa-utensils"
        },
        {
            name: "Camiseta Conmemorativa",
            description: "Para todos los participantes inscritos",
            icon: "fas fa-tshirt"
        },
        {
            name: "Exposición de medios",
            description: "Exposición de medios",
            icon: "fas fa-camera"
        },
        {
            name: "Animación infantil",
            description: "Hinchables, talleres...",
            icon: "fas fa-child"
        }
    ],

    // ====================================
    // SPONSORS INFORMATION
    // ====================================
    sponsors: [
        // PATROCINADOR PRINCIPAL
        {
            name: "Guardia Civil La Rioja",
            logo: "images/sponsors/Coat_of_Arms_of_the_10th_Zone_of_the_Guardia_Civil_-_La_Rioja.svg.png",
            website: "https://www.guardiacivil.es",
            category: "principal"
        },
        // AYUNTAMIENTO (SEGUNDO)
        {
            name: "Ayuntamiento de Villamediana",
            logo: "images/sponsors/Ayuntamiento.jpg",
            website: "https://www.villamedianadeiregua.org/",
            category: "institucional"
        },
        // ORGANIZACIÓN BENEFICIARIA
        {
            name: "ARPA Autismo Rioja",
            logo: "images/sponsors/arpa-todos.png",
            website: "https://autismorioja.com/",
            category: "beneficiario"
        },
        // BANCOS Y FINANCIERAS
        {
            name: "CaixaBank",
            logo: "images/sponsors/CAIXABANK.png",
            website: "https://www.caixabank.es",
            category: "financiero"
        },
        // SUPERMERCADOS Y COMERCIO
        {
            name: "Alcampo",
            logo: "images/sponsors/Alcampo.png",
            website: "https://www.alcampo.es",
            category: "comercio"
        },
        {
            name: "Carrefour Express",
            logo: "images/sponsors/carrefour-express-1200x1424.jpg",
            website: "https://www.carrefour.es",
            category: "comercio"
        },
        // BODEGAS Y ALIMENTACIÓN
        {
            name: "Bodegas Marqués de Cáceres",
            logo: "images/sponsors/MArques de Caceres.png",
            website: "https://www.marquesdecaceres.com",
            category: "alimentacion"
        },
        {
            name: "Bodegas Lecea",
            logo: "images/sponsors/Bodegas lecea.jpg",
            website: "",
            category: "alimentacion"
        },
        {
            name: "Vivanco",
            logo: "images/sponsors/Vivanco.png",
            website: "https://www.vivancoculturadevino.es",
            category: "alimentacion"
        },
        {
            name: "Mazapanes Soto",
            logo: "images/sponsors/MAzapanes soto.png",
            website: "",
            category: "alimentacion"
        },
        {
            name: "Peras Rincón",
            logo: "images/sponsors/Peras rincon.jpg",
            website: "",
            category: "alimentacion"
        },
        {
            name: "Coca Cola",
            logo: "images/sponsors/logo-coca-cola-onda-dinamica.jpg",
            website: "https://www.cocacola.es",
            category: "alimentacion"
        },
        // AUTOMOCIÓN
        {
            name: "VW Rioja Motor",
            logo: "images/sponsors/LOGO VW RIOJA MOTOR.jpg",
            website: "",
            category: "automocion"
        },
        {
            name: "Gasolinera Jubera",
            logo: "images/sponsors/Gasolinera jubera.jpg",
            website: "",
            category: "automocion"
        },
        // TECNOLOGÍA Y SERVICIOS
        {
            name: "Genergy",
            logo: "images/sponsors/genergy.jpg",
            website: "https://www.genergy.com",
            category: "tecnologia"
        },
        {
            name: "Centro Tecnológico Champiñón",
            logo: "images/sponsors/Centro tecnologico champi.jpeg",
            website: "",
            category: "tecnologia"
        },
        {
            name: "Signaai",
            logo: "images/sponsors/signaai.jpg",
            website: "https://signaai.com",
            category: "tecnologia"
        },
        {
            name: "RECIRSA",
            logo: "images/sponsors/RECIRSA.jpg",
            website: "",
            category: "servicios"
        },
        // SALUD Y BIENESTAR
        {
            name: "Doctor Toledo",
            logo: "images/sponsors/Doctor Toledo.png",
            website: "",
            category: "salud"
        },
        {
            name: "Rioja Cuida",
            logo: "images/sponsors/Rioja Cuida.png",
            website: "",
            category: "salud"
        },
        {
            name: "Sirona",
            logo: "images/sponsors/Sirona.png",
            website: "",
            category: "salud"
        },
        // EDUCACIÓN
        {
            name: "UNIR - Universidad Internacional de La Rioja",
            logo: "images/sponsors/LARIOJA_H_color_300.png",
            website: "https://www.unir.net",
            category: "educacion"
        },
        // DEPORTES Y OCIO
        {
            name: "Club Coloma",
            logo: "images/sponsors/Club Coloma.jpeg",
            website: "",
            category: "deportivo"
        },
        {
            name: "Biciván",
            logo: "images/sponsors/LOGO BICIVÁN TRAZADO.jpg",
            website: "",
            category: "deportivo"
        },
        {
            name: "Calle Activa",
            logo: "images/sponsors/calle-activa.png",
            website: "",
            category: "deportivo"
        },
        {
            name: "Zenit",
            logo: "images/sponsors/Zenit.jpg",
            website: "",
            category: "deportivo"
        },
        // SERVICIOS PROFESIONALES
        {
            name: "Ana Patón",
            logo: "images/sponsors/Ana Paton.jpg",
            website: "",
            category: "servicios"
        },
        {
            name: "David Moreno",
            logo: "images/sponsors/DAVID MORENO.png",
            website: "",
            category: "servicios"
        },
        {
            name: "Martínez Alesanco",
            logo: "images/sponsors/MARTINEZ ALESANCO.jpg",
            website: "",
            category: "servicios"
        },
        {
            name: "Martínez Solmalo",
            logo: "images/sponsors/Martinez Solmalo.jpg",
            website: "",
            category: "servicios"
        },
        {
            name: "Gurpegui",
            logo: "images/sponsors/Gurpegui.png",
            website: "",
            category: "servicios"
        },
        {
            name: "Habecu",
            logo: "images/sponsors/habecu.png",
            website: "",
            category: "servicios"
        },
        // OTROS SERVICIOS
        {
            name: "AEGC",
            logo: "images/sponsors/AEGC.png",
            website: "",
            category: "asociacion"
        },
        {
            name: "BAQUE",
            logo: "images/sponsors/BAQUE.jpg",
            website: "",
            category: "servicios"
        },
        {
            name: "El Ángel",
            logo: "images/sponsors/El Angel.png",
            website: "",
            category: "servicios"
        },
        {
            name: "Fotoadictos",
            logo: "images/sponsors/foto adictos.png",
            website: "",
            category: "servicios"
        },
        {
            name: "KrAFT",
            logo: "images/sponsors/krAFT.jpg",
            website: "",
            category: "servicios"
        },
        {
            name: "LogoEPC",
            logo: "images/sponsors/LogoEPC-02.png",
            website: "",
            category: "servicios"
        },
        {
            name: "A Marcos",
            logo: "images/sponsors/LOGO-A-MARCOS-VECTOR-SIN-FONDO.png",
            website: "",
            category: "servicios"
        },
        {
            name: "Peñaclara",
            logo: "images/sponsors/peñaclara.jpg",
            website: "",
            category: "servicios"
        },
        {
            name: "Taxidermia Arte Decorativo",
            logo: "images/sponsors/Taxidermia arte decorativo.jpg",
            website: "",
            category: "servicios"
        },
        {
            name: "Signaai",
            logo: "images/sponsors/signaai.jpg",
            website: "",
            category: "tecnologia"
        }
    ],

    // ====================================
    // CONTACT INFORMATION
    // ====================================
    contact: {
        email: "lo-zon-carrerapopular@guardiacivil.org",
        phone: "+34 941 22 99 00",
        address: "C. Duques de Nájera, 147, 26005 Logroño",
        socialMedia: {
            instagram: "https://www.instagram.com/gc_carrera_popular_la_rioja"
        }
    },

    // ====================================
    // IMAGES CONFIGURATION
    // ====================================
    images: {
        logo: "images/logo.png",
        heroImage: "images/hero-image.jpg",
        objectiveImage: "images/objective-image.jpg",
        shirtImage: "images/camiseta.png", // Official race t-shirt image
        // Add more image paths as needed
        galleryImages: [
            "images/gallery1.png",
            "images/gallery2.png",
            "images/gallery3.png",
            "images/gallery4.png",
            "images/gallery5.png"
        ]
    },

    // ====================================
    // OFFICIAL T-SHIRT SECTION
    // ====================================
    shirt: {
        title: "Camiseta Oficial",
        subtitle: "Diseño Conmemorativo de la Carrera",
        description: "Camiseta técnica oficial de la I Carrera Solidaria Guardia Civil de La Rioja. Incluida en todas las inscripciones.",
        features: [
            "Material técnico transpirable",
            "Diseño conmemorativo exclusivo",
            "Tallas desde XS hasta XXL",
            "Incluida en el precio de inscripción"
        ]
    },

    // ====================================
    // ADDITIONAL SETTINGS
    // ====================================
    settings: {
        showDonationSection: true,
        showSponsorsSection: true,
        showGallery: false, // Gallery enabled with gallery*.png images
        showShirtSection: true, // Show official t-shirt section
        enableContactForm: false, // Contact form has been removed
        googleMapsEmbedUrl: "", // Add Google Maps embed URL if needed
        // Colors (you can customize the main colors)
        primaryColor: "#2563eb",
        secondaryColor: "#667eea"
    }
};

// ====================================
// INSTRUCTIONS FOR EDITING
// ====================================
/*
HOW TO EDIT THIS FILE:

1. BASIC EVENT INFO:
   - Change event.title, event.subtitle, event.date, etc.
   - Update event.location with your venue
   - Set event.time for the start time

2. DISTANCES:
   - Add/remove distances from the distances array
   - Each distance needs: distance, category, time, description

3. PRICING:
   - Modify the pricing array with your prices
   - Set featured: true for the price you want to highlight

4. CONTACT:
   - Update all contact information
   - Add your social media links

5. IMAGES:
   - Place your images in the "images" folder
   - Update the image paths in the images section
   - Recommended image sizes:
     * Logo: 200x80px (PNG with transparent background)
     * Hero image: 1200x600px
     * Objective image: 600x400px

6. COLORS:
   - Change primaryColor and secondaryColor in settings
   - Use hex color codes (e.g., "#ff0000" for red)

7. SPONSORS:
   - Add sponsor information to the sponsors array
   - Place sponsor logos in the "images/sponsors/" folder
   - Sponsor images should be named descriptively (e.g., guardia-civil.png)
   - The first sponsor (Guardia Civil) appears first, followed by Ayuntamiento de Villamediana
   - Categories help organize sponsors: principal, institucional, deportivo, tecnologia, local, etc.

IMPORTANT: 
- Always use quotes around text values
- Don't forget commas after each item in arrays
- Test the website after making changes
*/

