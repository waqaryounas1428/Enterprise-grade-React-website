Premium Website

A modern, professional, and fully responsive website for **Noor Mosaic & Marble** - a premium marble installation and mosaic design company based in Bhakkar, Pakistan.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![License](https://img.shields.io/badge/license-Private-red.svg)

---

## 🌟 Features

### 🎨 **Premium Design**
- **International Modern UI/UX** - Clean, professional design inspired by luxury brands
- **Transparent Glass-Morphism Navbar** - Modern frosted glass effect with smooth scrolling
- **Cinematic Hero Section** - Ken Burns effect with auto-rotating background images
- **Premium Color Scheme** - Deep Navy Blue (#0F172A) and Rich Gold (#C9A14A)
- **Elegant Typography** - Playfair Display (serif) for headings, system fonts for body

### 🌍 **Bilingual Support (English/Urdu)**
- Complete language switcher with EN | اردو toggle
- 100+ translations for all content
- RTL (Right-to-Left) support for Urdu
- Noto Nastaliq Urdu font for authentic Urdu typography
- Centered text alignment for Urdu content

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes (320px - 1920px+)
- Touch-friendly navigation and interactions
- Adaptive layouts for tablets and desktops

### ✨ **Advanced Animations**
- Smooth scroll behavior with navbar offset
- Ken Burns effect on hero background images
- Shimmer effects on premium icons
- Hover animations with scale, rotate, and glow effects
- Fade-in animations for sections
- Staggered animations for project cards

### 🎯 **Key Sections**

#### 1. **Navbar**
- Transparent glass-morphism design (50% opacity at top, 70% when scrolled)
- Dark, bold text for better visibility
- Smooth scroll to sections
- Mobile hamburger menu
- Language switcher integrated

#### 2. **Hero Section**
- Auto-rotating background images (8-second intervals)
- Cinematic Ken Burns zoom & pan effect
- Simple gold gradient on company name
- Dual call-to-action buttons
- Scroll indicator with bounce animation
- Image navigation indicators

#### 3. **About Section**
- Company introduction with stats
- Years of experience, projects completed, happy clients
- Premium stat icons with unique colors
- Responsive grid layout

#### 4. **Services Section**
- 4-column grid on all devices
- Unique natural-colored icons for each service:
  - **Marble Installation** - Brown/Saddle Brown (#8B4513)
  - **Mosaic Design** - Dark Slate (#2C3E50)
  - **Custom Patterns** - Gold (#C9A14A)
  - **Maintenance & Repair** - Slate Gray (#708090)
- Read More/Less functionality on mobile
- Premium shimmer and glow effects

#### 5. **Projects Section**
- 104 project images with lightbox modal
- 3 featured/pinned projects at top
- Click-to-zoom functionality
- Gradient overlays on hover
- Magnifying glass icon effect
- Urdu translations for all project titles

#### 6. **Social Media & Contact Section**
- Contact cards with natural brand colors:
  - **Phone** - WhatsApp Green (#25D366)
  - **Email** - Gmail Red (#EA4335)
  - **Location** - Brand Gold (#C9A14A)
- Simple icon-only social media links (matching footer style)
- Natural brand colors for social icons:
  - **Facebook** - Official Blue (#1877F2)
  - **Instagram** - Gradient (Yellow → Orange → Pink → Purple)
  - **Twitter** - Official Blue (#1DA1F2)
  - **TikTok** - Black → Pink → Cyan gradient
  - **WhatsApp** - Official Green (#25D366)
- WhatsApp CTA button with shimmer effect

#### 7. **Footer**
- 4-column responsive grid
- Company info with social icons
- Quick links with arrow indicators
- Services list with bullet points
- Contact information with icons (Phone, Email, Location)
- Natural brand colors for all icons
- Scroll-to-top button
- Copyright and credits

---

## 🚀 Technologies Used

### **Core**
- **React 18.2.0** - Modern React with Hooks
- **React DOM 18.2.0** - DOM rendering
- **React Icons 4.12.0** - Icon library (Font Awesome)

### **Styling**
- **Custom CSS** - Modular CSS files for each component
- **CSS Variables** - Centralized color and style management
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Animations** - Keyframe animations and transitions

### **Fonts**
- **Playfair Display** (serif) - Elegant headings
- **Noto Nastaliq Urdu** - Authentic Urdu typography
- **System Fonts** - -apple-system, BlinkMacSystemFont, Segoe UI, Roboto

### **Build Tools**
- **React Scripts 5.0.1** - Create React App toolchain
- **Webpack** (via CRA) - Module bundler
- **Babel** (via CRA) - JavaScript compiler

---

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn

### **Installation Steps**

1. **Clone the repository**
```bash
git clone <repository-url>
cd noor-mosaic-marble
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## 📁 Project Structure

```
noor-mosaic-marble/
├── public/
│   ├── images/              # 123 project images
│   │   ├── hero.jpg         # Hero background 1
│   │   ├── hero2.jpg        # Hero background 2
│   │   └── [104 project images]
│   ├── index.html           # HTML template with SEO meta tags
│   └── favicon.ico
│
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar with language switcher
│   │   ├── Hero.jsx         # Hero section with rotating backgrounds
│   │   ├── About.jsx        # About section with stats
│   │   ├── Services.jsx     # Services cards with Read More
│   │   ├── Projects.jsx     # Projects gallery with lightbox
│   │   ├── SocialMedia.jsx  # Contact & social media section
│   │   ├── Footer.jsx       # Footer with 4-column layout
│   │   └── LanguageSwitcher.jsx  # EN | اردو toggle button
│   │
│   ├── contexts/
│   │   └── LanguageContext.jsx   # Language state & translations
│   │
│   ├── styles/              # Component-specific CSS
│   │   ├── Colors.css       # Color variables
│   │   ├── Gradients.css    # Gradient definitions
│   │   ├── Navbar.css       # Navbar styles
│   │   ├── Hero.css         # Hero section styles
│   │   ├── About.css        # About section styles
│   │   ├── Services.css     # Services section styles
│   │   ├── Projects.css     # Projects section styles
│   │   ├── SocialMedia.css  # Social media section styles
│   │   ├── Footer.css       # Footer styles
│   │   └── LanguageSwitcher.css  # Language switcher styles
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
│
├── package.json             # Dependencies and scripts
├── README.md                # This file
└── .gitignore              # Git ignore rules
```

---

## 🎨 Color Palette

### **Primary Colors**
```css
--primary-main: #0F172A      /* Deep Navy Blue */
--primary-dark: #020617      /* Darker Navy */
--primary-light: #1E293B     /* Lighter Navy */
```

### **Accent Colors**
```css
--accent-main: #C9A14A       /* Rich Gold */
--accent-light: #D4AF5F      /* Light Gold */
--accent-dark: #B8903D       /* Dark Gold */
```

### **Background Colors**
```css
--bg-primary: #FFFFFF        /* White */
--bg-secondary: #F8F7F4      /* Beige */
--bg-tertiary: #F1F0ED       /* Light Beige */
```

### **Text Colors**
```css
--text-primary: #0F172A      /* Dark Navy */
--text-secondary: #475569    /* Slate Gray */
--text-muted: #64748B        /* Muted Gray */
```

### **Natural Brand Colors**
```css
/* Social Media */
--facebook: #1877F2          /* Facebook Blue */
--instagram: radial-gradient /* Instagram Gradient */
--twitter: #1DA1F2           /* Twitter Blue */
--tiktok: linear-gradient    /* TikTok Gradient */
--whatsapp: #25D366          /* WhatsApp Green */

/* Contact Icons */
--phone-green: #25D366       /* WhatsApp Green */
--email-red: #EA4335         /* Gmail Red */
--location-gold: #C9A14A     /* Brand Gold */

/* Service Icons */
--service-brown: #8B4513     /* Marble Brown */
--service-slate: #2C3E50     /* Mosaic Slate */
--service-gold: #C9A14A      /* Pattern Gold */
--service-gray: #708090      /* Maintenance Gray */
```

---

## 🌐 SEO Optimization

### **Meta Tags**
- Comprehensive Open Graph tags for social sharing
- Twitter Card tags for Twitter sharing
- Schema.org structured data (LocalBusiness)
- Canonical URLs
- Robots meta tags
- Mobile-friendly viewport settings

### **Performance**
- Optimized font loading (preconnect, swap)
- Image optimization with proper sizing
- Lazy loading for images
- Minified CSS and JavaScript in production
- Code splitting with React

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Base: 320px - 639px

/* Small Mobile */
@media (max-width: 639px)

/* Tablet */
@media (min-width: 640px)

/* Desktop */
@media (min-width: 768px)

/* Large Desktop */
@media (min-width: 1024px)

/* Extra Large */
@media (min-width: 1280px)
```

---

## 🔧 Customization Guide

### **1. Update Company Information**

Edit `src/contexts/LanguageContext.jsx`:
```javascript
const translations = {
  english: {
    // Update text here
  },
  urdu: {
    // Update Urdu text here
  }
};
```

### **2. Change Colors**

Edit `src/styles/Colors.css`:
```css
:root {
  --primary-main: #YourColor;
  --accent-main: #YourColor;
}
```

### **3. Update Contact Information**

Edit `src/components/SocialMedia.jsx` and `src/components/Footer.jsx`:
```javascript
// Phone number
tel:+923339946999

// Email
mailto:noormosaicmarble@gmail.com

// Social media URLs
https://www.facebook.com/...
https://www.instagram.com/...
```

### **4. Add/Remove Projects**

Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    image: '/images/your-image.jpg',
    title: { english: 'Title', urdu: 'عنوان' },
    description: { english: 'Desc', urdu: 'تفصیل' },
    category: 'residential',
    featured: false
  },
  // Add more projects...
];
```

### **5. Update Hero Background Images**

Replace images in `public/images/`:
- `hero.jpg` - First background image
- `hero2.jpg` - Second background image

Or edit `src/components/Hero.jsx`:
```javascript
const heroImages = [
  '/images/hero.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg', // Add more
];
```

---

## 🎯 Key Features Explained

### **1. Ken Burns Effect**
The hero section uses a cinematic Ken Burns effect:
- Slow zoom in/out (0.92x to 1.0x scale)
- Subtle pan movements (1-2% translation)
- 20-second animation cycle
- Smooth ease-in-out transitions

### **2. Language Switching**
Complete bilingual support:
- Context API for state management
- 100+ translations
- RTL support for Urdu
- Persistent language selection
- Smooth transitions

### **3. Lightbox Modal**
Projects section features:
- Click-to-zoom functionality
- Full-screen image viewing
- Close button and backdrop click
- Smooth fade animations
- Responsive sizing

### **4. Glass Morphism**
Modern frosted glass effects:
- Transparent backgrounds (50-85% opacity)
- Backdrop blur (12-16px)
- Subtle borders and shadows
- Smooth transitions on scroll

### **5. Premium Icons**
Unique icon styling:
- Natural brand colors
- Shimmer animations
- Glowing halos (12px blur)
- 3D depth with inset highlights
- Smooth hover effects

---

## 📞 Contact Information

**Noor Mosaic & Marble**
- 📱 Phone: 0333-9946999
- 📧 Email: noormosaicmarble@gmail.com
- 📍 Address: Noor Marble and Granite Factory, Bhakkar
- 🌐 Facebook: [Noor Mosaic & Marble](https://www.facebook.com/profile.php?id=61589066824925)
- 📸 Instagram: [@noormosaicmarble](https://www.instagram.com/noormosaicmarble/)
- 🐦 Twitter: [@noormosaic1](https://x.com/noormosaic1)
- 🎵 TikTok: [@noor_mosaic_marble](https://www.tiktok.com/@noor_mosaic_marble)
- 💬 WhatsApp: [Chat Now](https://wa.me/923339946999)

---

## 📄 License

This project is private and created exclusively for **Noor Mosaic & Marble**.

---

## 🙏 Credits

**Developed with ❤️ for excellence**

- Design: Modern luxury brand aesthetics
- Development: React 18 with modern best practices
- Typography: Google Fonts (Playfair Display, Noto Nastaliq Urdu)
- Icons: React Icons (Font Awesome)
- Inspiration: International premium brand websites

---

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Hosting**
The `build/` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

### **Environment Variables**
No environment variables required for basic setup.

---

## 📈 Future Enhancements

- [ ] Add blog section for marble care tips
- [ ] Implement contact form with email integration
- [ ] Add customer testimonials slider
- [ ] Integrate Google Maps for location
- [ ] Add before/after project comparisons
- [ ] Implement image lazy loading
- [ ] Add PWA support
- [ ] Integrate analytics (Google Analytics)
- [ ] Add live chat support
- [ ] Create admin panel for content management

---

## 🐛 Known Issues

None at the moment. Report issues to the development team.

---

## 📚 Documentation

For detailed component documentation, see inline comments in each component file.

---

**Made with ❤️ for Noor Mosaic & Marble**

*Crafting elegance in stone since 2017*
