/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          gold: {
            300: '#fde68a',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
          },
        },
        fontFamily: {
          sans: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ],
          /** Header logo title — Goldman (Google Fonts) */
          gaming: ['Goldman', 'system-ui', 'sans-serif'],
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-33.333%)' },
          },
          'pulse-glow': {
            '0%, 100%': { boxShadow: '0 0 10px #f59e0b, 0 0 20px #f59e0b, 0 0 40px #f59e0b44' },
            '50%': { boxShadow: '0 0 20px #f59e0b, 0 0 40px #f59e0b, 0 0 80px #f59e0b88' },
          },
          'pulse-red': {
            '0%, 100%': { boxShadow: '0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 40px #ef444444' },
            '50%': { boxShadow: '0 0 20px #ef4444, 0 0 50px #ef4444, 0 0 80px #ef444488' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-12px)' },
          },
          shimmer: {
            '0%': { backgroundPosition: '-200% center' },
            '100%': { backgroundPosition: '200% center' },
          },
          'coin-fall': {
            '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '1' },
            '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
          },
          'number-tick': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
          },
          'glow-text': {
            '0%, 100%': { textShadow: '0 0 10px #f59e0b, 0 0 20px #f59e0b, 0 0 40px #f59e0b' },
            '50%': { textShadow: '0 0 20px #fbbf24, 0 0 40px #fbbf24, 0 0 80px #fbbf24, 0 0 120px #fbbf2466' },
          },
          'glow-text-red': {
            '0%, 100%': { textShadow: '0 0 10px #ef4444, 0 0 20px #ef4444' },
            '50%': { textShadow: '0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444' },
          },
          'streak': {
            '0%': { transform: 'translateX(-100%) skewX(-15deg)', opacity: '0' },
            '50%': { opacity: '1' },
            '100%': { transform: 'translateX(200%) skewX(-15deg)', opacity: '0' },
          },
          'particle-rise': {
            '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
            '100%': { transform: 'translateY(-80px) scale(0)', opacity: '0' },
          },
          'spin-slow': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          'border-glow': {
            '0%, 100%': { borderColor: '#f59e0b' },
            '50%': { borderColor: '#fbbf24', boxShadow: '0 0 15px #fbbf24, inset 0 0 15px #fbbf2411' },
          },
          'gold-bloom': {
            '0%, 100%': {
              textShadow: '0 0 10px #FFD700, 0 0 20px #FFD70088, 0 0 40px #f59e0b44, 0 2px 4px rgba(0,0,0,0.9)',
              filter: 'drop-shadow(0 0 8px #FFD70088)',
            },
            '50%': {
              textShadow: '0 0 20px #FFD700, 0 0 40px #FFD700bb, 0 0 70px #f59e0b88, 0 0 100px #f59e0b44, 0 2px 4px rgba(0,0,0,0.9)',
              filter: 'drop-shadow(0 0 16px #FFD700)',
            },
          },
          'text-flicker': {
            '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
              textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 40px #f59e0b, 0 2px 4px rgba(0,0,0,0.9)',
            },
            '20%, 24%, 55%': {
              textShadow: '0 0 4px #FFD700, 0 2px 4px rgba(0,0,0,0.9)',
            },
          },
          'scale-pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.04)' },
          },
          'slide-up-fade': {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        animation: {
          marquee: 'marquee 45s linear infinite',
          'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
          'pulse-red': 'pulse-red 2s ease-in-out infinite',
          float: 'float 3s ease-in-out infinite',
          shimmer: 'shimmer 3s linear infinite',
          'coin-fall': 'coin-fall linear infinite',
          'glow-text': 'glow-text 2s ease-in-out infinite',
          'glow-text-red': 'glow-text-red 1.5s ease-in-out infinite',
          streak: 'streak 3s ease-in-out infinite',
          'particle-rise': 'particle-rise 2s ease-out infinite',
          'spin-slow': 'spin-slow 8s linear infinite',
          'border-glow': 'border-glow 2s ease-in-out infinite',
          'gold-bloom': 'gold-bloom 2.5s ease-in-out infinite',
          'text-flicker': 'text-flicker 4s linear infinite',
          'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
          'slide-up-fade': 'slide-up-fade 0.6s ease-out forwards',
        },
      },
    },
    plugins: [],
  }