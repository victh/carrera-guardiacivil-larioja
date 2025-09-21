# Carrera Solidaria Website

A simple, modern, and easily customizable website template for solidarity runs and charity events.

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
    ├── logo.png        # Your event logo
    ├── hero-image.jpg  # Main banner image
    ├── objective-image.jpg  # Cause/objective image
    └── sponsor*.png    # Sponsor logos
```

## ✏️ How to Customize Your Website

### 1. Basic Event Information

Open `config.js` and edit the `event` section:

```javascript
event: {
    title: "Your Race Name",
    subtitle: "Your Slogan",
    description: "Description of your event",
    date: "Sunday, October 15, 2024",
    location: "Your Location",
    time: "9:00 AM"
}
```

### 2. Race Distances and Times

Edit the `distances` array:

```javascript
distances: [
    {
        distance: "5KM",
        category: "Adults",
        time: "10:00h",
        description: "Main race"
    }
    // Add more distances...
]
```

### 3. Pricing

Update the `pricing` section:

```javascript
pricing: [
    {
        category: "Adult Registration",
        price: "15€",
        description: "Includes t-shirt and bib",
        featured: true  // This will be highlighted
    }
    // Add more pricing options...
]
```

### 4. Contact Information

Update your contact details:

```javascript
contact: {
    email: "your-email@example.com",
    phone: "+34 123 456 789",
    address: "Your Address",
    socialMedia: {
        facebook: "https://facebook.com/yourpage",
        twitter: "https://twitter.com/yourhandle",
        instagram: "https://instagram.com/yourhandle"
    }
}
```

### 5. Solidarity Cause

Edit the `objective` section:

```javascript
objective: {
    description: "Description of your cause...",
    beneficiaryOrg: "Name of Beneficiary Organization"
}
```

## 🖼️ Adding Images

### Required Images:
1. **logo.png** (200x80px recommended) - Your event logo
2. **hero-image.jpg** (1200x600px recommended) - Main banner image
3. **objective-image.jpg** (600x400px recommended) - Image representing your cause

### Optional Images:
- **sponsor*.png** - Sponsor logos
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
- ✅ **Contact Form** - Built-in contact form
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

## 📧 Contact Form Setup

The contact form is ready to use but needs backend integration. You can:

1. **Use a form service** like Formspree, Netlify Forms, or Google Forms
2. **Set up your own server** to handle form submissions
3. **Use email integration** services

To integrate, edit the `handleContactForm` function in `script.js`.

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

### Contact Form Not Working?
- The form needs backend integration to actually send emails
- For testing, it will show a success message but won't send real emails

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

*Last updated: September 2024*

