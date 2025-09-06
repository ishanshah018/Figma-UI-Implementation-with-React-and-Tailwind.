// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors from Figma
        'dark': {
          900: '#0A0A14',
          800: '#1A1B2E',
          700: '#1E1F30',
          600: '#252640',
          500: '#2A2D47',
        },
        // Purple theme
        'purple': {
          500: '#6C5CE7',
          600: '#5B4FCF',
          700: '#4A3FB8',
        },
        // Pink/Magenta accents
        'pink': {
          500: '#E84393',
          600: '#D63384',
        },
        // Blue accents
        'blue': {
          400: '#00D4FF',
          500: '#0091FF',
          600: '#007ACC',
        },
        // Green accents
        'green': {
          400: '#00E676',
          500: '#00C853',
        },
        // Orange accents
        'orange': {
          400: '#FF9F43',
          500: '#FF7F00',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A0A14 0%, #1E1F30 50%, #252640 100%)',
        'gradient-button': 'linear-gradient(135deg, #6C5CE7 0%, #E84393 100%)',
        'gradient-card': 'linear-gradient(135deg, #1A1B2E 0%, #252640 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(108, 92, 231, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(108, 92, 231, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};