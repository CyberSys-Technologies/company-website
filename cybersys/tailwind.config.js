/** @type {import('tailwindcss').Config} */
// Moved from the Tailwind CDN script in index.html so styles are built ahead of time
export default {
  content: ['./index.html', './*.tsx', './pages/**/*.tsx', './components/**/*.tsx', './data/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      // Headings across the site sit one step smaller than Tailwind's defaults
      fontSize: {
        '3xl': ['1.75rem', { lineHeight: '2.1rem' }],
        '4xl': ['2rem', { lineHeight: '2.3rem' }],
        '5xl': ['2.5rem', { lineHeight: '1.1' }],
        '6xl': ['3rem', { lineHeight: '1.1' }],
        '7xl': ['3.5rem', { lineHeight: '1.1' }],
      },
      colors: {
        brand: {
          primary: '#2082A6',
          secondary: '#01CBAE',
          surface: '#FFFFFF',
          subtle: '#F8FAFC',
          // Brand guide: Ink and Slate for text
          text: '#101729',
          muted: '#4A5567',
          // Brand guide: Mint Green accent
          mint: '#01EFAC',
          // Brand guide: deeper tint for buttons and small text, so white text stays readable
          action: '#2F6D8C',
          deep: '#176482',
          mist: '#F0F8F8',
        }
      },
      animation: {
        'panel-in': 'panelIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        'partner-fade': 'partnerFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both',
        'hero-rise': 'heroRise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        'hero-image': 'heroImage 2.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'dash-flow': 'dashFlow 1.2s linear infinite',
        'bar-grow': 'barGrow 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        barGrow: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        dashFlow: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-40' },
        },
        heroRise: {
          '0%': { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroImage: {
          '0%': { opacity: '0', transform: 'scale(1.06)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        partnerFade: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        panelIn: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: []
};
