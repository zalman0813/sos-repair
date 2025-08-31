import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-yellow': '#FFA500',
        'warm-gold': '#FFD700',
        'warm-amber': '#FFC107',
        'warm-orange': '#FF8C00',
        metallic: {
          rosegold: {
            light: '#E8B4B8',
            DEFAULT: '#B76E79',
            dark: '#9B5A5E',
          },
          copper: {
            light: '#CB6D51',
            DEFAULT: '#B87333',
            dark: '#965C2A',
          },
          bronze: {
            light: '#CD7F32',
            DEFAULT: '#A0682A',
            dark: '#926F34',
          },
          gold: {
            light: '#D4AF37',
            DEFAULT: '#B8941F',
            dark: '#9C7B1A',
          },
          warmgray: {
            light: '#A0826D',
            DEFAULT: '#8B7355',
            dark: '#6B5842',
          }
        },
        dark: {
          100: '#3a3532',
          200: '#2d2927',
          300: '#221f1c',
          400: '#1a1715',
          500: '#131110',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #B76E79 0%, #B87333 50%, #CD7F32 100%)',
        'copper-gradient': 'linear-gradient(180deg, #B87333 0%, #CB6D51 50%, #B87333 100%)',
        'bronze-gradient': 'linear-gradient(135deg, #926F34 0%, #CD7F32 50%, #A0682A 100%)',
        'rosegold-gradient': 'linear-gradient(135deg, #B76E79 0%, #E8B4B8 50%, #B76E79 100%)',
        'metallic-shimmer': 'linear-gradient(105deg, transparent 40%, rgba(212, 175, 55, 0.4) 50%, transparent 60%)',
        'warm-metal-overlay': 'linear-gradient(180deg, rgba(183, 110, 121, 0.1) 0%, rgba(184, 115, 51, 0.1) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(183, 110, 121, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(184, 115, 51, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
export default config