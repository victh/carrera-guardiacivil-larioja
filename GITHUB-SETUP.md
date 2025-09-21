# 🐙 GitHub Repository Setup Guide

## Creating "carrera-solidaria-GC" Repository

Follow these steps to create a GitHub repository for your solidarity run website and enable free hosting.

---

## Method 1: Using GitHub Website (Recommended for Beginners)

### Step 1: Create Repository on GitHub.com

1. **Go to [GitHub.com](https://github.com)** and sign in (create account if needed)
2. **Click the green "New" button** or the "+" icon in the top right
3. **Repository name:** `carrera-solidaria-GC`
4. **Description:** `Website for Guardia Civil Solidarity Run - Carrera Solidaria`
5. **Set to Public** (so it can be hosted for free)
6. **Check "Add a README file"** ✅
7. **Click "Create repository"**

### Step 2: Upload Your Files

1. **In your new repository, click "uploading an existing file"**
2. **Drag and drop ALL your files** from the `Runweb` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `config.js`
   - `config-example.js`
   - `README.md`
   - `QUICK-START.md`
   - The entire `images` folder
3. **Commit message:** `Initial website upload - Carrera Solidaria GC`
4. **Click "Commit changes"**

### Step 3: Enable GitHub Pages (Free Hosting)

1. **Go to your repository Settings** (tab at the top)
2. **Scroll down to "Pages"** in the left sidebar
3. **Source:** Select "Deploy from a branch"
4. **Branch:** Select "main" 
5. **Folder:** Select "/ (root)"
6. **Click "Save"**
7. **Your website will be available at:** `https://yourusername.github.io/carrera-solidaria-GC`

---

## Method 2: Using Git Commands (Advanced Users)

### Prerequisites
- Git installed on your computer
- GitHub account created

### Step 1: Initialize Git in Your Folder
```bash
cd C:\Users\vicThor\Desktop\Runweb
git init
```

### Step 2: Add All Files
```bash
git add .
git commit -m "Initial commit - Carrera Solidaria GC website"
```

### Step 3: Create Repository on GitHub
1. Go to GitHub.com and create new repository named `carrera-solidaria-GC`
2. **Don't initialize with README** (since you already have files)

### Step 4: Connect and Push
```bash
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/carrera-solidaria-GC.git
git push -u origin main
```

Replace `YOURUSERNAME` with your actual GitHub username.

### Step 5: Enable GitHub Pages
Follow Step 3 from Method 1 above.

---

## Method 3: Using GitHub Desktop (User-Friendly)

### Step 1: Download GitHub Desktop
1. **Download [GitHub Desktop](https://desktop.github.com/)**
2. **Install and sign in** with your GitHub account

### Step 2: Create Repository
1. **Click "Create a New Repository on your hard drive"**
2. **Name:** `carrera-solidaria-GC`
3. **Local Path:** Choose your `Runweb` folder location
4. **Initialize with Git LFS:** Leave unchecked
5. **Click "Create Repository"**

### Step 3: Add Files and Publish
1. **Copy all your files** into the repository folder
2. **In GitHub Desktop:** All files will appear in "Changes"
3. **Commit message:** `Initial website - Carrera Solidaria GC`
4. **Click "Commit to main"**
5. **Click "Publish repository"**
6. **Make sure "Keep this code private" is UNCHECKED**
7. **Click "Publish Repository"**

### Step 4: Enable GitHub Pages
Follow Step 3 from Method 1 above.

---

## 🚀 After Setup - Your Website URLs

Once completed, you'll have:

- **Repository URL:** `https://github.com/YOURUSERNAME/carrera-solidaria-GC`
- **Live Website:** `https://YOURUSERNAME.github.io/carrera-solidaria-GC`

## 📝 Important Notes

### File Structure Should Look Like:
```
carrera-solidaria-GC/
├── index.html
├── styles.css
├── script.js
├── config.js
├── config-example.js
├── README.md
├── QUICK-START.md
├── GITHUB-SETUP.md
└── images/
    └── README.md
```

### GitHub Pages Notes:
- It may take **5-10 minutes** for your website to be live
- Updates take a few minutes to appear
- The website URL will be provided in repository Settings > Pages

### Making Updates:
1. **Edit files locally**
2. **Upload changes to GitHub** (via web, desktop app, or git commands)
3. **Changes will automatically update** your live website

---

## 🆘 Troubleshooting

**❌ Website not loading?**
- Wait 10 minutes after enabling Pages
- Check that `index.html` is in the root folder
- Ensure repository is public

**❌ Images not showing on live site?**
- Make sure image files are uploaded to GitHub
- Check that image paths in `config.js` are correct
- Verify image file names match exactly (case-sensitive)

**❌ Can't find Pages settings?**
- Repository must be public
- Look in Settings tab > Pages (left sidebar)

---

## ✅ Verification Checklist

- [ ] Repository created with name `carrera-solidaria-GC`
- [ ] All files uploaded to GitHub
- [ ] Repository is set to Public
- [ ] GitHub Pages enabled from main branch
- [ ] Website accessible at `https://YOURUSERNAME.github.io/carrera-solidaria-GC`
- [ ] All images and styling working on live site

**🎉 Congratulations! Your solidarity run website is now live on the internet!**
