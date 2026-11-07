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
        title: "II Carrera Solidaria Guardia Civil La Rioja",
        subtitle: "Deporte y solidaridad en Haro",
        description: "Corre o camina el 15 de noviembre y colabora con la Asociación Riojana de Esclerosis Múltiple (ARDEM).",
        date: "Domingo, 15 de noviembre de 2026",
        location: "Aparcamiento del Polideportivo Mazo, Haro (La Rioja)",
        time: "9:00–18:00 (actividades desde las 10:00)"
    },

    // ====================================
    // SOLIDARITY OBJECTIVE
    // ====================================
    objective: {
        description: "La recaudación de esta edición se destina a apoyar a la Asociación Riojana de Esclerosis Múltiple (ARDEM).",
        beneficiaryOrg: "Asociación Riojana de Esclerosis Múltiple (ARDEM)"
    },

    // ====================================
    // RACE DISTANCES AND SCHEDULES
    // ====================================
    distances: [
        {
            distance: "500 m",
            category: "Carrera",
            time: "11:00",
            description: "Salida de la carrera de 500 m."
        },
        {
            distance: "1 km",
            category: "Carrera",
            time: "11:15",
            description: "Salida de la carrera de 1 km."
        },
        {
            distance: "6 km",
            category: "Carrera",
            time: "12:00",
            description: "Salida de la carrera de 6 km."
        },
        {
            distance: "6 km",
            category: "Caminata",
            time: "12:01",
            description: "Salida de la caminata solidaria."
        }
    ],

    // ====================================
    // REGISTRATION STATUS
    // ====================================
    registration: {
        status: "open", // "open", "closed", "sold_out"
        statusTitle: "¡Inscripciones abiertas!",
        statusText: "Inscríbete ahora y forma parte de esta causa solidaria. Inscripciones abiertas hasta el 8 de noviembre de 2026 a las 23:59.",
        registrationUrl: "https://www.rockthesport.com/es/evento/ii-carrera-guardia-civil-la-rioja/inscripcion/selecciona-tarifa"
    },

    // ====================================
    // PRICING INFORMATION
    // ====================================
    pricing: [
        {
            category: "Carrera 6 km",
            price: "10 €",
            description: "Inscripción para la carrera de 6 km.",
            featured: false
        },
        {
            category: "Carrera 1 km",
            price: "8 €",
            description: "Inscripción para la carrera de 1 km.",
            featured: false
        },
        {
            category: "Carrera 500 m",
            price: "8 €",
            description: "Inscripción para la carrera de 500 m.",
            featured: false
        },
        {
            category: "Caminata",
            price: "10 €",
            description: "Inscripción para la caminata solidaria de 6 km.",
            featured: false
        },
        {
            category: "Camiseta solidaria",
            price: "10 €",
            description: "La plataforma ofrece la camiseta solidaria como opción de inscripción.",
            featured: false
        },
        {
            category: "Dorsal solidario",
            price: "Importe libre o 5, 10, 20 o 50 €",
            description: "Elige una aportación libre o una de las cantidades solidarias disponibles.",
            featured: false
        }
    ],

    // ====================================
    // AWARDS AND PRIZES
    // ====================================
    awards: [
        {
            category: "10:00",
            prize: "Inicio del evento",
            description: "Hinchables y exposición de medios.",
            icon: "fas fa-flag-checkered"
        },
        {
            category: "12:30",
            prize: "Degustación solidaria",
            description: "Comienzo de la degustación solidaria.",
            icon: "fas fa-utensils"
        },
        {
            category: "13:00",
            prize: "Sorteo",
            description: "Publicación de los ganadores del sorteo.",
            icon: "fas fa-ticket-alt"
        },
        {
            category: "13:15",
            prize: "Entrega de premios",
            description: "Entrega de premios de las pruebas.",
            icon: "fas fa-award"
        }
    ],

    // ====================================
    // SERVICES FOR RUNNERS
    // ====================================
    services: [
        {
            name: "Hinchables y talleres",
            description: "Actividades infantiles anunciadas para el evento.",
            icon: "fas fa-gift"
        },
        {
            name: "Exposición de medios",
            description: "Exposición de medios de la Guardia Civil.",
            icon: "fas fa-shield-alt"
        },
        {
            name: "Ambiente musical",
            description: "Animación musical durante la jornada.",
            icon: "fas fa-music"
        },
        {
            name: "Degustaciones",
            description: "Degustación solidaria prevista a las 12:30.",
            icon: "fas fa-utensils"
        }
    ],

    // ====================================
    // 2025 SPONSORS - RETAINED AS A HISTORICAL ARCHIVE
    // ====================================
    sponsors2025: [
        // PATROCINADOR PRINCIPAL
        {
            name: "Guardia Civil La Rioja",
            logo: "images/sponsors/2025/Coat_of_Arms_of_the_10th_Zone_of_the_Guardia_Civil_-_La_Rioja.svg.png",
            website: "https://www.guardiacivil.es",
            category: "principal"
        },
        // AYUNTAMIENTO (SEGUNDO)
        {
            name: "Ayuntamiento de Villamediana",
            logo: "images/sponsors/2025/Ayuntamiento.jpg",
            website: "https://www.villamedianadeiregua.org/",
            category: "institucional"
        },
        // ORGANIZACIÓN BENEFICIARIA
        {
            name: "ARPA Autismo Rioja",
            logo: "images/sponsors/2025/arpa-todos.png",
            website: "https://autismorioja.com/",
            category: "beneficiario"
        },
        // BANCOS Y FINANCIERAS
        {
            name: "CaixaBank",
            logo: "images/sponsors/2025/CAIXABANK.png",
            website: "https://www.caixabank.es",
            category: "financiero"
        },
        // SUPERMERCADOS Y COMERCIO
        {
            name: "Alcampo",
            logo: "images/sponsors/2025/Alcampo.png",
            website: "https://www.alcampo.es",
            category: "comercio"
        },
        {
            name: "Carrefour Express",
            logo: "images/sponsors/2025/carrefour-express-1200x1424.jpg",
            website: "https://www.carrefour.es",
            category: "comercio"
        },
        // BODEGAS Y ALIMENTACIÓN
        {
            name: "Bodegas Marqués de Cáceres",
            logo: "images/sponsors/2025/MArques de Caceres.png",
            website: "https://www.marquesdecaceres.com/",
            category: "alimentacion"
        },
        {
            name: "Bodegas Lecea",
            logo: "images/sponsors/2025/Bodegas lecea.jpg",
            website: "https://www.bodegaslecea.com/",
            category: "alimentacion"
        },
        {
            name: "Vivanco",
            logo: "images/sponsors/2025/Vivanco.png",
            website: "https://vivancoculturadevino.es/es/",
            category: "alimentacion"
        },
        {
            name: "Mazapanes Soto",
            logo: "images/sponsors/2025/MAzapanes soto.png",
            website: "https://www.mazapanesdesotosegura.es/",
            category: "alimentacion"
        },
        {
            name: "Peras Rincón",
            logo: "images/sponsors/2025/Peras rincon.jpg",
            website: "https://www.perasderincondesoto.com/",
            category: "alimentacion"
        },
        {
            name: "Coca Cola",
            logo: "images/sponsors/2025/logo-coca-cola-onda-dinamica.jpg",
            website: "https://www.cocacola.es",
            category: "alimentacion"
        },
        // AUTOMOCIÓN
        {
            name: "VW Rioja Motor",
            logo: "images/sponsors/2025/LOGO VW RIOJA MOTOR.jpg",
            website: "https://riojamotor.com/",
            category: "automocion"
        },
        {
            name: "Gasolinera Jubera",
            logo: "images/sponsors/2025/Gasolinera jubera.jpg",
            website: "https://gasoleosjubera.es/",
            category: "automocion"
        },
        // TECNOLOGÍA Y SERVICIOS
        {
            name: "Genergy",
            logo: "images/sponsors/2025/genergy.jpg",
            website: "https://genergy.es/?gad_source=1&gad_campaignid=7850189750&gbraid=0AAAAAD4MjHDCdNs0SsTvqlCVUvMp73w_j&gclid=Cj0KCQjw8KrFBhDUARIsAMvIApaasOCupFTYO9Inp75zs2duxD2eJjXaeN9O0edUAFR1WKeYpLuJLXYaArOMEALw_wcB",
            category: "tecnologia"
        },
        {
            name: "Centro Tecnológico Champiñón",
            logo: "images/sponsors/2025/Centro tecnologico champi.jpeg",
            website: "https://ctich.com/",
            category: "tecnologia"
        },
        {
            name: "Signaai",
            logo: "images/sponsors/2025/signaai.jpg",
            website: "https://signaai.com",
            category: "tecnologia"
        },
        {
            name: "RECIRSA",
            logo: "images/sponsors/2025/RECIRSA.jpg",
            website: "https://www.recirsa.com/",
            category: "servicios"
        },
        // SALUD Y BIENESTAR
        {
            name: "Doctor Toledo",
            logo: "images/sponsors/2025/Doctor Toledo.png",
            website: "https://doctortoledo.es/",
            category: "salud"
        },
        {
            name: "Rioja Cuida",
            logo: "images/sponsors/2025/Rioja Cuida.png",
            website: "https://bi.larioja.org/pentaho/lariojacuida/",
            category: "salud"
        },
        {
            name: "Sirona",
            logo: "images/sponsors/2025/Sirona.png",
            website: "https://www.instagram.com/sironafisio/",
            category: "salud"
        },
        // EDUCACIÓN
        {
            name: "UNIR - Universidad Internacional de La Rioja",
            logo: "images/sponsors/2025/LARIOJA_H_color_300.png",
            website: "https://www.unir.net",
            category: "educacion"
        },
        // DEPORTES Y OCIO
        {
            name: "Club Coloma",
            logo: "images/sponsors/2025/Club Coloma.jpeg",
            website: "https://colomabikeclub.com/",
            category: "deportivo"
        },
        {
            name: "Biciván",
            logo: "images/sponsors/2025/LOGO BICIVÁN TRAZADO.jpg",
            website: "https://bicivan.com/",
            category: "deportivo"
        },
        {
            name: "Calle Activa",
            logo: "images/sponsors/2025/calle-activa.png",
            website: "https://www.calleactiva.es/",
            category: "deportivo"
        },
        {
            name: "Zenit",
            logo: "images/sponsors/2025/Zenit.jpg",
            website: "https://logrono.zenithoteles.com/es/",
            category: "deportivo"
        },
        // SERVICIOS PROFESIONALES
        {
            name: "Ana Patón",
            logo: "images/sponsors/2025/Ana Paton.jpg",
            website: "https://anapatonpilates.es/",
            category: "servicios"
        },
        {
            name: "David Moreno",
            logo: "images/sponsors/2025/DAVID MORENO.png",
            website: "https://davidmoreno.es/?srsltid=AfmBOoo6VlNc3GIz5h6xuXzrG-NWybhRQ4YJyYp7FtF2KPtx712yXfbq",
            category: "servicios"
        },
        {
            name: "Martínez Alesanco",
            logo: "images/sponsors/2025/MARTINEZ ALESANCO.jpg",
            website: "https://bodegasmartinezalesanco.com/",
            category: "servicios"
        },
        {
            name: "Martínez Solmalo",
            logo: "images/sponsors/2025/Martinez Solmalo.jpg",
            website: "https://martinezsomalo.com/es/",
            category: "servicios"
        },
        {
            name: "Gurpegui",
            logo: "images/sponsors/2025/Gurpegui.png",
            website: "https://centrodentalgurpegui.com/",
            category: "servicios"
        },
        {
            name: "Habecu",
            logo: "images/sponsors/2025/habecu.png",
            website: "https://www.facebook.com/people/Habecu-La-Rioja/100089401037722/#",
            category: "servicios"
        },
        // OTROS SERVICIOS
        {
            name: "AEGC",
            logo: "images/sponsors/2025/AEGC.png",
            website: "http://www.aegc.es/",
            category: "asociacion"
        },
        {
            name: "BAQUE",
            logo: "images/sponsors/2025/BAQUE.jpg",
            website: "https://www.baque.com/es/",
            category: "servicios"
        },
        {
            name: "El Ángel",
            logo: "images/sponsors/2025/El Angel.png",
            website: "https://www.facebook.com/pasteleriayreposteriaangel/?locale=es_ES",
            category: "servicios"
        },
        {
            name: "Fotoadictos",
            logo: "images/sponsors/2025/foto adictos.png",
            website: "https://www.fotoadictoslarioja.com/",
            category: "servicios"
        },
        {
            name: "KrAFT",
            logo: "images/sponsors/2025/krAFT.jpg",
            website: "https://www.kraftheinz.com/es-ES",
            category: "servicios"
        },
        {
            name: "LogoEPC",
            logo: "images/sponsors/2025/LogoEPC-02.png",
            website: "https://www.epc-espana.com/",
            category: "servicios"
        },
        {
            name: "A Marcos",
            logo: "images/sponsors/2025/LOGO-A-MARCOS-VECTOR-SIN-FONDO.png",
            website: "https://www.armeriamarcos.es/es/",
            category: "servicios"
        },
        {
            name: "Peñaclara",
            logo: "images/sponsors/2025/peñaclara.jpg",
            website: "https://penaclara.es/",
            category: "servicios"
        },
        {
            name: "Taxidermia Arte Decorativo",
            logo: "images/sponsors/2025/Taxidermia arte decorativo.jpg",
            website: "https://taxidermiaad.com/",
            category: "servicios"
        },
        {
            name: "Signaai",
            logo: "images/sponsors/2025/signaai.jpg",
            website: "https://signaa.es/",
            category: "tecnologia"
        }
    ],

    // 2026 SPONSOR LOGOS - names are not published in the event listing
    sponsors: [
        "sponsor-2026-01-deb6936c-3a14-43e1-89d8-81edd86b94c9.png",
        "sponsor-2026-02-762194f6-a2dd-443a-bfc1-c7a73dcbf831.jpg",
        "sponsor-2026-03-f43cb3db-83df-467a-ae97-db9acdc3f456.png",
        "sponsor-2026-04-1d31107a-2fe7-4e84-be8a-e56e374710fd.jpg",
        "sponsor-2026-05-91812f9f-78e5-4bb9-962e-0caa1b21eb23.jpg",
        "sponsor-2026-06-8b064551-0358-406f-818d-54f54f063b2f.jpg",
        "sponsor-2026-07-1ba99a65-89ab-4271-b01d-7e7bf2b1d8a8.png",
        "sponsor-2026-08-666c1364-7d70-4b00-ab4a-994cdd91a31e.png",
        "sponsor-2026-09-2d6d9a37-a6de-4351-8f67-87cba1f229b6.png",
        "sponsor-2026-10-bdf1ce7b-cafe-43d1-98a6-d463c5dba4db.png",
        "sponsor-2026-11-f3d0db14-2b4a-41a1-88af-5615c342840e.png",
        "sponsor-2026-12-d762050a-a1ef-421f-bddd-2dece2d660d3.jpg",
        "sponsor-2026-13-9a8fae7c-7326-46ec-9179-2da0da239548.jpg",
        "sponsor-2026-14-43c437a7-51ec-4f56-9532-455d92a35e86.jpg",
        "sponsor-2026-15-e6899c9e-95db-4a81-8ec8-adddf548145b.jpg",
        "sponsor-2026-16-64df616b-af38-40ed-8dac-0d6c35db43c5.jpg",
        "sponsor-2026-17-8d802a4b-5b54-45a1-8024-47e13d40d904.jpg",
        "sponsor-2026-18-0e98962c-ebb4-49b9-8c40-e13deae3d12e.jpg",
        "sponsor-2026-19-05f8c96a-3105-4078-ba23-b9b8f36e0443.jpg",
        "sponsor-2026-20-f8fdc4f0-6d63-4e4e-ae62-7bbc12e37d0d.png",
        "sponsor-2026-21-8c283c85-510b-406e-b6c7-c3d2bf73f38f.jpg",
        "sponsor-2026-22-3aa293a0-856f-43e6-a61c-8ccecc715f23.png",
        "sponsor-2026-23-b48ee4eb-6263-41fd-a464-45b32f10a3ea.jpg",
        "sponsor-2026-24-f8dcc09c-6819-4ff1-8f73-ea52a32ee0ad.jpg",
        "sponsor-2026-25-5b89219d-87e6-4406-b9ee-4c5db26189cf.jpg",
        "sponsor-2026-26-a9c21fd1-df9a-4945-a235-2218705238c5.png",
        "sponsor-2026-27-9d2ebf6d-2831-4650-bc1c-78f45b448b82.png",
        "sponsor-2026-28-9cfb44c7-ab6e-49a7-a10f-b462f0890102.jpeg",
        "sponsor-2026-29-73c1b494-3797-4892-99be-460579849e64.png",
        "sponsor-2026-30-cfcd3c9b-2050-4f24-9073-ce843c27e2a5.jpg",
        "sponsor-2026-31-6d04a388-0119-45c7-904f-b9bbbe596fd3.png",
        "sponsor-2026-32-e8674267-a1b7-405c-b643-946b4ebc454d.png",
        "sponsor-2026-33-a3520cca-20cf-4b6e-9db4-e3ab0efc606d.png",
        "sponsor-2026-34-5dc98b66-8e35-416f-9282-413e88540957.jpeg",
        "sponsor-2026-35-4df65ed8-8f1f-425c-afd5-579ce470ee3f.jpg",
        "sponsor-2026-36-d7e29676-9882-45ed-969a-9f7f14365fea.png",
        "sponsor-2026-37-5acf6e84-d093-4e84-a950-a388902ad591.png",
        "sponsor-2026-38-c3b53d14-3dc5-4f22-b923-2ed78ed8e338.png",
        "sponsor-2026-39-0f5bd565-0403-446d-93ff-922fe8074083.png",
        "sponsor-2026-40-17520246-e3c6-4832-b1a6-08c7074cc6a9.png",
        "sponsor-2026-41-25640d19-bd24-47d2-8072-175dde76e5de.jpg",
        "sponsor-2026-42-07058f85-92e2-429c-a409-83a5704ac162.png",
        "sponsor-2026-43-99074eb6-37ab-48dc-b65a-ce285a1e020e.jpg",
        "sponsor-2026-44-88f0020d-97ee-49fc-a6a8-4f91bff0bddd.jpg",
        "sponsor-2026-45-d6fc4db7-f04b-443c-a588-ed8913ff5782.jpg",
        "sponsor-2026-46-3ef02db8-bc8b-4a71-916d-a0e134e3c700.jpg",
        "sponsor-2026-47-130d7b54-d058-4ecc-ae7c-f2dfbca6e215.png",
        "sponsor-2026-48-222ecf12-746b-4373-a3f2-b0548957b43e.jpeg",
        "sponsor-2026-49-81480bdd-6549-4f88-a79c-a5c41fe219a2.png",
        "sponsor-2026-50-03dd3c3f-7b01-4c8b-aef8-0551d8e10a21.jpg",
        "sponsor-2026-51-4b141309-c877-480b-93ca-5d36e2a6dbd9.png",
        "sponsor-2026-52-e250a687-cad1-4ef2-867e-7687ed28edde.jpg",
        "sponsor-2026-53-79a1be47-4d3e-44b3-855b-8dcd740fb25f.jpg",
        "sponsor-2026-54-6427c14f-8618-4ed5-ae4b-75ba029dffe9.png",
        "sponsor-2026-55-3441a13d-a734-4726-bd08-95d51d5a9433.jpeg",
        "sponsor-2026-56-453f053a-2db9-49be-aa29-b308bbde5475.jpg"
    ].map((filename, index) => ({
        name: `Patrocinador ${String(index + 1).padStart(2, "0")}`,
        logo: `images/sponsors/2026/${filename}`,
        category: "colaborador"
    })),

    // ====================================
    // RACE PHOTOS SECTION
    // ====================================
    racePhotos: {
        title: "Fotos de la carrera",
        description: "La galería de fotos de la edición 2026 todavía no está disponible.",
        buttonText: "Fotos próximamente",
        note: "Las fotos de esta edición se publicarán después del evento.",
        url: "#",
        isAvailable: false
    },

    // ====================================
    // CONTACT INFORMATION
    // ====================================
    contact: {
        organizer: "10.ª Zona de la Guardia Civil de La Rioja",
        phone: "+34 941 22 99 00",
        instagram: "https://instagram.com/gc_carrera_popular_la_rioja/"
    },

    // ====================================
    // IMAGES CONFIGURATION
    // ====================================
    images: {
        logo: "images/2026/logo-carrera-2026.jpeg",
        heroImage: "images/2026/logo-carrera-2026.jpeg",
        objectiveImage: "https://www.ardem.es/wp-content/uploads/2011/06/centro-atencion-integral-ardem-1.jpg",
        objectiveImageSource: "https://www.ardem.es/ardemrioja/centro-de-atencion-integral/",
        shirtImage: "images/2026/camiseta-carrera-2026-delante-y-detras.jpeg",
        bibImage: "images/2026/dorsal-carrera-2026.jpeg",
        runnerPackImage: "images/2026/bolsa-y-camiseta-carrera-2026.jpeg",
        cartelImage: "images/2026/cartel-carrera-2026.jpeg"
    },

    // ====================================
    // OFFICIAL T-SHIRT SECTION
    // ====================================
    shirt: {
        title: "Material de la edición 2026",
        subtitle: "Camiseta, dorsal y bolsa",
        description: "Imágenes del material de esta edición. RockTheSport ofrece la camiseta solidaria como una opción de inscripción por 10 €.",
        features: [
            "Camiseta de la II Carrera Solidaria",
            "Dorsal de la edición 2026",
            "Bolsa y camiseta"
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
        primaryColor: "#0b5b39",
        secondaryColor: "#f15a24"
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
   - Keep sponsor logos separated by edition in "images/sponsors/2025/" and "images/sponsors/2026/"
   - Sponsor images should be named descriptively (e.g., guardia-civil.png)
   - 2026 logos currently use neutral labels because the event page does not provide sponsor names

8. RACE PHOTOS:
   - Update racePhotos.url with the actual photo gallery URL when available
   - Set racePhotos.isAvailable to true when photos are ready
   - Customize the title, description, buttonText, and note as needed
   - The button will be disabled and grayed out until photos are available

IMPORTANT: 
- Always use quotes around text values
- Don't forget commas after each item in arrays
- Test the website after making changes
*/
