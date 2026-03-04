/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // Modern approach: keep system fonts as fallbacks for better performance
      sans: ['Roboto Mono', 'monospace', 'ui-monospace', 'SFMono-Regular'],
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        // dynamic viewport height is the gold standard for mobile pizza apps!
        screen: '100dvh',
      },
      keyframes: {
        'bounce-short': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-short': 'bounce-short 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      colors: {
        // Adding a 'pizza' specific palette if you want to expand later
        pizza: {
          light: '#fbbf24', // yellow-400
          dark: '#f59e0b',  // yellow-500
        }
      }
    },
  },
  plugins: [],
};