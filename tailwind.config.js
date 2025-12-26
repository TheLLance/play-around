tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      colors: {
        titan: {
          base: '#0b0f1f',
          surface: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.12)',
          accent: '#62f6ff',
          accent2: '#8b5bff',
        },
      },
      boxShadow: {
        glow: '0 20px 50px rgba(0,0,0,0.45)',
      },
    },
  },
};
