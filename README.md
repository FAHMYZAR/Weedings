# Wedding Invitation - Diah & Miftah

Digital wedding invitation built with Next.js, featuring Javanese-Anime fusion aesthetic.

## 🚀 Live Demo
- **Production**: [Your Vercel URL]
- **Date**: 29 Januari 2026
- **Location**: Ds. Gagaan, Gg. Krisna, Kunduran

## ✨ Features
- 📱 Mobile-first responsive design
- 🎵 Background music with controls
- 💌 Guest name personalization via URL (`?name=Guest+Name`)
- 📝 Real-time wishes/messages system
- 💳 Payment info (BCA & BRI)
- 🗺️ Interactive location maps
- 📱 Optimized for WhatsApp sharing
- 🎨 Javanese traditional design elements

## 🛠️ Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure
```
├── components/          # React components
│   ├── sections/       # Page sections
│   ├── BottomNav.tsx   # Navigation
│   ├── JavaneseDecor.tsx # Decorative elements
│   └── OpeningScreen.tsx # Landing screen
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # HTML document
│   └── index.tsx      # Home page
├── public/            # Static assets
│   ├── favicon/       # Favicon files
│   ├── foto_prof/     # Profile images
│   ├── music/         # Background music
│   ├── seobanner/     # Social media banner
│   └── wishes.json    # Wishes database
├── styles/            # Global styles
├── utils/             # Utility functions
└── types.ts           # TypeScript types
```

## 🚀 Deployment to Vercel

### Prerequisites
- Node.js 18+
- Vercel account

### Steps
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Connect GitHub repo to Vercel
   - Auto-deploy on push
   - Custom domain optional

3. **Environment Setup**:
   - No environment variables needed
   - All assets in `/public` folder

### Custom URLs
Share personalized invitations:
- `https://your-domain.com?name=Bapak+Ahmad`
- `https://your-domain.com?name=Keluarga+Besar`

## 📱 Social Media Optimization
- **WhatsApp**: Optimized preview with emoji and details
- **Facebook**: Open Graph meta tags
- **Twitter**: Twitter Card support
- **Banner**: 1200x630px for optimal sharing

## 🎵 Assets Required
Make sure these files exist in `/public`:
- `/favicon/favicon-rounded.png` - Rounded favicon
- `/foto_prof/animepp.jpg` - Profile photo 1
- `/foto_prof/animepp2.jpg` - Profile photo 2
- `/foto_prof/lokasi/maps_wanita.png` - Location map 1
- `/foto_prof/lokasi/maps_pria.png` - Location map 2
- `/music/langgam.mp3` - Background music
- `/seobanner/banner.png` - Social media banner (1200x630px)

## 💝 Features
- **Guest Personalization**: URL parameter `?name=Guest+Name`
- **Wishes System**: Real-time message saving to JSON
- **Payment Info**: BCA & BRI account details with copy function
- **Music Control**: Background music with play/pause
- **Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags for social sharing

## 📞 Support
For technical support or customization, contact the developer.

---
Made with ❤️ for Diah & Miftah's special day