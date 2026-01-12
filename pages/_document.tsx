import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon-rounded.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/favicon-rounded.png" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="💒 Undangan Pernikahan Diah & Miftah - 29 Januari 2026. Dengan senang hati kami mengundang Anda untuk hadir dalam momen bahagia kami. 🌸" />
        <meta name="keywords" content="undangan pernikahan, wedding invitation, Diah Miftah, pernikahan 2026, undangan digital, wedding card" />
        <meta name="author" content="Diah & Miftah" />
        <title>Undangan Pernikahan Diah & Miftah</title>
        
        {/* Open Graph / Facebook & WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="💒 Undangan Pernikahan Diah & Miftah 💒" />
        <meta property="og:description" content="🌸 Dengan senang hati kami mengundang Anda untuk hadir dalam momen bahagia pernikahan kami 🌸\n\n📅 Rabu, 29 Januari 2026\n📍 Ds. Gagaan, Gg. Krisna, Kunduran\n\nMohon kehadiran dan doa restu Anda 🤲" />
        <meta property="og:image" content="/seobanner/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Undangan Pernikahan Diah & Miftah - 29 Januari 2026" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:site_name" content="Wedding Diah & Miftah" />
        <meta property="og:locale" content="id_ID" />
        
        {/* WhatsApp specific optimizations */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:secure_url" content="/seobanner/banner.png" />
        <meta name="theme-color" content="#D4AF37" />
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'java-cream': '#FFF8F0',
                    'java-gold': '#D4AF37',
                    'java-brown': '#8B5E3C',
                    'java-dark': '#4A3728',
                    'anime-sky': '#E0F2F1',
                    'anime-pink': '#FCE4EC',
                  },
                  fontFamily: {
                    serif: ['"Playfair Display"', 'serif'],
                    script: ['"Great Vibes"', 'cursive'],
                    cinzel: ['"Cinzel"', 'serif'],
                    sans: ['"Quicksand"', 'sans-serif'],
                  },
                  animation: {
                    'float': 'float 6s ease-in-out infinite',
                    'fade-up': 'fadeUp 1s ease-out forwards',
                    'spin-slow': 'spin 12s linear infinite',
                  },
                  keyframes: {
                    float: {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                    fadeUp: {
                      '0%': { opacity: '0', transform: 'translateY(20px)' },
                      '100%': { opacity: '1', transform: 'translateY(0)' },
                    }
                  }
                },
              },
            }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}