# II Carrera Solidaria Guardia Civil La Rioja

Web de la II Carrera Solidaria Guardia Civil La Rioja, que se celebrará en Haro el 15 de noviembre de 2026 a favor de la Asociación Riojana de Esclerosis Múltiple (ARDEM).

## 🚀 Quick Start

1. **Download the files** to your computer
2. **Edit the `config.js`** file with your event information
3. **Add your images** to the `images` folder
4. **Open `index.html`** in your web browser to see your website

## 📁 File Structure

```
Runweb/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── config.js           # ⭐ EDIT THIS FILE with your event info
├── README.md           # This documentation
└── images/             # 📁 Place your images here
    ├── sponsors/
    │   ├── 2025/       # Sponsor logos from the previous edition
    │   └── 2026/       # Sponsor logos from the current edition
    └── 2026/           # Current-edition logo, bib, apparel and poster
```

## Edición 2026

La información publicada en la web se contrasta con la [ficha del evento en RockTheSport](https://www.rockthesport.com/es/evento/ii-carrera-guardia-civil-la-rioja).

- **Lugar:** Parking del Mazo (calle Severo Ochoa, 45), Haro (La Rioja).
- **Horario general:** de 9:00 a 18:00; el programa de actividades comienza a las 10:00.
- **Carreras y caminata:** 500 m a las 11:00, 1 km a las 11:15, carrera de 6 km a las 12:00 y caminata a las 12:01.
- **Edades según el reglamento:** 500 m, nacidos entre 2018 y 2023; 1 km, nacidos entre 2014 y 2017; 6 km, nacidos en 2013 o antes; caminata, todas las edades.
- **Reglamento:** disponible en la web como [PDF](documents/reglamento-carrera-2026.pdf).
- **Tarifas:** 6 km y caminata, 10 €; 1 km y 500 m, 8 €; camiseta solidaria, 10 €; dorsal solidario, donación libre o de 5 €, 10 €, 20 € o 50 €.
- **Patrocinadores:** los logotipos están separados por edición en `images/sponsors/2025/` e `images/sponsors/2026/`.
- **Material del evento:** las imágenes de cartel, logo, dorsal, camiseta y bolsa están en `images/2026/`.

El programa completo, las tarifas y las inscripciones pueden cambiar; consulta la ficha oficial antes de acudir.

## ✏️ How to Customize Your Website

### 1. Basic Event Information

Open `config.js` and edit the `event` section:

```javascript
event: {
    title: "II Carrera Solidaria Guardia Civil La Rioja",
    subtitle: "Deporte y solidaridad en Haro",
    description: "Corre o camina a favor de ARDEM",
    date: "Domingo, 15 de noviembre de 2026",
    location: "Parking del Mazo (calle Severo Ochoa, 45), Haro (La Rioja)",
    time: "9:00–18:00"
}
```

### 2. Race Distances and Times

Edit the `distances` array:

```javascript
distances: [
    {
        distance: "6 km",
        category: "Carrera",
        time: "12:00",
        description: "Salida de la carrera de 6 km."
    },
    // See config.js for all race and walk start times.
]
```

### 3. Pricing

Update the `pricing` section:

```javascript
pricing: [
    {
        category: "Carrera 6 km",
        price: "10 €",
        description: "Inscripción para la carrera de 6 km.",
        featured: false
    },
    // See config.js for all registration and donation options.
]
```

### 4. Contact Information

Update your contact details:

```javascript
contact: {
    organizer: "10.ª Zona de la Guardia Civil de La Rioja",
    phone: "+34 941 22 99 00",
    instagram: "https://instagram.com/gc_carrera_popular_la_rioja/"
}
```

### 5. Solidarity Cause

Edit the `objective` section:

```javascript
objective: {
    description: "La recaudación de esta edición se destina a apoyar a ARDEM.",
    beneficiaryOrg: "Asociación Riojana de Esclerosis Múltiple (ARDEM)"
}
```

## 🖼️ Adding Images

### Current Edition Images:
- **images/2026/logo-carrera-2026.jpeg** - Event logo
- **images/2026/cartel-carrera-2026.jpeg** - Event poster
- **images/2026/** - Current-edition shirt, bib and bag images

### Optional Images:
- **images/sponsors/<year>/** - Sponsor logos organized by edition
- **images/2026/** - Current-edition logo, bib, apparel and poster
- **gallery*.jpg** - Photo gallery images

### How to Add Images:
1. Create an `images` folder in your project
2. Place your images in this folder
3. Make sure the filenames match what's in `config.js`
4. If your image has a different name, update the path in `config.js`

## 🎨 Customizing Colors

You can change the main colors of your website by editing the `settings` section in `config.js`:

```javascript
settings: {
    primaryColor: "#2563eb",    // Main blue color
    secondaryColor: "#667eea"   // Secondary color
}
```

Use any hex color code (like #ff0000 for red, #00ff00 for green, etc.)

## 📱 Features Included

- ✅ **Fully Responsive** - Works on mobile, tablet, and desktop
- ✅ **Modern Design** - Clean and professional appearance
- ✅ **Easy to Edit** - All content in one config file
- ✅ **Registration System Ready** - Easy to connect to registration platforms
- ✅ **Payment Integration Ready** - Easy to connect to payment systems
- ✅ **Social Media Integration** - Links to your social media
- ✅ **SEO Friendly** - Optimized for search engines
- ✅ **Fast Loading** - Optimized performance

## 🔧 Advanced Customization

### Adding New Sections

You can add new sections by:
1. Adding HTML to `index.html`
2. Adding corresponding CSS to `styles.css`
3. Adding any data to `config.js`
4. Adding JavaScript functionality to `script.js`

### Integrating with Registration Systems

To connect with registration platforms, edit the `handleRegistration` function in `script.js`:

```javascript
function handleRegistration(category) {
    // Redirect to your registration system
    window.location.href = 'https://your-registration-system.com';
}
```

### Integrating with Payment Systems

To connect with payment platforms, edit the `handleDonation` function in `script.js`:

```javascript
function handleDonation(amount) {
    // Redirect to your payment system
    window.location.href = `https://your-payment-system.com?amount=${amount}`;
}
```

## 🌐 Publishing Your Website

### Option 1: Simple Hosting (Recommended for beginners)
1. Upload all files to a web hosting service like:
   - **Netlify** (Free, drag & drop)
   - **Vercel** (Free, easy deployment)
   - **GitHub Pages** (Free with GitHub account)

### Option 2: Traditional Web Hosting
1. Upload all files via FTP to your web hosting provider
2. Make sure `index.html` is in the root directory

### Option 3: Local Testing
1. Simply open `index.html` in your web browser
2. Perfect for testing before publishing

## 🆘 Troubleshooting

### Images Not Showing?
- Check that images are in the `images` folder
- Verify filenames match exactly what's in `config.js`
- Make sure image files aren't corrupted

### Website Looks Broken?
- Check that all files are in the same folder
- Open browser developer tools (F12) to see error messages
- Make sure `config.js` has proper syntax (commas, quotes, etc.)

## 📞 Support

If you need help:
1. Check this README file first
2. Look at the comments in `config.js`
3. Check browser developer tools for error messages
4. Ensure all files are properly uploaded/saved

## 📝 License

This template is free to use for any solidarity run or charity event. Feel free to modify and distribute.

---

**Made with ❤️ for solidarity runs and charity events**

*Última actualización: noviembre de 2026*
