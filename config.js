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
        subtitle: "Corremos a favor de ARPA Autismo",
        description: "Únete a nosotros en esta carrera solidaria para apoyar a ARPA Autismo",
        date: "Domingo, 16 de noviembre de 2025",
        location: "xx.location",
        time: "xx.time",
        maxTimeLimit: "xx.racetime" // Maximum time to complete the race
    },

    // ====================================
    // SOLIDARITY OBJECTIVE
    // ====================================
    objective: {
        description: `El evento tiene como finalidad apoyar a ARPA Autismo, una organización que ayuda a los niños con autismo y sus familias.`,
        beneficiaryOrg: "ARPA Autismo",
        // You can add more details about the cause here
        causeDetails: "ARPA Autismo es una organización que ayuda a los niños con autismo y sus familias. Ayudamos a los niños con autismo a desarrollar sus habilidades y a sus familias a entender mejor el autismo."
    },

    // ====================================
    // RACE DISTANCES AND SCHEDULES
    // ====================================
    distances: [
        {
            distance: "500M",
            category: "Niños (2016-2017)",
            time: "xx.time1",
            description: "Carrera para los más pequeños"
        },
        {
            distance: "1KM",
            category: "Niños (2013-2016)",
            time: "xx.time2",
            description: "Carrera para niños"
        },
        {
            distance: "2KM",
            category: "Juvenil (2010-2012)",
            time: "xx.time3",
            description: "Carrera juvenil"
        },
        {
            distance: "6KM",
            category: "Completa (desde 2009)",
            time: "xx.time4",
            description: "Carrera completa"
        },
        {
            distance: "6KM",
            category: "Caminata (todas las edades)",
            time: "xx.time5",
            description: "Caminata solidaria"
        }
    ],

    // ====================================
    // REGISTRATION STATUS
    // ====================================
    registration: {
        status: "open", // "open", "closed", "sold_out"
        statusTitle: "¡Inscripciones Abiertas!",
        statusText: "Regístrate ahora y forma parte de esta causa solidaria",
        registrationUrl: "#precios", // Link to registration or external URL
        note: "Las inscripciones se cerrarán el día anterior al evento o al agotarse los dorsales"
    },

    // ====================================
    // PRICING INFORMATION
    // ====================================
    pricing: [
        {
            category: "5KM y Caminata 5KM",
            price: "xx",
            description: "Incluye camiseta, dorsal con chip y bolsa del corredor",
            featured: true // This will be highlighted
        },
        {
            category: "Distancias menores",
            price: "xx",
            description: "2.5KM, 1KM, 500M - Incluye camiseta y dorsal",
            featured: false
        },
        {
            category: "Familias",
            price: "xx",
            description: "Hasta 10 miembros - Incluye camisetas y dorsales",
            featured: false
        },
        {
            category: "Dorsal Solidario",
            price: "10€/50€/100€",
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
            prize: "Medallas",
            description: "Para los tres primeros clasificados (masculino y femenino)",
            icon: "fas fa-medal"
        },
        {
            category: "2.5KM y 5KM",
            prize: "Trofeos",
            description: "Para los tres primeros clasificados (masculino y femenino)",
            icon: "fas fa-trophy"
        },
        {
            category: "Menciones Especiales",
            prize: "Reconocimientos",
            description: "Participante de mayor edad, primer clasificado local, etc.",
            icon: "fas fa-award"
        }
    ],

    // ====================================
    // SERVICES FOR RUNNERS
    // ====================================
    services: [
        {
            name: "Liebres-guía",
            description: "Para los más pequeños en distancias de 500M y 1KM",
            icon: "fas fa-running"
        },
        {
            name: "Vestuarios y Duchas",
            description: "Taquillas, vestuarios y duchas disponibles",
            icon: "fas fa-shower"
        },
        {
            name: "Bolsa del Corredor",
            description: "Para todos los participantes al cruzar la meta",
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
            description: "Con chip para 2.5K y 5K",
            icon: "fas fa-stopwatch"
        },
        {
            name: "Aperitivo Post-carrera",
            description: "Comida popular al finalizar la carrera",
            icon: "fas fa-utensils"
        },
        {
            name: "Camiseta Conmemorativa",
            description: "Para todos los participantes inscritos",
            icon: "fas fa-tshirt"
        }
    ],

    // ====================================
    // SPONSORS INFORMATION
    // ====================================
    sponsors: [
        {
            name: "Patrocinador Principal",
            logo: "images/sponsor1.png",
            website: "https://example.com",
            category: "principal"
        },
        {
            name: "Patrocinador Oro",
            logo: "images/sponsor2.png",
            website: "https://example.com",
            category: "gold"
        },
        {
            name: "Patrocinador Plata",
            logo: "images/sponsor3.png",
            website: "https://example.com",
            category: "silver"
        }
        // Add more sponsors as needed
    ],

    // ====================================
    // CONTACT INFORMATION
    // ====================================
    contact: {
        email: "info@carrerasolidaria.com",
        phone: "+34 123 456 789",
        address: "Dirección de contacto, Ciudad, CP",
        socialMedia: {
            facebook: "https://facebook.com/carrerasolidaria",
            twitter: "https://twitter.com/carrerasolidaria",
            instagram: "https://instagram.com/carrerasolidaria"
        }
    },

    // ====================================
    // IMAGES CONFIGURATION
    // ====================================
    images: {
        logo: "images/logo.png",
        heroImage: "images/hero-image.jpg",
        objectiveImage: "images/objective-image.jpg",
        // Add more image paths as needed
        galleryImages: [
            "images/gallery1.jpg",
            "images/gallery2.jpg",
            "images/gallery3.jpg"
        ]
    },

    // ====================================
    // ADDITIONAL SETTINGS
    // ====================================
    settings: {
        showDonationSection: true,
        showSponsorsSection: true,
        showGallery: false, // Set to true if you want to show a photo gallery
        enableContactForm: true,
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
   - Place sponsor logos in the "images" folder

IMPORTANT: 
- Always use quotes around text values
- Don't forget commas after each item in arrays
- Test the website after making changes
*/

