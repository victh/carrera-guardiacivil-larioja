# 🚀 Quick Start Guide - Carrera Solidaria Website

**Get your solidarity run website up and running in 5 minutes!**

## Step 1: Edit Your Event Information ✏️

1. **Open the `config.js` file** in any text editor (Notepad, VS Code, etc.)

2. **Change these basic details:**
   ```javascript
   event: {
       title: "Your Race Name Here",           // ← Change this
       subtitle: "Your Slogan Here",           // ← Change this
       date: "Sunday, October 15, 2024",      // ← Change this
       location: "Your Location",              // ← Change this
       time: "9:00 AM"                        // ← Change this
   }
   ```

3. **Update your contact information:**
   ```javascript
   contact: {
       email: "your-email@example.com",       // ← Change this
       phone: "+34 123 456 789",              // ← Change this
       address: "Your Address Here"           // ← Change this
   }
   ```

## Step 2: Add Your Cause Information 💝

```javascript
objective: {
    description: "Write about your cause here...",  // ← Describe your cause
    beneficiaryOrg: "Name of Organization"          // ← Beneficiary name
}
```

## Step 3: Set Your Prices 💰

```javascript
pricing: [
    {
        category: "Adult Registration",
        price: "15€",                          // ← Your price
        description: "What's included...",     // ← What participants get
        featured: true                         // ← Highlight this option
    }
    // Add more pricing options...
]
```

## Step 4: Add Your Images 📸

1. **Create an `images` folder** (if it doesn't exist)
2. **Add these 3 essential images:**
   - `logo.png` - Your event logo
   - `hero-image.jpg` - Main banner image
   - `objective-image.jpg` - Image of your cause

## Step 5: Test Your Website 🌐

1. **Double-click `index.html`** to open it in your web browser
2. **Check that everything looks correct**
3. **Test on your phone** to make sure it's mobile-friendly

## Step 6: Publish Online 🚀

### Easy Option (Recommended):
1. Go to [Netlify.com](https://netlify.com)
2. Drag and drop your entire folder
3. Get your free website URL instantly!

### Other Options:
- **Vercel.com** - Another free hosting option
- **GitHub Pages** - Free with GitHub account
- **Your web hosting provider** - Upload via FTP

---

## 🆘 Need Help?

### Common Issues:

**❌ Images not showing?**
- Make sure images are in the `images` folder
- Check that filenames match exactly (including .jpg, .png)

**❌ Website looks broken?**
- Check that all files are in the same folder
- Look for missing commas in `config.js`

**❌ Changes not appearing?**
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Clear your browser cache

### Still Need Help?
1. Check the full `README.md` file
2. Look at `config-example.js` for a complete example
3. Make sure all quotes and commas are correct in `config.js`

---

## ✅ Checklist

- [ ] Edited event title and details
- [ ] Updated contact information  
- [ ] Added cause/objective description
- [ ] Set pricing information
- [ ] Added logo image
- [ ] Added hero banner image
- [ ] Added cause image
- [ ] Tested website in browser
- [ ] Published online

**🎉 Congratulations! Your solidarity run website is ready!**

---

*Need more customization? Check the full README.md for advanced options.*

